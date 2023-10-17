import { useEffect, useState } from "react";
import {
  GameboardContainer,
  StickLine,
  TextGridContainer,
  TextMainContainer,
} from "./Gameboard.styled";
import { Stick } from "../Sticks/Sticks";
import allValuesInitial from "../../gameLogic/allValuesInitial";
//import eraseSticks from "../../gameMoves/eraseSticks";
import {
  ButtonContainer,
  PlayingBtn,
} from "../PlayingButtons/PlayingButtons.styled";
import sticksToErase from "../../gameLogic/sticksToErase";
import { useMyContext } from "../../application/Provider";
import { updateUser } from "../../application/api";

const Gameboard = () => {
  const [userState, setUserState] = useMyContext();
  const [allValues, setAllValues] = useState(allValuesInitial);
  const gameboardSetting = [...allValues];

  const [humanPlayer, setHumanPlayer] = useState(true);
  const [isFirstStep, setIsFirstStep] = useState(true);
  const [isEndGame, setIsEndGame] = useState(false);
  const [updatedFirebase, setUpdatedFirebase] = useState(false);
  const [winner, setWinner] = useState("");
  const [selectedLine, setSelectedLine] = useState(0);

  const userData = { ...userState };
  const [userId, setUserId] = useState();
  const loggedIn = userData.loggedIn;

  //console.log("userData al inicio Gameboard", userData);
  //console.log('logged in? ',loggedIn);
  //console.log('userState L37',userState);

  //WE SET USER DATA TO DISPLAY - STATE TO SAVE THE OBJECT
  const [userInfo, setUserInfo] = useState({
    currentPlayer: "",
    playerMatches: "",
    playerVictories: "",
    allData: "",
  });

  //WE SET USER DATA TO DISPLAY IN THE BEGINNING
  useEffect(() => {
    if (loggedIn && !isEndGame) {
      const index = userData.userIndex;
      //console.log("index", index);
      const currentPlayer = userData.persons[index].username;
      const playerMatches = userData.persons[index].totalMatches;
      const playerVictories = userData.persons[index].totalVictories;
      const allPlayerData = { ...userData.persons[index] };
      //console.log("all data =>", allPlayerData);
      const playerId = userData.persons[index].id;
      setUserId(playerId);

      setUserInfo({
        ...userInfo,
        currentPlayer: currentPlayer,
        playerMatches: playerMatches,
        playerVictories: playerVictories,
        allData: allPlayerData,
      });
    }
  }, []);

  // 2B & 6B. WE UPDATE WINNER PROFILE AT USER INFO STATE
  useEffect(() => {
    if (loggedIn) {
      const allPlayers = userData.persons;
      const playerMatches = userInfo.playerMatches;
      const playerVictories = userInfo.playerVictories;
      const allPlayerData = userInfo.allData;

      if (winner == "human") {
        setUserInfo({
          ...userInfo,
          playerMatches: playerMatches + 1,
          playerVictories: playerVictories + 1,
          allData: allPlayerData,
          allPlayersArray: allPlayers,
        });
        setIsEndGame(true);
      } else if (winner == "computer") {
        setUserInfo({
          ...userInfo,
          playerMatches: playerMatches + 1,
          playerVictories: playerVictories,
          allData: allPlayerData,
          allPlayersArray: allPlayers,
        });
        setIsEndGame(true);
        //console.log("Línia 96 => FETA");
      }
    }
  }, [winner]);

  // 6.B. WE UPDATE FIREBASE PROFILE
  useEffect(() => {
    if (
      loggedIn &&
      (winner == "human") | (winner == "computer") &&
      !updatedFirebase
    ) {
      const userNewInfo = { ...userInfo };
      //console.log("userNewInfo L104", userNewInfo);
      console.log("userId", userId);

      const newTotalMatches = userNewInfo.playerMatches;
      //console.log("newTotalMatches L108", newTotalMatches);
      const newTotalVictories = userNewInfo.playerVictories;
      //console.log("newTotalVictories L110", newTotalVictories);

      const playerUpdatedData = {
        ...userNewInfo.allData,
        totalMatches: newTotalMatches,
        totalVictories: newTotalVictories,
      };
      console.log("L117 playerUpdatedData", playerUpdatedData);
      console.log("userId L121", userId);

      updateUser(userId, playerUpdatedData);
      setUpdatedFirebase(true);
    }
  }, [isEndGame]);

  // GAME LOGIC
  useEffect(() => {
    if (isFirstStep && !isEndGame) {
      setIsFirstStep(false);
    } else {
      if (!humanPlayer) {
        const receivedValues = [...allValues];
        setSelectedLine(0);

        // 2. WE DETECT IF THE USER IS A WINNER
        let sticksSum = countSticks(receivedValues);
        // console.log("sticksum L97", sticksSum);
        if (sticksSum === 1) {
          alert("You win!");
          // 2.B. UPDATE RANKING
          // SETWINNER TRIGGERS UPDATE RANKING INSIDE USE EFFECT - LINE 67 or so
          setWinner("human");
        }

        // 3. COMPUTER CHOSES STICK OR STICKS TO ERASE
        const arraySticksToErase = sticksToErase(receivedValues);
        //console.log("arraySticksToErase en ComputerTurn", arraySticksToErase);

        // 4. WE PAINT THE NEW KEYBOARD SETTING
        setAllValues(arraySticksToErase);

        // 5. WE CHECK IF COMPUTER WINS
        sticksSum = countSticks(arraySticksToErase);
        //console.log("sticks at the end of computer turn - L119", sticksSum);
        if (sticksSum === 1) {
          alert("Computer wins!");

          // 5.B. SETWINNER TRIGGERS UPDATE RANKING INSIDE USE EFFECT - LINE 69 or so
          setWinner("computer");
        } else {
          // 6. COMPUTER PASS THE TURN TO HUMAN PLAYER
          setHumanPlayer(true);
        }
      }
    }
  }, [humanPlayer]);

  // FUNCTION TO COUNT REMAINING STICKS
  const countSticks = (array) => {
    const sticksSum = array.reduce((accumulator, { stickValue }) => {
      return accumulator + stickValue;
    }, 0);
    return sticksSum;
  };

  /*
  // FUNCTION TO DELETE STICKS
  const eraseStick = (stickPosition) => {
    const resultErase = eraseSticks(stickPosition, gameboardSetting);
    //console.log("resultErase", resultErase);
    setAllValues(resultErase);
  };
*/

  // FUNCTION TO DELETE STICKS - NEW
  const eraseStick = (stickPosition) => {
    // DELETE STICKS FUNCTION - OLD
    const eraseSticks = (stickPosition, allValues) => {
      // console.log("stickPosition at erase", stickPosition);
      // console.log("allValues at erase", allValues);

      const chosenLine = allValues[stickPosition].lineId;
      //console.log("chosenLine", chosenLine);

      setSelectedLine(chosenLine);

      if (allValues[stickPosition].stickValue === 0) {
        alert(
          "You are picking a stick already erased. Pick a valid one, please."
        );
        return allValues;
      } else {
        if (selectedLine === 0 || selectedLine === chosenLine) {
          setSelectedLine(allValues[stickPosition].lineId);
          const modifiedStick = {
            ...allValues[stickPosition],
            stickValue: 0,
            stickEnabled: false,
          };
          const newValues = [...allValues];
          newValues[stickPosition] = modifiedStick;
          console.log("newValues at erase", newValues);
          return newValues;
        } else {
          alert(
            "In each move, you can remove any number of matches but only from one row. Make your move again, please"
          );
          return allValues;
        }
      }
    };

    const resultErase = eraseSticks(stickPosition, gameboardSetting);
    //console.log("resultErase", resultErase);
    setAllValues(resultErase);
  };

  // FUNCTION TO HANDLE NEW GAME
  const handleClickNewGame = () => {
    console.log("ok, let's play a new game!");
    setUpdatedFirebase(false);
    setIsEndGame(false);
    setWinner("");
    setAllValues(allValuesInitial);
    setIsFirstStep(true);
    setHumanPlayer(true);
    setSelectedLine(0);
    //console.log("initialValues post click newgame", allValuesInitial);
  };

  return (
    <GameboardContainer>
      <StickLine className="line1">
        <Stick
          stickValue={gameboardSetting[0].stickValue}
          eraseStick={() => eraseStick(0)}
        />
      </StickLine>
      <StickLine className="line3">
        <Stick
          stickValue={gameboardSetting[1].stickValue}
          eraseStick={() => eraseStick(1)}
        />
        <Stick
          stickValue={gameboardSetting[2].stickValue}
          eraseStick={() => eraseStick(2)}
        />
        <Stick
          stickValue={gameboardSetting[3].stickValue}
          eraseStick={() => eraseStick(3)}
        />
      </StickLine>
      <StickLine className="line5">
        <Stick
          stickValue={gameboardSetting[4].stickValue}
          eraseStick={() => eraseStick(4)}
        />
        <Stick
          stickValue={gameboardSetting[5].stickValue}
          eraseStick={() => eraseStick(5)}
        />
        <Stick
          stickValue={gameboardSetting[6].stickValue}
          eraseStick={() => eraseStick(6)}
        />
        <Stick
          stickValue={gameboardSetting[7].stickValue}
          eraseStick={() => eraseStick(7)}
        />
        <Stick
          stickValue={gameboardSetting[8].stickValue}
          eraseStick={() => eraseStick(8)}
        />
      </StickLine>
      <StickLine className="line7">
        <Stick
          stickValue={gameboardSetting[9].stickValue}
          eraseStick={() => eraseStick(9)}
        />
        <Stick
          stickValue={gameboardSetting[10].stickValue}
          eraseStick={() => eraseStick(10)}
        />
        <Stick
          stickValue={gameboardSetting[11].stickValue}
          eraseStick={() => eraseStick(11)}
        />
        <Stick
          stickValue={gameboardSetting[12].stickValue}
          eraseStick={() => eraseStick(12)}
        />
        <Stick
          stickValue={gameboardSetting[13].stickValue}
          eraseStick={() => eraseStick(13)}
        />
        <Stick
          stickValue={gameboardSetting[14].stickValue}
          eraseStick={() => eraseStick(14)}
        />
        <Stick
          stickValue={gameboardSetting[15].stickValue}
          eraseStick={() => eraseStick(15)}
        />
      </StickLine>

      <ButtonContainer>
        <PlayingBtn onClick={handleClickNewGame}>NEW GAME</PlayingBtn>

        <PlayingBtn onClick={() => setHumanPlayer(false)}>
          COMPUTER TURN
        </PlayingBtn>
      </ButtonContainer>
      {!loggedIn ? (
        ""
      ) : (
        <TextMainContainer>
          <TextGridContainer>
            <p>
              User name:<span>{userInfo.currentPlayer}</span>
            </p>
            <p>
              Total matches:<span>{userInfo.playerMatches}</span>
            </p>
            <p>
              Total victories:<span>{userInfo.playerVictories}</span>
            </p>
          </TextGridContainer>
        </TextMainContainer>
      )}
    </GameboardContainer>
  );
};

export default Gameboard;

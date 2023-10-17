import "./styles/index.css";
import Provider from "./application/Provider";
import Router from "./application/Router";
import { BodyMainContainer } from "./styles/styledComponents";

function App() {
  return (
    <BodyMainContainer>
      <Provider>
        <Router />
      </Provider>
    </BodyMainContainer>
  );
}

export default App;

import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./routes";

import GlobalStyle from "./styles/global";

const App = (): JSX.Element => (
  <Router>
    <GlobalStyle />
    <Routes />
  </Router>
);

export default App;

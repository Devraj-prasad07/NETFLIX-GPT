import Body from "./components/Body";
import { Provider } from "react-redux";
import Appstore from "./ReduxToolkit/Appstore";

function App() {
  return (
    <>
      <Provider store={Appstore}>
        <Body />
      </Provider>
    </>
  );
}

export default App;

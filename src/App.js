import TableList from "./TableList";
import { Provider } from "react-redux"
import store from "./store/index";

function App() {
  return (
    <>
      <Provider store={store}>
        <TableList />
      </Provider>
    </>
  );
}

export default App;

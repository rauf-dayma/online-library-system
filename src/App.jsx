import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import appStore from "./utils/appStore.js";
import { Provider } from "react-redux";

// "https://raw.githubusercontent.com/ozlerhakan/mongodb-json-files/master/datasets/books.json"

function App() {
  const [data, setData] = useState(null);

  return (
    <>
      <Provider store={appStore}>
        <Header />
        <Outlet />
      </Provider>
    </>
  );
}

export default App;

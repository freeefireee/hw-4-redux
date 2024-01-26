import React from "react";
import Counter from "./counter/Counter";
import { Provider } from "react-redux";
import store from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Counter />
      </div>
    </Provider>
  );
};

export default App;

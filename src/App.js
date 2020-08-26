import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import AddTask from "./components/AddTask";
import Table from "./components/Table";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={AddTask} />
      <Route exact path="/view" component={Table} />
    </BrowserRouter>
  );
}

export default App;

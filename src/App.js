import React from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route exact path="/category/:categoryid">
            <ItemListContainer />
          </Route>
          <Route exact path="/item/:itemid">
            <ItemDetailContainer />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

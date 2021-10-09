// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "./components/Navbars";
import Card from "./components/Cardlist";
import CartBox from "./components/Cartbox";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const [itemCount, setItemCount] = React.useState(0);
  const [itemList, setItemList] = React.useState([]);
  console.log(itemCount);
  console.log(itemList);

  return (
    <>
      <Router>
        <Navbars itemCount={itemCount} />
        <Switch>
          <Route exact path="/">
            <Card item={{ itemCount, setItemCount, itemList, setItemList }} />
          </Route>
          <Route exact path="/cart">
            <CartBox itemList={{ itemList, itemCount }} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

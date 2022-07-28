import React from "react";
import{BrowserRouter,Switch,Route} from 'react-router-dom';
import GamePage from "./Pages/GamePage/gamepage";
import Home from "./Pages/Home/Home";

const Router = () =>{
    return(
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/gamepage" component={GamePage}></Route>
    </Switch>
    </BrowserRouter>
    )
};
export default Router;
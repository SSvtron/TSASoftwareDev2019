import * as React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";



import './styles/index.css';

class App extends React.PureComponent {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={SignUp} />
                <Route path="/signin" component={Login} />
            </Switch>


        );
    }
}



export default App;

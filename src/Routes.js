import { Switch, Route} from "react-router-dom";
import {  HOME_PATH, SIGNINUP_PATH } from "./constants/routes";
import { Home } from "./pages/Home";
import { SignInUp } from "./pages/SignInUp";

export const Routes=()=>{
    return <Switch>
        <Route path={HOME_PATH} component={Home} exact />
        <Route path={SIGNINUP_PATH} component={SignInUp}/>
    </Switch>
   
    
    
    
  
}
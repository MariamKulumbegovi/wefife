import { Switch, Route} from "react-router-dom";
import {  HOME_PATH } from "./constants/routes";
import { Home } from "./pages/Home";

export const Routes=()=>{
    return <Switch>
        <Route path={HOME_PATH} component={Home} exact />
      
    </Switch>
   
    
    
    
  
}
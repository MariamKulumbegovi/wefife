import { Switch, Route} from "react-router-dom";
import { GROUPS_PATH, HOME_PATH } from "./constants/routes";
import { Groups } from "./pages/Groups";
import { Home } from "./pages/Home";

export const Routes=()=>{
    return <Switch>
        <Route path={HOME_PATH} component={Home} exact />
        <Route path={GROUPS_PATH} component={Groups} />
    </Switch>
   
    
    
    
  
}
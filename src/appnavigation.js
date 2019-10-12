import homeScreen from "./homepage";
import newsdetails from './components/newsdetails';
import {createStackNavigator} from 'react-navigation-stack';

const Navigator= createStackNavigator({
    Home:{screen:homeScreen},
    Details:{screen:newsdetails}
  });
  export default Navigator;
  

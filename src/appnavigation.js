import homeScreen from "./homepage";
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

const Navigator= createStackNavigator({
    Home:{screen:homeScreen},
    // Details:{screen:NewsDetails}
  });
  
  export default createAppContainer(Navigator);
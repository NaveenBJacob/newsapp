import {React,Components} from "react";
import AppNavigator from "./src/appnavigation";
import {createAppContainer} from "react-navigation";


const AppContainer=createAppContainer(AppNavigator);

export default class App extends Components{
  render(){
    return <AppContainer/>
  }
}
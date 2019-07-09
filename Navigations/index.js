// import React, { Component } from 'react';
import {createAppContainer,createSwitchNavigator,createStackNavigator} from 'react-navigation';
import SplashScreen from '../Screens/SplashScreen';
import DashBoardScreen from '../Screens/DashBoardScreen';
import FurtherComponents from '../Components/FurtherComponents';
import YesOrNoComponents from '../Components/YesOrNOComponents';

const StackNav = createStackNavigator({
    DashBoardScreen:{screen:DashBoardScreen},
    FurtherComponents:{screen:FurtherComponents},
    YesOrNoComponents:{screen:YesOrNoComponents}
});
const SwitchNav = createSwitchNavigator({
SplashScreen:{screen:SplashScreen},
StackNav:{screen:StackNav}
});


const AppContainerNav = createAppContainer(SwitchNav);

export default AppContainerNav;
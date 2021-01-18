import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen3194262Navigator from '../features/BlankScreen3194262/navigator';
import BlankScreen2194261Navigator from '../features/BlankScreen2194261/navigator';
import BlankScreen1194259Navigator from '../features/BlankScreen1194259/navigator';
import BlankScreen0194258Navigator from '../features/BlankScreen0194258/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen3194262: { screen: BlankScreen3194262Navigator },
BlankScreen2194261: { screen: BlankScreen2194261Navigator },
BlankScreen1194259: { screen: BlankScreen1194259Navigator },
BlankScreen0194258: { screen: BlankScreen0194258Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

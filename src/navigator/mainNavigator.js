import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen9194270Navigator from '../features/BlankScreen9194270/navigator';
import BlankScreen8194267Navigator from '../features/BlankScreen8194267/navigator';
import BlankScreen7194266Navigator from '../features/BlankScreen7194266/navigator';
import BlankScreen6194265Navigator from '../features/BlankScreen6194265/navigator';
import BlankScreen5194264Navigator from '../features/BlankScreen5194264/navigator';
import BlankScreen4194263Navigator from '../features/BlankScreen4194263/navigator';
import BlankScreen3194262Navigator from '../features/BlankScreen3194262/navigator';
import BlankScreen2194261Navigator from '../features/BlankScreen2194261/navigator';
import BlankScreen1194259Navigator from '../features/BlankScreen1194259/navigator';
import BlankScreen0194258Navigator from '../features/BlankScreen0194258/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen9194270: { screen: BlankScreen9194270Navigator },
BlankScreen8194267: { screen: BlankScreen8194267Navigator },
BlankScreen7194266: { screen: BlankScreen7194266Navigator },
BlankScreen6194265: { screen: BlankScreen6194265Navigator },
BlankScreen5194264: { screen: BlankScreen5194264Navigator },
BlankScreen4194263: { screen: BlankScreen4194263Navigator },
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

import { createAppContainer, createDrawerNavigator } from 'react-navigation';

import { Home, News } from '../components';

const Router = createDrawerNavigator({
  Home: {
    screen: Home,
  },
  News: {
    screen: News,
  },
});

export default createAppContainer(Router);

// In App.js in a new project

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './auth-navigation';
function Router() {
    return (
      <NavigationContainer>
        <AuthNavigation/>
      </NavigationContainer>
    );
  }
  export default Router;
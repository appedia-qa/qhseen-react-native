import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';

import RootStack from './navigator/RootStack';

class App extends Component {
  render(){
    return(
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    );
  }
}

export default App;

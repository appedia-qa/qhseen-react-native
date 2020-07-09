import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';

import RootStack from './navigator/RootStack';
import Provider from './redux/provider';

class App extends Component {
  render(){
    return(
      <Provider>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;

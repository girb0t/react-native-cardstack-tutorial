import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';
import { Header } from './components/common'

// Provider is the thing that binds redux with React
const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View>
        <Header headerText="Yolo" />
      </View>
    </Provider>
  );
};

export default App;

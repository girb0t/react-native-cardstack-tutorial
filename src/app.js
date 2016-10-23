import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';

// Provider is the thing that binds redux with React
const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View>
        <Text>Hello World</Text>
      </View>
    </Provider>
  );
};

export default App;

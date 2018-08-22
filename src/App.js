import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

const store = createStore(reducers);

// Provider can have only one child
const App = () => {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <Header headerText="Tech Stack" />
        <View style={styles.listContainerStyle}>
          <LibraryList />
        </View>
      </View>
    </Provider>
  );
};

const styles = {
  listContainerStyle: {
    margin: 10,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd'
  }
};

export default App;

import React, { Component } from 'react';
import {View,Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducer';
import Header  from './components/common/header';
import LibraryList from './components/LibraryList';

const App = () => {
    return (
        <Provider store={createStore(reducers)}> 
        <View>
            
         <Text>sdfdsfsd</Text>
         <Header></Header>
         <LibraryList/>
        </View>
        </Provider>
    );
};


export default App
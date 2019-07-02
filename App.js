import React from 'react';
import {Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import TopicList from './Screens/TopicList';
import TopicWordList from './Screens/TopicWordList'
import SpeakingSampleList from './Screens/SpeakingSampleList'
import SampleAnswer from './Screens/SampleAnswer'
import PracticeWord from './Screens/PracticeWord'
const AppNavigator = createStackNavigator(
  {
    TopicList: TopicList,
    WordListTopic: TopicWordList,
    SpeakingSampleList: SpeakingSampleList,
    SampleAnswer: SampleAnswer,
    PracticeWord: PracticeWord
  }
);
const AppContainer = createAppContainer(AppNavigator)
class App extends React.Component {
  render(){
    return(
      <AppContainer/>
    )
  }
}
export default App;
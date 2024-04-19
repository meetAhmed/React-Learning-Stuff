import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// local
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './components/WelcomeScreen';
import MenuView from './components/MenuView'
import MenuWithSectionsView from './components/MenuWithSectionsView';
import FeedbackView from './components/FeedbackView';
import ReactBasics from './components/ReactBasics';
import ReactBasicsExercise from './components/ReactBasicsExercise';
import { NetNinjasLearning } from './components/NetNinjasLearning';
import NetNinjasTodo from './components/NetNinjasTodoApp';

export default function App() {
  return (
    <>
      <View style={styles.container2}>
        <NetNinjasTodo />
        {/* <NetNinjasLearning /> */}
        {/* <ReactBasicsExercise /> */}
        {/* <ReactBasics /> */}
        {/* <LittleLemonHeader /> */}
        {/* <MenuView /> */}
        {/* <MenuWithSectionsView /> */}
        {/* <FeedbackView /> */}
      </View>
      <View style={styles.footer2}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.95,
    backgroundColor: '#495E57'
  },
  container2: {
    flex: 0.95,
    backgroundColor: '#333333'
  },
  footer: {
    flex: 0.05,
    backgroundColor: '#F4CE14'
  },
  footer2: {
    flex: 0.05,
    backgroundColor: '#EE9972'
  },
});
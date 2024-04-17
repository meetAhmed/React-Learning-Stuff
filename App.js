import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './components/WelcomeScreen';
import MenuView from './components/MenuView'

export default function App() {
  return (
    <>
      <View style={styles.container2}>
        <LittleLemonHeader />
        <WelcomeScreen />
        <MenuView />
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
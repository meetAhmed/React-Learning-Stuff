import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

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

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={WelcomeScreen} />
        <Drawer.Screen name="Menu" component={MenuWithSectionsView} />
      </Drawer.Navigator>
    </NavigationContainer>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor: 'tomato' },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
        <Stack.Screen options={{ title: "Home" }} name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Menu" component={MenuWithSectionsView} />
      </Stack.Navigator>
    </NavigationContainer>
  );

  // return (
  //   <>
  //     <View style={styles.container2}>
  //       {/* <NetNinjasTodo /> */}
  //       {/* <NetNinjasLearning /> */}
  //       {/* <ReactBasicsExercise /> */}
  //       {/* <ReactBasics /> */}
  //       <LittleLemonHeader />
  //       {/* <MenuView /> */}
  //       <MenuWithSectionsView />
  //       {/* <FeedbackView /> */}
  //     </View>
  //     <View style={styles.footer2}>
  //       <LittleLemonFooter />
  //     </View>
  //   </>
  // );
}
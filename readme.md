- View, Text.
- ScrollView (Loads all data at once).
- StyleSheet.
- Flatlist (Lazy rendering. Rendering time not affected by large list.)
- TextInput.
- Image.
- Touchable(s)
- Button
- Alert (prompt works on iOS only)
- Platform
- StatusBar
- SafeAreaView
- Flex
- Pressable, useColorScheme, useWindowDimensions
- Multiple style properties (style={[styles.container, {backgroundColor: 'white'}]})
- Conditional elements ({showDetails && <Text>Details</Text>})
- React Navigation (https://reactnavigation.org/docs/getting-started)
npm install @react-navigation/native
npm install @react-navigation/native-stack
npx expo install react-native-screens react-native-safe-area-context

npm install @react-navigation/bottom-tabs (Tab nav)

https://reactnavigation.org/docs/drawer-navigator#installation
npm install @react-navigation/drawer
npx expo install react-native-gesture-handler react-native-reanimated

const onBtnTap = () => {

}
<Text onPress={onBtnTap}>Tap me</Text>


----
https://stackoverflow.com/a/77764225
npm install expo@latest
npm install expo@49
npx expo install --fix (Want to upgrade installed dependencies to match the installed expo version?)


https://www.youtube.com/watch?v=mJ3bGvy0WAY
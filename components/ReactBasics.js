import React from 'react';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    TouchableHighlight,
    Button,
    Alert,
    SafeAreaView,
    Platform,
    StatusBar,
    Dimensions
} from 'react-native';

const handleTap = () => {

}

const ReactBasics = () => {
    console.log(Dimensions.get('screen'));
    console.log(useDeviceOrientation());
    
    const {landscape} = useDeviceOrientation();

    return (
        <SafeAreaView style={styles.container}>
            {/* <Text style={styles.text}>Hello there!</Text> */}
            {/* <Image source={require("../assets/icon.png")}/> */}
            {/* <TouchableOpacity onPress={() => alert("Button Tapped"}>
            <Image
                blurRadius={2}
                source={{
                    width: 200,
                    height: 200,
                    uri: "https://picsum.photos/200/300"
                }} />
            </TouchableOpacity> */}
            {/* <Button
                title="Login"
                color='orange'
                onPress={() => Alert.alert("My title", "My Message", [
                    { text: "Yes", onPress: { handleTap } },
                    { text: "No", onPress: { handleTap } }
                ])}
            />
            <Button
                title="Sign up"
                color='green'
                onPress={() => Alert.prompt("Title", "Messages", text => { })}
            /> */}
            <View style={{backgroundColor: "green", width: '100%', height: landscape === 'landscape' ? '100%' : '30%'}}>
                <Text>Box is here</Text>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    box: {
        backgroundColor: "green",
        width: '100%'
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        // justifyContent: "center",
        // alignItems: 'center'
    },
    text: {
        textAlign: "center"
    }
});

export default ReactBasics;
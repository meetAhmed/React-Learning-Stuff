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
            {/* <View style={{backgroundColor: "green", width: '100%', height: landscape === 'landscape' ? '100%' : '30%'}}>
                <Text>Box is here</Text>
            </View> */}
            <View style={{
                backgroundColor: 'white',
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center', // main axis
                alignItems: 'center', // secondary axis, within each line
                // flexWrap: 'wrap',
                alignContent: 'center' // only works with wrapping
            }}>
                {/* <View style={{backgroundColor: 'tomato', flex: 0.5}}/>
                <View style={{backgroundColor: 'green', flex: 0.5}}/>
                <View style={{backgroundColor: 'yellow', flex: 2}}/> */}
                {/* <View style={{backgroundColor: 'dodgerblue', width: 100, height: 100, alignSelf: 'flex-start'}}/> */}
                <View style={{backgroundColor: 'dodgerblue', width: 400, height: 100, flexShrink: 1}}/>
                <View style={{backgroundColor: 'gold', width: 100, height: 100, top: 20, position: 'absolute'}}/> 
                <View style={{backgroundColor: 'tomato', width: 100, height: 100, bottom: 20}}/>
                <View style={{backgroundColor: 'grey', width: 100, height: 100}}/>
                {/* <View style={{backgroundColor: 'greenyellow', width: 100, height: 100}}/> */}
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
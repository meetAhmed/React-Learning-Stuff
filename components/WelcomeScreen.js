import { View, Text, TouchableOpacity } from 'react-native';

export default WelcomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{
                padding: 40,
                fontSize: 22,
                color: '#333',
                textAlign: 'center'
            }}>
                Welcome to Little Lemon
            </Text>
            <Text style={{
                fontSize: 14,
                padding: 20,
                textAlign: 'center',
                color: '#333',
            }}>
                Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
            </Text>
            <TouchableOpacity onPress={() => { navigation.navigate('Menu') }}>
                <Text style={{ backgroundColor: 'tomato', color: 'white', fontSize: 18, borderRadius: 15, width: 150, padding: 10, textAlign: 'center' }}>View Menu</Text>
            </TouchableOpacity>
        </View>
    )
}
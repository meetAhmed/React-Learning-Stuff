import { View, Text } from 'react-native';

export default WelcomeScreen = () => {
    return (
        <View>
            <Text style={{
                padding: 40,
                fontSize: 22,
                color: '#EDEFEE',
                textAlign: 'center'
            }}>
                Welcome to Little Lemon
            </Text>
            <Text style={{
                fontSize: 14,
                padding: 20,
                textAlign: 'center',
                color: '#EDEFEE',
            }}>
                Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
            </Text>
        </View>
    )
}
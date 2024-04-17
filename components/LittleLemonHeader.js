import { StyleSheet, Text, View } from 'react-native';

export default function LittleLemonHeader() {
    return (
        <View style={headerStyles.container2}>
            <Text style={headerStyles.headerText} numberOfLines={2}>
                Home
            </Text>
        </View>
    );
}

const headerStyles = StyleSheet.create({
    container: {
        backgroundColor: '#F4CE14',
    },
    container2: {
        backgroundColor: '#EE9972',
    },
    headerText: {
        color: 'black',
        textAlign: 'center',
        marginTop: 40,
        fontSize: 22,
        fontWeight: 'bold'
    }
});
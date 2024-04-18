import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';

const FeedbackView = () => {
    const [firstName, onChangeFirstName] = useState('');
    const onButtonTap = () => {

    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.headingSection} onPress={onButtonTap}>
                How was your visit to Little Lemon?
            </Text>
            <Text style={styles.infoSection}>
                Little Lemon is a charming neighborhood bistro that serves simple food
                and classic cocktails in a lively but casual environment. We would love
                to hear your experience with us!
            </Text>
            <TextInput
                style={styles.input}
                value={firstName}
                onChangeText={onChangeFirstName}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: 'EDEFEE',
        backgroundColor: '#F4CE14',
    },
    messageInput: {
        height: 100,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        backgroundColor: '#F4CE14',
    },
    infoSection: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
        backgroundColor: '#495E57',
    },
    headingSection: {
        fontSize: 28,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
        backgroundColor: '#495E57',
    },
});

export default FeedbackView;
import { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput,
    ScrollView,
    FlatList,
    TouchableOpacity,
    Alert,
    Touchable,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';

// useState
const NetNinjasLearning4 = () => {
    const [name, setName] = useState('Username');
    const [person, setPerson] = useState({
        name: 'Initial name',
        age: 1
    });

    return (
        <View style={styles.container}>
            <Text>{name}</Text>
            <Text>Person: {person.name} and age: {person.age}</Text>
            <View style={styles.buttonContainer}>
                <Button title='Tap me' onPress={() => setName('New Username')} />
            </View>
        </View>
    );
}

// Text inputs
const NetNinjasLearning5 = () => {
    const [name, setName] = useState('Username');
    const [age, setAge] = useState(30);

    return (
        <View style={styles.container}>
            <Text>Enter name:</Text>
            <TextInput
                style={styles.input}
                placeholder='Enter your name'
                onChangeText={setName}
            />
            <Text>Enter age:</Text>
            <TextInput
                style={styles.input}
                placeholder='Enter your age'
                onChangeText={setAge}
                keyboardType='numeric'
            />
            <Text>Enter description:</Text>
            <TextInput
                multiline
                style={styles.input}
                placeholder='Enter description'
            />
            <Text>Name: {name}, age: {age}</Text>
        </View>
    );
}

// List and ScrollView
const NetNinjasLearning6 = () => {
    const [people, setPeople] = useState([
        { name: 'Person A', id: 1 },
        { name: 'Person B', id: 2 },
        { name: 'Person C', id: 3 },
        { name: 'Person D', id: 4 },
        { name: 'Person E', id: 5 },
        { name: 'Person F', id: 6 },
        { name: 'Person G', id: 7 },
        { name: 'Person H', id: 8 },
    ]);

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text>Lists</Text>
                {
                    people.map(person =>
                        <View key={person.id}>
                            <Text style={styles.item}>{person.name}</Text>
                        </View>
                    )
                }
            </ScrollView>
        </View>
    );
}

// Flat list
const NetNinjasLearning = () => {
    const [people, setPeople] = useState([
        { name: 'Person A', id: 1 },
        { name: 'Person B', id: 2 },
        { name: 'Person C', id: 3 },
        { name: 'Person D', id: 4 },
        { name: 'Person E', id: 5 },
        { name: 'Person F', id: 6 },
        { name: 'Person G', id: 7 },
        { name: 'Person H', id: 8 },
        { name: 'Person I', id: 9 },
    ]);

    const pressHandler = (id) => {
        setPeople((prevPeople) => {
            return prevPeople.filter(person => person.id != id);
        });
    }

    return (
        <View style={styles.container}>
            <FlatList
                numColumns={2}
                keyExtractor={(item) => item.id}
                data={people}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => { pressHandler(item.id) }}>
                        <Text style={styles.item}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

module.exports = { NetNinjasLearning };
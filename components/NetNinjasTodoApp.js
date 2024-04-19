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

const NetNinjasTodoHeader = () => {
    return (
        <View style={todoHeaderStyles.header}>
            <Text style={todoHeaderStyles.title}>My Todos List</Text>
        </View>
    )
};

const todoHeaderStyles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 40,
        backgroundColor: 'coral'
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
})

const NetNinjaTodoItem = ({ todo, deleteTodo }) => {
    return (
        <TouchableOpacity onPress={() => { deleteTodo(todo) }}>
            <View style={todoItemStyles.item}>
                <MaterialIcons name='delete' size={18} color='#333' />
                <Text style={todoItemStyles.text}>{todo.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const todoItemStyles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        marginLeft: 15
    }
});

const NetNinjasAddTodo = ({ addTodo }) => {
    const [text, setText] = useState('');

    return (
        <View>
            <TextInput
                placeholder='New Todo...'
                onChangeText={setText}
                style={addTodoStyles.input}
            />
            <Button title='Add Todo' color='coral' onPress={() => { addTodo(text) }} />
        </View>
    )
}

const addTodoStyles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})

const NetNinjasTodo = () => {
    const [todos, setTodos] = useState([
        { text: 'Buy coffee', key: 1 },
        { text: 'Create an app', key: 2 },
        { text: 'Learn React Native', key: 3 },
    ])

    const deleteTodo = (todoToDelete) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.key != todoToDelete.key);
        })
    }

    const addTodo = (text) => {
        if (text.length > 3) {
            setTodos((prevTodos) => {
                return [
                    { text: text, key: Math.random() },
                    ...prevTodos
                ]
            })
        } else {
            Alert.alert("Oh ho!", "Please enter valid todo")
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={todoStyles.container}>
                {/* Header */}
                <NetNinjasTodoHeader />
                <View style={todoStyles.content} >
                    {/* Todo form */}
                    <NetNinjasAddTodo addTodo={addTodo} />
                    <View style={todoStyles.list}>
                        <FlatList
                            data={todos}
                            renderItem={({ item }) => <NetNinjaTodoItem todo={item} deleteTodo={deleteTodo} />}
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const todoStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        padding: 50,
        flex: 1
    },
    list: {
        marginTop: 20,
        flex: 1
    }
});

export default NetNinjasTodo;
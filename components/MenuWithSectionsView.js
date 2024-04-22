import { useState } from 'react';
import { View, Text, StyleSheet, SectionList, Pressable, useColorScheme, useWindowDimensions, TouchableOpacity } from 'react-native';

const menuItemsToDisplay = [
    {
        title: 'Appetizers',
        data: [
            'Hummus',
            'Moutabal',
            'Falafel',
            'Marinated Olives',
            'Kofta',
            'Eggplant Salad',
        ],
    },
    {
        title: 'Main Dishes',
        data: ['Lentil Burger', 'Smoked Salmon', 'Kofta Burger', 'Turkish Kebab'],
    },
    {
        title: 'Sides',
        data: [
            'Fries',
            'Buttered Rice',
            'Bread Sticks',
            'Pita Pocket',
            'Lentil Soup',
            'Greek Salad',
            'Rice Pilaf',
        ],
    },
    {
        title: 'Desserts',
        data: ['Baklava', 'Tartufo', 'Tiramisu', 'Panna Cotta'],
    },
];

const MenuWithSectionsView = ({navigation}) => {
    const renderItem = ({ item }) => <Text style={styles.text}>{item}</Text>

    const sectionHeader = ({ section: { title } }) => <Text style={styles.headerText}>{title}</Text>

    const [showMenu, setShowMenu] = useState();

    const colorScheme = useColorScheme();

    const windowInfo = useWindowDimensions();
    console.log(windowInfo);
    
    return (
        <View style={[styles.container, {backgroundColor: colorScheme === 'light' ? 'tomato' : 'black'}]}>
            <Text style={styles.headerText}>Color Scheme is: {colorScheme}</Text>
            {
                !showMenu && <Text style={styles.infoSection}>
                    Little Lemon is a charming neighborhood bistro that serves simple food
                    and classic cocktails in a lively but casual environment. We would
                    love to hear your experience with us!
                </Text>
            }
            <TouchableOpacity style={styles.button} onPress={() => {navigation.goBack()}}>
            <Text style={styles.buttonText}>Go back</Text>
            </TouchableOpacity>
            <Pressable style={styles.button} onPressIn={() => { setShowMenu(!showMenu) }}>
                <Text style={styles.buttonText}>{showMenu ? 'Hide Menu' : 'View Menu'}</Text>
            </Pressable>
            {
                showMenu && <SectionList
                    keyExtractor={(item, index) => item + index}
                    sections={menuItemsToDisplay}
                    renderItem={renderItem}
                    renderSectionHeader={sectionHeader}
                    ItemSeparatorComponent={() => (<View style={styles.separator}></View>)}
                />
            }
        </View>
    )
};

export default MenuWithSectionsView;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        color: 'yellow',
        padding: 15,
        fontSize: 18
    },
    headerText: {
        color: 'black',
        textAlign: 'center',
        backgroundColor: 'pink',
        width: '100%',
        padding: 12,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 18
    },
    separator: {
        backgroundColor: 'white',
        height: 1
    },
    infoSection: {
        color: 'white',
        textAlign: 'center',
        padding: 15,
        lineHeight: 20,
        fontSize: 16
    },
    button: {
        backgroundColor: 'white',
        margin: 25,
        padding: 15,
        borderRadius: 15,
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold'
    }
});
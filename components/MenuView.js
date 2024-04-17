import { StyleSheet } from 'react-native';
import { View, Text, ScrollView } from 'react-native';

const menuItemsToDisplay = [
    'Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta\n Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta',
];

export default MenuView = () => {
    return (
        <View style={menuStyles.container}>
            <ScrollView
                indicatorStyle='default'
                style={menuStyles.innerContainer}>
                <Text style={menuStyles.text}>Menu</Text>
                <Text style={menuStyles.text}>{menuItemsToDisplay[0]}</Text>
            </ScrollView>
        </View>
    )
}

const menuStyles = StyleSheet.create({
    container: {
        flex: 1
    },
    innerContainer: {
        paddingVertical: 50,
        paddingHorizontal: 50
    },
    text: {
        fontSize: 22,
        color: 'white'
    }
});
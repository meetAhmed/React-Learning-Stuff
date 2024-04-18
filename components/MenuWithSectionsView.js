import { View, Text, StyleSheet, SectionList } from 'react-native';

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

const MenuWithSectionsView = () => {
    const renderItem = ({ item }) => <Text style={{ color: 'white' }}>{item}</Text>

    const sectionHeader = ({ section: { title } }) => <Text style={{ color: 'yellow' }}>{title}</Text>

    return (
        <View style={styles.container}>
            <SectionList
                keyExtractor={(item, index) => item + index}
                sections={menuItemsToDisplay}
                renderItem={renderItem}
                renderSectionHeader={sectionHeader}
            ></SectionList>
        </View>
    )
};

export default MenuWithSectionsView;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
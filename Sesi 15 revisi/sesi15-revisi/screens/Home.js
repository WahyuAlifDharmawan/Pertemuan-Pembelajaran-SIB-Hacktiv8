import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';

export default function Home({ navigation }) {
    const handleProfile = () => {
        navigation.navigate("Profile", { name: "Hello Profile" })
    }
    const handleText = () => {
        navigation.navigate("Text", { name: "Hello Text" })
    }
    const handleColumn = () => {
        navigation.navigate("Column", { name: "Hello Column" })
    }
    const handleFlatList = () => {
        navigation.navigate("FlatList", { name: "Hello FlatList" })
    }
    const handleScrollView = () => {
        navigation.navigate("ScrollView", { name: "Hello ScrollView" })
    }
    const handleAPIList = () => {
        navigation.navigate("APIList", { name: "Customers" })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Hello, Welcome to My App
            </Text>
            <Text style={{color: "#FFFFFF",fontSize: 20}}>
                React RCTN-KS05 Sesi 15
            </Text>
            <View style={styles.rowButton}>
                <View style={{ flex: 1, marginHorizontal: 1 }}>
                    <Button
                        title='Profile'
                        color="#002B5B"
                        onPress={() => handleProfile()}
                    />
                </View>
                <View style={{ flex: 1, marginHorizontal: 1 }}>
                    <Button
                        title='Text'
                        color="#002B5B"
                        onPress={() => handleText()}
                    />
                </View>
                <View style={{ flex: 1, marginHorizontal: 1 }}>
                    <Button
                        title='Column'
                        color="#002B5B"
                        onPress={() => handleColumn()}
                    />
                </View>
            </View>
            <View style={styles.rowButton}>
                <View style={{ flex: 1, marginHorizontal: 1 }}>
                    <Button
                        title='Flat List'
                        color="#002B5B"
                        onPress={() => handleFlatList()}
                    />
                </View>
                <View style={{ flex: 1, marginHorizontal: 1 }}>
                    <Button
                        title='Scroll View'
                        color="#002B5B"
                        onPress={() => handleScrollView()}
                    />
                </View>
            </View>
            <View style={styles.rowButton}>
                <View style={{ flex: 1, marginHorizontal: 1 }}>
                    <Button
                        title='API List'
                        color="#002B5B"
                        onPress={() => handleAPIList()}
                    />
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2F4F4F',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#FFFFFF',
        fontSize: 30
    },
    rowButton: {
        flexDirection: 'row',
        margin: 1
    },
});
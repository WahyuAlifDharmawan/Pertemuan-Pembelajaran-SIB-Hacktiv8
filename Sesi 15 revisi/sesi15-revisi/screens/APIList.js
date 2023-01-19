import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

// let users = []

// async function fetchUsers(){
//     const response = await axios.get("https://randomuser.me/api/");
//     console.log(response.data.results.gender);
//     return response.data.results
//   };

// for (let i = 1; i < 2; i++) {
//     console.log(users)
//     users.push({
//         name: fetchUsers(),
//         // location: ,
//         // email: ,
//         // picture: ,
//     })
// }

// async function fetchUsers() {
//     const response = await axios.get("https://randomuser.me/api/?results=2");
//     // console.log(response.data);
//     return response.data
// };

export default function APIList({ route }) {
    const [users, setUsers] = useState([])
    const USERS = 20

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`https://randomuser.me/api/?results=${USERS}`);
                console.log(response.data.result)
                setUsers(response.data.results)
            } catch (error) {
                console.log(error.message)
            }
        };
        fetchUsers()
        // const response = axios.get("https://randomuser.me/api/?results=2");
        // setUsers(response)
        // console.log(response)
    }, [])


    return (
        <View style={styles.container}>
            {console.log(users)}
            <Text style={{ fontSize: 30, paddingLeft: 10 }}>
                Customers
            </Text>
            {/* <FlatList
                data={users}
                renderItem={({ item }) => <Text style={styles.item}>{item.name.first}</Text>}
            >
            </FlatList> */}
            <ScrollView style={styles.scroll}>
                {
                    users.map((user, idx) => (
                        <View style={styles.box} key={idx}>
                            <View style={{ flex: 1 }}>
                                <Image
                                    source=
                                    {{uri: user.picture.thumbnail}}
                                    // {user.picture.thumbnail}
                                    style={{ width: 60, height: 60 }}
                                />
                            </View>
                            <View style={{ flex: 4 }}>
                                <Text style={styles.title}>
                                    {user.name.title} {user.name.first} {user.name.last}
                                </Text>
                                <Text>
                                    {user.location.street.number} {user.location.street.name}, {user.location.city}, {user.location.country}
                                </Text>
                                <Text>
                                    {user.email}
                                </Text>
                            </View>
                        </View>
                    ))
                }
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DCDCDC',
    },
    item: {
        backgroundColor: "#FA2FB5",
        padding: 10,
        height: 50
    },
    text: {
        color: '#002B5B',
        fontSize: 30
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
    scroll: {
        backgroundColor: "#8FE3CF",
        padding: 10
    },
    box: {
        backgroundColor: "#DCDCDC",
        marginBottom: 10,
        padding: 10,
        flex: 1,
        flexDirection: 'row'
    },
});
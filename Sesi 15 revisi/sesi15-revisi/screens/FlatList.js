import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";

let posts = []

for (let i = 1; i < 20; i++) {
  posts.push({
    title: `title ${i}`,
  })
}

export default function FlatListPage({ route }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>
        {route.params.name}
      </Text>
      <FlatList
        data={posts}
        renderItem={({ item }) => <Text style={styles.item}>{item.title}</Text>}
      >
      </FlatList>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F4F4F',
  },
  item: {
    backgroundColor: "#2F4F4F",
    padding: 10,
    height: 50
  },
  text: {
    color: '#FFFFFF',
    fontSize: 30
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
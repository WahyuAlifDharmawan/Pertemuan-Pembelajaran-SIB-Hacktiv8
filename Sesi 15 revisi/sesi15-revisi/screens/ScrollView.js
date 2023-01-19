import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

let posts = []

for (let i = 1; i < 20; i++) {
  posts.push({
    title: `title ${i}`,
    description: `Deskripsi untuk title ${i}`
  })
}

export default function ScrollViewPage({ route }) {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30}}>
        {route.params.name}
      </Text>
      <ScrollView style={styles.scroll}>
        {
          posts.map((post, idx) => (
            <View style={styles.box} key={idx}>
              <Text style={styles.title}>
                {post.title}
              </Text>
              <Text>
                {post.description}
              </Text>
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
    marginTop: 25
  },
  scroll:{
    backgroundColor:"#DCDCDC",
    padding: 10
  },
  box:{
    backgroundColor:"#ADD8E6",
    marginBottom: 10,
    padding: 10,
  },
  text: {
    color: '#002B5B',
    fontSize: 30
  },
  textInput: {
    height: 40
  },
  rowButton: {
    flexDirection: 'row',
    margin: 1
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
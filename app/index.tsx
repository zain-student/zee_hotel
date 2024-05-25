import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from "react-native";

export default function Page() {
  const colorScheme = useColorScheme();
  return (
    <ScrollView
      style={[
        styles.container,
        colorScheme === "light"
          ? { backgroundColor: "#fff" }
          : { backgroundColor: "#333333" },
      ]}>
      {/* <View style={styles.container}> */}
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>
          You Can Change the mode using Theme button By scrolling down
        </Text>
      </View>
      {/* </View> */}
      <Text style={styles.regular}>Color Scheme: {colorScheme}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    color: "yellow",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 40,
    color: "yellow",
  },
  regular: {
    fontSize: 18,
    textAlign: "center",
    color: "grey",
  },
});

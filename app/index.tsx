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
        //  If colorScheme equal to  light then bg = black else bg = light
      ]}>
      <View style={styles.main}>
        <Text
          style={[
            styles.title,
            colorScheme === "light" ? { color: "black" } : { color: "white" },
          ]}>
          Hello World
        </Text>
        <Text
          style={[
            styles.subtitle,
            colorScheme === "light" ? { color: "black" } : { color: "white" },
          ]}>
          You Can Change the mode using Theme button By scrolling down
        </Text>
      </View>
      {/* </View> */}
      <Text
        style={[
          styles.regular,
          colorScheme === "light" ? { color: "black" } : { color: "white" },
        ]}>
        Color Scheme: {colorScheme}
      </Text>
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

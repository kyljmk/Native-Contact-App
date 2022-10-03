import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import { customers } from "../customers";

function Contacts({ navigation }) {
  const contactElements = customers.map((customer) => {
    return (
      <View key={customer.location.coordinates.latitude}>
        <Pressable
          style={styles.contact}
          onPress={() =>
            navigation.navigate("Contact Card", {
              customer: customer,
            })
          }
        >
          <Image
            style={styles.image}
            source={{ uri: customer.picture.medium }}
          />
          <Text style={styles.text}>
            {customer.name.first} {customer.name.last}
          </Text>
        </Pressable>
      </View>
    );
  });

  return <ScrollView style={styles.container}>{contactElements}</ScrollView>;
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  contact: {
    flexDirection: "row",
    marginBottom: 30,
    alignItems: "center",
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  text: {
    marginLeft: 30,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Contacts;

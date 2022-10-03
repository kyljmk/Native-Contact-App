import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";

function ContactCard({ route }) {
  const { customer } = route.params;
  const { name, picture, cell, phone, email, location } = customer;
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Home Screen");
  };

  return (
    <View style={styles.app}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: picture.large }} />
        <Text style={styles.name}>
          {name.first} {name.last}
        </Text>
        <Text>Mobile: {cell}</Text>
        <Text>Home: {phone}</Text>
        <Text>{email}</Text>
        <Text>
          {location.street.number} {location.street.name},
        </Text>
        <Text>
          {location.city}, {location.state}
        </Text>
        <Text>
          {location.country}, {location.postcode}
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Return</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: "#BD4F6C",
    height: "100%",
  },

  container: {
    alignItems: "center",
    padding: 20,
    margin: 40,
    marginTop: 60,
    backgroundColor: "white",
    borderRadius: 20,
  },

  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 40,
  },

  name: {
    fontSize: 25,
    fontWeight: "bold",
  },

  button: {
    backgroundColor: "#FFF",
    width: 140,
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    alignItems: "center",
    alignSelf: "center",
  },

  buttonText: {
    color: "#BD4F6C",
    fontWeight: "bold",
  },
});

export default ContactCard;

/*firstName,
    lastName,
    imageUri,
    mobile,
    home,
    email,
    street,
    city,
    state,
    country,
    postcode,*/

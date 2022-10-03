import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/core";
import { customers } from "../customers";
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login Screen");
      })
      .catch((error) => alert(error.message));
  };

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

  return (
    <ScrollView>
      <View style={styles.header}>
        <Text style={styles.email}>Welcome {auth.currentUser?.email}!</Text>
        <TouchableOpacity style={styles.button} onPress={handleSignOut}>
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.list}>{contactElements}</View>
      <StatusBar style="light" />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#BD4F6C",
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: "baseline",
    justifyContent: "space-between",
    paddingTop: 35,
    paddingBottom: 0,
  },

  email: {
    color: "white",
    fontWeight: "bold",
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#FFF",
    width: 140,
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "#BD4F6C",
    fontWeight: "bold",
  },

  list: {
    padding: 20,
    backgroundColor: "white",
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

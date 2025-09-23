import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/headerstyles";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Lunaris Livris</Text>
      <View style={styles.icons}>
        <TouchableOpacity style={styles.icon}>
          <Ionicons name="heart-outline" size={24} color="#5320a6" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Ionicons name="bag-outline" size={24} color="#5320a6" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Ionicons name="person-outline" size={24} color="#5320a6" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.menu}>
        <Ionicons name="menu" size={30} color="#ece2ff" />
      </TouchableOpacity>
    </View>
  );
}

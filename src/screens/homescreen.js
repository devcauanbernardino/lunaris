import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "../components/header";
import Carousel from "../components/carousel";
import global from "../styles/global";

export default function HomeScreen() {
  const livros = [
    { id: 1, nome: "Brasileiros", img: require("../../assets/img1.jpg") },
    { id: 2, nome: "Geeks", img: require("../../assets/img2.jpg") },
    { id: 3, nome: "Tecnologia", img: require("../../assets/img3.jpg") },
  ];

  return (
    <View style={global.container}>
      <Header />
      <Carousel livros={livros} />
      <StatusBar style="auto" />
    </View>
  );
}

import React from "react";
import { ScrollView, View, Text, ImageBackground } from "react-native";
import styles from "../styles/carouselstyles";

export default function Carousel({ livros }) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginVertical: 15, paddingLeft: 15 }}>
      {livros.map((livro) => (
        <View key={livro.id} style={styles.carouselCard}>
          <ImageBackground source={livro.img} style={styles.carouselImage} />
          <Text style={styles.cardText}>{livro.nome}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

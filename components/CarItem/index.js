import { View, Text, ImageBackground } from "react-native";
import React from "react";
import styles from "./styles";
import StyledButton from "../StyledButton";

const CarItem = (props) => {
  const { name, tagline, image, taglineCTA } = props.car;
  const idx = props.idx;

  return (
    <View style={styles.carContainer} key={idx}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <StyledButton
          type="primary"
          content={"Custome Order"}
          onPress={() => console.warn("Custom Order was pressed")}
        />
        <StyledButton
          type="secondary"
          content={"Existing Inventory"}
          onPress={() => console.warn("Existing Inventory was pressed")}
        />
      </View>
    </View>
  );
};

export default CarItem;

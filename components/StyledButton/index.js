import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "./style";

const StyledButton = (props) => {
  const type = props.type;
  const content = props.content;
  const onPress = props.onPress;

  const backgroundColor = type === "primary" ? "#171A20CC" : "#FFFFFFA6";
  const fontColor = type === "primary" ? "#FFFFFFA6" : "#171A20CC";

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={onPress}
      >
        <Text style={[styles.text, { color: fontColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;

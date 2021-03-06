import React from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import styles from "./style";
import cars from "./cars";
import CarItem from "../CarItem";

const CarsList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        keyExtractor={(item) => item.idx}
        renderItem={({ item, idx }) => <CarItem car={item} idx={idx} />}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CarsList;

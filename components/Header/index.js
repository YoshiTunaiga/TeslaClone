import React, { useState } from "react";
import {
  View,
  Image,
  Pressable,
  Text,
  Dimensions,
  FlatList,
} from "react-native";
import { menuData } from "./menuData";
import styles from "./styles";

const Header = () => {
  const [sideBarWidth, setSideBarWidth] = useState("0%");
  const [visibility, setVisibility] = useState("none");

  const openNav = () => {
    setSideBarWidth("70%");
    setVisibility("block");
  };

  const closeNav = () => {
    setSideBarWidth("0%");
    setVisibility("none");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/images/logo.png")}
      />
      <SideNav
        visibility={visibility}
        sideBarWidth={setSideBarWidth}
        openNav={openNav}
        closeNav={closeNav}
      />
      <Pressable onPress={openNav}>
        <Image
          style={styles.menu}
          source={require("../../assets/images/menu.png")}
        />
      </Pressable>
    </View>
  );
};

const SideNav = (props) => {
  const { visibility, sideBarWidth, openNav, closeNav } = props;
  return (
    <View
      style={[
        styles.sideContainer,
        {
          display: visibility,
          width: sideBarWidth,
          height: Dimensions.get("window").height,
        },
      ]}
    >
      <Pressable onPress={closeNav}>
        <Text style={styles.closeIcon}>X</Text>
      </Pressable>
      {menuData.map((item, idx) => (
        <View key={idx}>
          <Text style={styles.menuText}>{item.title}</Text>
        </View>
      ))}
    </View>
  );
};

export default Header;

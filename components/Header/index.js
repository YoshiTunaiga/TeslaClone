import React, { useState } from "react";
import {
  View,
  Image,
  Pressable,
  Text,
  Dimensions,
  FlatList,
  ScrollView,
  SafeAreaView,
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
      <SideNav
        width={sideBarWidth}
        visibility={visibility}
        sideBarWidth={setSideBarWidth}
        openNav={openNav}
        closeNav={closeNav}
        animate
      />
      <Image
        style={styles.logo}
        source={require("../../assets/images/logo.png")}
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
  const { visibility, sideBarWidth, openNav, closeNav, width } = props;
  return (
    <View
      style={[
        styles.sideContainer,
        {
          display: visibility,
          width: width,
          height: Dimensions.get("window").height,
        },
      ]}
    >
      <Pressable onPress={closeNav}>
        <Text style={styles.closeIcon}>X</Text>
      </Pressable>
      <FlatList
        data={menuData}
        renderItem={({ item, idx }) => (
          <Text style={styles.menuText} key={idx}>
            {item.title}
          </Text>
        )}
        keyExtractor={(item) => item.idx}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Header;

/**
       {menuData.map((item, idx) => (
        <FlatList key={idx}>
          <Text style={styles.menuText}>{item.title}</Text>
        </FlatList>
      ))}
 */

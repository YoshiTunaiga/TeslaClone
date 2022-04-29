import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 50,
    zIndex: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 20,
    resizeMode: "contain",
  },
  menu: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  sideContainer: {
    position: "absolute",
    zIndex: 1,
    height: "100%",
    top: 0,
    right: 0,
    backgroundColor: "white",
    overflow: "hidden",
    paddingTop: 20,
    paddingLeft: 20,
  },
  wrapper: {},
  divmenu: {
    textAlign: "center",
  },
  menuText: {
    justifyContent: "center",
    fontSize: 12,
    fontWeight: "500",
    padding: 10,
  },
  closeIcon: {
    textAlign: "right",
    justifyContent: "center",
    fontSize: 18,
    fontWeight: "500",
    padding: 10,
  },
});

export default styles;

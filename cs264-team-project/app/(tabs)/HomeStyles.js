import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  submitContainer: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    marginTop: 20,
    marginBottom: 20,
    fontWeight: "bold",
    color: "#333333",
  },
  searchLabel: {
    fontSize: 18,
    marginTop: 50,
    marginBottom: 20,
    color: "#333333",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 5,
    width: "100%",
    paddingHorizontal: 10,
  },
  submitContainer: {
    margin: 20,
  },
  tabContainer: {
    height: 70,
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#dddddd"
  },
    bottomTabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#eee',
    paddingVertical: 10,
  }

});

export default styles;
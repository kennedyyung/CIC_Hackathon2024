import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";
import TrackingCard from '../Components/TrackingCard'

const TrackingPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Summary</Text>
      </View>

      <View style={styles.summaryContainer}>
        <View style={styles.savings}>
          <TrackingCard
          title='CO2 Saved this month!'
          amount='0.5kg'/>
                    <TrackingCard
          title='H2O Saved this month!'
          amount='4L'/>
        </View>
      </View>

      <Text>Total Savings!</Text>

      {progressData.map((progress) => (
        <View key={progress.title} style={styles.progressContainer}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressTitle}>{progress.title}</Text>
            <Text style={styles.progressAmount}>{progress.amount}</Text>
          </View>
          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressFill,
                { width: `${progress.percentage}%` },
              ]}
            />
          </View>
          <Text style={styles.progressMessage}>{progress.message}</Text>
        </View>
      ))}

      <View style={styles.equivalentContainer}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <Path d="M198.1,62.6a76,76,0,0,0-140.2,0A72.27,72.27,0,0,0,16,127.8C15.89,166.62,47.36,199,86.14,200A71.68,71.68,0,0,0,120,192.49V232a8,8,0,0,0,16,0V192.49A71.45,71.45,0,0,0,168,200l1.86,0c38.78-1,70.25-33.36,70.14-72.18A72.26,72.26,0,0,0,198.1,62.6ZM169.45,184a55.61,55.61,0,0,1-32.52-9.4q-.47-.3-.93-.57V132.94l43.58-21.78a8,8,0,1,0-7.16-14.32L136,115.06V88a8,8,0,0,0-16,0v51.06L83.58,120.84a8,8,0,1,0-7.16,14.32L120,156.94V174q-.47.27-.93.57A55.7,55.7,0,0,1,86.55,184a56,56,0,0,1-22-106.86,15.9,15.9,0,0,0,8.05-8.33,60,60,0,0,1,110.7,0,15.9,15.9,0,0,0,8.05,8.33,56,56,0,0,1-22,106.86Z" />
        </Svg>
        <View style={styles.equivalentText}>
          <Text style={styles.equivalentTitle}>Equivalent to</Text>
          <Text style={styles.equivalentValue}>2% of a tree</Text>
        </View>
      </View>

      
    </View>
  );
};

const summaryData = [
  { title: "CO2 saved", value: "+1.2kg" },
  { title: "Water saved", value: "+12L" },
  { title: "Trees planted", value: "+0.02 trees" },
];

const progressData = [
  {
    title: "CO2 saved",
    amount: "1.2kg",
    percentage: 60,
    message: "Keep it up! You've saved 1.2kg of CO2.",
  },
  {
    title: "Water saved",
    amount: "12L",
    percentage: 80,
    message: "You've saved 12L of water.",
  },
];

const footerItems = [
  {
    label: "Find",
    icon: {
      viewBox: "0 0 256 256",
      path: "M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z",
    },
  },
  {
    label: "Summary",
    icon: {
      viewBox: "0 0 256 256",
      path: "M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16h8V136a8,8,0,0,1,8-8H72a8,8,0,0,1,8,8v64H96V88a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8V200h16V40a8,8,0,0,1,8-8h40a8,8,0,0,1,8,8V200h8A8,8,0,0,1,232,208Z",
    },
  },
  {
    label: "Profile",
    icon: {
      viewBox: "0 0 256 256",
      path: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z",
    },
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111713",
    textAlign: "center",
    marginTop:45
  },
  summaryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
    paddingVertical: 16,
  },
  summaryCard: {
    minWidth: 158,
    flex: 1,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: "#dce5df",
    justifyContent: "center",
    alignItems: "center",
  },
  summaryLabel: {
    fontSize: 16,
    fontWeight: "500",
    color: "#111713",
  },
  summaryValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111713",
  },
  progressContainer: {
    paddingVertical: 16,
  },
  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  progressTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#111713",
  },
  progressAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111713",
  },
  progressBar: {
    height: 6,
    backgroundColor: "#dce5df",
    borderRadius: 3,
    overflow: "hidden",
    marginVertical: 4,
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#4caf50",
  },
  progressMessage: {
    fontSize: 14,
    color: "#777",
  },
  equivalentContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  equivalentText: {
    marginLeft: 8,
  },
  equivalentTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#111713",
  },
  equivalentValue: {
    fontSize: 14,
    color: "#777",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 16,
    borderTopWidth: 1,
    borderColor: "#dce5df",
  },
  footerButton: {
    alignItems: "center",
  },
  footerText: {
    fontSize: 12,
    color: "#111713",
  },
});

export default TrackingPage;
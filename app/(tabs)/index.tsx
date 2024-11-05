import { StyleSheet, useColorScheme } from 'react-native';
import ParallaxScrollView from "@components/ParallaxScrollView";
import { ThemedView } from "@components/ThemedView";
import { useThemeColor } from "@hooks/useThemeColor";
import { useEffect } from "react";
import { H1 } from "@components/Typography";

export default function HomeScreen() {

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
    >
      <ThemedView style={styles.titleContainer}>
        <H1 > test</H1>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  text:{
    color:'red'
  },
  titleContainer: {
    alignItems: "flex-start",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});

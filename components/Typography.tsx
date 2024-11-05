import { StyleSheet, Text, TextProps, useColorScheme } from "react-native";
import { web } from "@app/platform/detection";
import { atoms, HeadingLevels, headingStyles } from "@app/util/atoms";
import React from "react";
import { Colors } from "@app/constants/Colors";

export interface Typography {}

/**
 * Our main text component. Use this most of the time.
 */
export function TextSyn({
  children,
  style: styleWithout,
  selectable,
  ...rest
}: TextProps) {
  const colorScheme = useColorScheme() ?? "light";
  const styles = StyleSheet.create({
    text: {
      color: colorScheme === "dark" ? Colors.dark.text : Colors.light.text,
    },
  });
  const shared = {
    uiTextView: true,
    selectable,
    style: [styles.text,styleWithout],
    dataSet: Object.assign({}),
    ...rest,
  };

  return <Text {...shared}>{children}</Text>;
}

// Function to map heading level to the style
export function createHeadingElement({ level }: { level: HeadingLevels }) {
  return function HeadingElement({ style, ...rest }: TextProps) {
    const headingStyle = headingStyles[level]; // Get the corresponding style
    const attr = web({ role: "heading", "aria-level": level }) || {};

    return (
      <TextSyn
        {...attr}
        {...rest}
        style={[style, headingStyle]} // Apply the mapped style
      />
    );
  };
}

/*
 * Use semantic components when it's beneficial to the user or to a web scraper
 */
export const H1 = createHeadingElement({ level: 1 });
export const H2 = createHeadingElement({ level: 2 });
export const H3 = createHeadingElement({ level: 3 });
export const H4 = createHeadingElement({ level: 4 });
export const H5 = createHeadingElement({ level: 5 });
export const H6 = createHeadingElement({ level: 6 });
export const H7 = createHeadingElement({ level: 7 });
export const H8 = createHeadingElement({ level: 8 });

export function P({ style, ...rest }: TextProps) {
  const attr =
    web({
      role: "paragraph",
    }) || {};
  return <TextSyn {...attr} {...rest} style={[atoms.text_md, style]} />;
}

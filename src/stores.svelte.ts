import { writable } from "svelte/store";
import type { Theme, SyntaxToken } from "./Types.svelte";

export const darkMode = writable<boolean>(false);

export const syntaxMapping = writable<Record<SyntaxToken, keyof Theme>>({
  comment: "color8", // Dark gray
  keyword: "color5", // Magenta
  string: "color2", // Green
  number: "color11", // Bright Yellow
  variable: "color1", // Red
  function: "color4", // Blue
  type: "color3", // Yellow
  class: "color3", // Yellow
  parameter: "color11", // Bright Yellow
  operator: "color15", // White (fg)
  builtin: "color6", // Cyan
  property: "color1", // Red
});

// firefly
export const colorStore = writable<Theme>({
  // Base colors (0-7)
  color0: "#1c1a1c", // Background
  color1: "#A64B3A", // Red
  color2: "#91b794", // Green
  color3: "#D48B1D", // Yellow
  color4: "#625C70", // Blue
  color5: "#CC666B", // Magenta/Purple
  color6: "#79999d", // Cyan
  color7: "#b9bfca", // Light Gray

  // Bright colors (8-15)
  color8: "#5c6370", // Dark Gray
  color9: "#BD5644", // Bright Red
  color10: "#B5E5B9", // Bright Green
  color11: "#F1D6AB", // Bright Yellow/Orange
  color12: "#888198", // Bright Blue
  color13: "#E0A3A6", // Bright Magenta/Purple
  color14: "#A1CCD1", // Bright Cyan
  color15: "#E3DEDE", // White Text

  // Special colors
  color16: "#d19a66", // Orange
  color17: "#e5c07b", // Bright Orange

  // Background variants
  bg0: "#21252b", // Darker background
  bg1: "#2c313a", // Lighter background
  bg2: "#353b45", // Selection background

  // Foreground variants
  fg0: "#dcdfe4", // Brighter foreground
  fg1: "#9da5b4", // Default foreground
  fg2: "#978787", // Muted foreground
});
/*
// one dark pro
export const colorStore = writable<Theme>({
  // Base colors (0-7)
  color0: "#282c34", // Background
  color1: "#e06c75", // Red
  color2: "#98c379", // Green
  color3: "#e5c07b", // Yellow
  color4: "#61afef", // Blue
  color5: "#c678dd", // Magenta/Purple
  color6: "#56b6c2", // Cyan
  color7: "#b9bfca", // Light Gray

  // Bright colors (8-15)
  color8: "#5c6370", // Dark Gray
  color9: "#be5046", // Bright Red
  color10: "#7bc275", // Bright Green
  color11: "#d19a66", // Bright Yellow/Orange
  color12: "#528bff", // Bright Blue
  color13: "#b267e6", // Bright Magenta/Purple
  color14: "#41a6b5", // Bright Cyan
  color15: "#abb2bf", // White Text

  // Special colors
  color16: "#d19a66", // Orange
  color17: "#e5c07b", // Bright Orange

  // Background variants
  bg0: "#21252b", // Darker background
  bg1: "#2c313a", // Lighter background
  bg2: "#353b45", // Selection background

  // Foreground variants
  fg0: "#dcdfe4", // Brighter foreground
  fg1: "#9da5b4", // Default foreground
  fg2: "#7f848e", // Muted foreground
});

//GruvBox
export const colorStore = writable<Theme>({
  color0: "#282828",
  color1: "#cc241d",
  color2: "#98971a",
  color3: "#d79921",
  color4: "#458588",
  color5: "#b16286",
  color6: "#689d6a",
  color7: "#a89984",

  color8: "#928374",
  color9: "#fb4934",
  color10: "#b8bb26",
  color11: "#fabd2f",
  color12: "#83a598",
  color13: "#d3869b",
  color14: "#8ec07c",
  color15: "#ebdbb2",

  color16: "#d65d0e",
  color17: "#fe8019",

  bg0: "#1d2021",
  bg1: "#32302f",
  bg2: "#3c3836",

  fg0: "#fbf1c7",
  fg1: "#d5c4a1",
  fg2: "#bdae93",
});
 */

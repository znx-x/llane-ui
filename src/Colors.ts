/*
 * Exports all the colors used by Llane UI
 *
 * We do not recommend altering the color sheet. Instead, if you need to change a
 * component's color property to a custom color, you can instead create and export
 * your custom color and replace the existing color property in the component
 * with your own export.
 */

// Transparent
export const Transparent = `rgba(0, 0, 0, 0)`;

// Basic Colors
export const Black = `#000000`;
export const White = `#FFFFFF`;

// Primary Colors
export const Red = `#FF0000`;
export const Green = `#00FF00`;
export const Blue = `#0000FF`;

// Secondary Colors
export const Yellow = `#FFFF00`;
export const Cyan = `#00FFFF`;
export const Magenta = `#FF00FF`;

// Tertiary Colors
export const Orange = `#FFA500`;
export const ChartreuseGreen = `#7FFF00`;
export const SpringGreen = `#00FF7F`;
export const Azure = `#007FFF`;
export const Violet = `#7F00FF`;
export const Rose = `#FF007F`;

// Grayscale
export const Gray = `#808080`;
export const LightGray = `#D3D3D3`;
export const DarkGray = `#A9A9A9`;

// Theme Colors
export const TCPrimary = `#4285F4`; // Theme Blue
export const TCPrimaryDark = `#1967D2` // Theme Dark Blue
export const TCSecondary = `#34A853` // Theme Green
export const TCSecondaryDark = `#188038` // Theme Dark Green
export const TCAccent = `#F72A25` // Theme Red
export const TCHighlight = `#FBBC04` // Theme Yellow
export const TCText = `#444757` // Deep Dark Blue
export const TCDimmedText = `#747775` // Dark Grey
export const TCBorder = `#747775` // Dard Grey
export const TCComponentBackground = `#E9EEF6` // Light Grey

// Framework Colorset (Primary: Background, Secondary: Fonts, Accent: Theme Color)
export const PrimaryColor = Black
export const SecondaryColor = White
export const AccentColor = TCAccent
export const HighlightColor = TCHighlight
export const ButtonColor = TCPrimary
export const ButtonHoverColor = TCPrimaryDark
export const ButtonAltColor = TCSecondary
export const ButtonAltHoverColor = TCSecondaryDark
export const BorderColor = TCBorder
export const ComponentBackground = TCComponentBackground
export const TextColor = TCText
export const DimmedTextColor = TCDimmedText

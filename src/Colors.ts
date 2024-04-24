import { DefaultTheme } from 'styled-components';
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

// Dark and Light Theme Colors

const getThemeColor = (lightColor: string, darkColor: string) => {
    return ({ theme }: { theme: DefaultTheme }) => theme.mode === 'light' ? darkColor : lightColor;
  };


export const AppBackground = getThemeColor('#202124', '#FFFFFF'); // Dark Gray | White
export const TextColor = getThemeColor('#FFFFFF', '#444757'); // White | Deep Dark Blue
export const PrimaryColor = getThemeColor('#4285F4', '#4285F4'); // Matte Blue
export const SecondaryColor = getThemeColor('#303134', '#34A853'); // Matte Green
export const AccentColor = getThemeColor('#F72A25', '#F72A25'); // Matte Red
export const HighlightColor = getThemeColor('#FBBC04', '#FBBC04'); // Matte Yellow
export const ButtonColor = getThemeColor('#4285F4', '#4285F4'); // Matte Blue
export const ButtonHoverColor = getThemeColor('#1967D2', '#1967D2'); // Dark Matte Blue
export const ButtonAltColor = getThemeColor('#34A853', '#34A853'); //  Matte Green
export const ButtonAltHoverColor = getThemeColor('#188038', '#188038'); // Dark Matte Green
export const BorderColor = getThemeColor('#747775', '#747775'); // Medium-Light Gray
export const DarkBorderColor = getThemeColor('#333', '#333'); // Dark Gray
export const ComponentBackground = getThemeColor('#2C2C2C', '#E9EEF6'); // Light Gray | Light Pale Blue
export const DimmedTextColor = getThemeColor('#747775', '#747775'); // Medium-Light Gray
export const LinkColor = getThemeColor('#4285F4', '#4285F4'); // Matte Blue
export const HeaderBackground = getThemeColor('rgba(44, 44, 44, 0.5)', 'rgba(233, 238, 246, 0.5)'); // Semi-transparent Dark Gray | Semi-transparent Light Blue
export const HeaderLinkHoverBackground = getThemeColor('rgba(44, 44, 44, 1)', 'rgba(233, 238, 246, 1)'); // Dark Gray | Light Blue
export const FooterBackground = getThemeColor('rgba(44, 44, 44, 0.5)', 'rgba(233, 238, 246, 0.5)'); // Semi-transparent Dark Gray | Semi-transparent Light Blue
export const AppNavBarBackground = getThemeColor('rgba(44, 44, 44, 0.9)', 'rgba(233, 238, 246, 0.9)'); // Semi-transparent Dark Gray | Semi-transparent Light Blue
export const AppNavBarSectionHoverBackground = getThemeColor('rgba(44, 44, 44, 1)', 'rgba(233, 238, 246, 1)'); // Dark Gray | Light Blue
export const AppNavBarSectionActiveBackground = getThemeColor('rgba(44, 44, 44, 1)', 'rgba(233, 238, 246, 1)'); // Dark Gray | Light Blue
export const HamburgerMenuLinkHoverBackground = getThemeColor('#444444', '#DFE3EB'); // Dark Gray | Medium Blue-Gray
export const DropdownLinkHoverBackground = getThemeColor('#444444', '#DFE3EB'); // Dark Gray | Medium Blue-Gray
export const SubmenuLinkHoverBackground = getThemeColor('#444444', '#DFE3EB'); // Dark Gray | Medium Blue-Gray
import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools"
const breakpoints = createBreakpoints({
  sm: "350px",
  md: "700px",
  lg: "1000px",
  xl: "1440px"
})
const theme = extendTheme({
	breakpoints,
	colors: {
		black: "#212121",
		lblack: "#5E5E5E",
		gray: "#D3D3D3",
		green:"#008000",
	},
	fonts: {
		pri: "Josefin Sans",
		sec: "Adamina",
	},
});
export default theme;

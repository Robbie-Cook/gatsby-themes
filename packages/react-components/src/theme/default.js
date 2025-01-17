import { deep, light } from "@theme-ui/presets";

import { toTheme } from "@theme-ui/typography";
import noriega from "typography-theme-noriega";
import merge from "deepmerge";

const noriegaTheme = toTheme(noriega);

const theme = merge(
  {
    ...deep,
    initialColorMode: `dark`,
    useCustomProperties: true,
    colors: {
      ...deep.colors
      // modes: {
      //   light: {
      //     ...light.colors,
      //   },
      // },
    },
    breakpoints: [`400px`, `600px`, `900px`, `1200px`, `1600px`],
    sizes: {
      ...deep.sizes,
      "1/2": `50%`,
      "1/3": `33.333333%`,
      "2/3": `66.666667%`,
      "1/4": `25%`,
      "2/4": `50%`,
      "3/4": `75%`,
      "1/5": `20%`,
      "2/5": `40%`,
      "3/5": `60%`,
      "4/5": `80%`,
      "1/6": `16.666667%`,
      "2/6": `33.333333%`,
      "3/6": `50%`,
      "4/6": `66.666667%`,
      "5/6": `83.333333%`,
      "1/12": `8.333333%`,
      "2/12": `16.666667%`,
      "3/12": `25%`,
      "4/12": `33.333333%`,
      "5/12": `41.666667%`,
      "6/12": `50%`,
      "7/12": `58.333333%`,
      "8/12": `66.666667%`,
      "9/12": `75%`,
      "10/12": `83.333333%`,
      "11/12": `91.666667%`,
      full: `100%`,
      screen: `100vw`
    },
    styles: {
      ...deep.styles,
      root: {
        ...deep.styles.root,
        color: `text`,
        backgroundColor: `background`,
        a: {
          transition: `all 0.3s ease-in-out`,
          "&:hover": {
            color: `primary`,
            textDecoration: `none`
          }
        }
      },
      Footer: {
        textAlign: `center`,
        display: `block`,
        position: `absolute`,
        bottom: 0,
        color: `textMuted`,
        px: [2, 3],
        py: [3, 4]
      },
      Container: {
        maxWidth: `5xl`
      },
      p: {
        fontSize: [1, 2],
        letterSpacing: `-0.003em`,
        lineHeight: `body`,
        "--baseline-multiplier": 0.179,
        "--x-height-multiplier": 0.35,
        color: `text`
      },
      blockquote: {
        marginLeft: 0,
        p: {
          fontSize: [2, 3],
          fontWeight: `medium`,
          color: `heading`
        }
      },
      h1: {
        ...deep.styles.h1,
        fontSize: [6, 7, 8],
        mt: 2,
        mb: 4,
        textShadow: `rgba(255, 255, 255, 0.15) 0px 5px 35px`,
        letterSpacing: `wide`,
        color: `heading`
      },
      h2: {
        ...deep.styles.h2,
        fontSize: [4, 5, 6],
        mt: 2,
        color: `heading`
      },
      h3: {
        ...deep.styles.h3,
        fontSize: [3, 4, 5],
        mt: 3,
        color: `heading`
      },
      h4: {
        ...deep.styles.h4,
        fontSize: [2, 3, 4],
        color: `heading`
      },
      h5: {
        ...deep.styles.h5,
        fontSize: [1, 2, 3],
        color: `heading`
      },
      h6: {
        ...deep.styles.h6,
        fontSize: 1,
        mb: 2,
        color: `heading`
      }
    },
    buttons: {
      toggle: {
        color: `background`,
        border: `none`,
        backgroundColor: `text`,
        cursor: `pointer`,
        alignSelf: `center`,
        px: 3,
        py: 2,
        ml: 3
      }
    },
    texts: {
      bigger: {
        p: {
          fontSize: [2, 3, 4]
        }
      }
    }
  },
  noriegaTheme
);

console.log(theme);

export default theme;

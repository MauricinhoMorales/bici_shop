import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  global: {
    html: {
      overflow: 'hdden',
    },
    body: {
      overflow: 'hidden',
      height: '100vh',
    },
  },
  fonts: {
    body: 'Cabin, san-serif',
    heading: 'Cabin, san-serif',
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '64px',
    '7x1': '128px'
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  colors: {
    rufous: {
      50: '#E5AFDD',
      100: '#D98FC0',
      200: '#CD719D',
      300: '#C05373',
      400: '#B23643',
      500: '#A42419',
      600: '#8E2017',
      700: '#791D15',
      800: '#641812',
      900: '#50140F',
    },
    oldRose: {
      50: '#EAD0E4',
      100: '#E1BDD2',
      200: '#D8ABBD',
      300: '#CF9AA4',
      400: '#C58889',
      500: '#BB8377',
      600: '#A57F67',
      700: '#8E7858',
      800: '#776E48',
      900: '#5F6039',
    },
    babyPink: {
      50: '#FBEAFC',
      100: '#FAE2F6',
      200: '#F8DAEE',
      300: '#F6D3E4',
      400: '#F4CBD7',
      500: '#F1C4C9',
      600: '#D4AFAB',
      700: '#B69D92',
      800: '#988979',
      900: '#7A7360',
    },
    seaShell: {
      50: '#FFFAFE',
      100: '#FFF9FC',
      200: '#FFF7F9',
      300: '#FFF5F6',
      400: '#FFF5F4',
      500: '#FFF6F2',
      600: '#DFDAD4',
      700: '#BFBDB5',
      800: '#9F9F97',
      900: '#7F8079',
    },
    tyrianPurple: {
      50: '#BDACCC',
      100: '#AA8CB7',
      200: '#9C6BA2',
      300: '#8C4C87',
      400: '#762C62',
      500: '#5F0D3A',
      600: '#540A23',
      700: '#490810',
      800: '#3E0B05',
      900: '#321204',
    },
    romanSilver: {
      50: '#D5D8D9',
      100: '#C5C8CA',
      200: '#B4B7BA',
      300: '#A4A6AB',
      400: '#93949C',
      500: '#84838C',
      600: '#75737B',
      700: '#666269',
      800: '#565258',
      900: '#464146',
    },
    richBlack: {
      50: '#ABABAB',
      100: '#8A8A8A',
      200: '#686868',
      300: '#474747',
      400: '#262626',
      500: '#040404',
      600: '#040404',
      700: '#030303',
      800: '#030303',
      900: '#020202',
    },
  },
});

export default theme;

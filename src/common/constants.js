import NivoChartsLogo from '../../assets/nivo-logo.png';
import ReChartsLogo from '../../assets/recharts-logo.png';
import VictoryChartsLogo from '../../assets/victory-logo.png';

export const Screens = {
  HOME: 'HOME',
  NIVO_CHARTS: 'NIVO_CHARTS',
  RECHARTS: 'RECHARTS',
  VICTORY_CHARTS: 'VICTORY_CHARTS',
  VICTORY_NATIVE_CHARTS: 'VICTORY_NATIVE_CHARTS',
};

export const ScreensConfig = {
  [Screens.HOME]: {
    title: 'Charts',
  },
  [Screens.NIVO_CHARTS]: {
    title: 'Nivo Charts',
  },
  [Screens.RECHARTS]: {
    title: 'Recharts',
  },
  [Screens.VICTORY_CHARTS]: {
    title: 'Victory Charts',
  },
  [Screens.VICTORY_NATIVE_CHARTS]: {
    title: 'Victory Native Charts',
  },
};

export const ChartsConfig = [
  {
    imageProps: {
      style: {
        height: 30,
        width: 30,
      },
      resizeMode: 'center',
      source: NivoChartsLogo,
    },
    showTitle: true,
    screen: Screens.NIVO_CHARTS,
    title: ScreensConfig[Screens.NIVO_CHARTS].title,
  },
  {
    imageProps: {
      style: {
        height: 60,
        width: 250,
      },
      resizeMode: 'center',
      source: ReChartsLogo,
    },
    showTitle: false,
    screen: Screens.RECHARTS,
    title: ScreensConfig[Screens.RECHARTS].title,
  },
  {
    imageProps: {
      style: {
        height: 30,
        width: 30,
      },
      resizeMode: 'center',
      source: VictoryChartsLogo,
    },
    showTitle: true,
    screen: Screens.VICTORY_CHARTS,
    title: ScreensConfig[Screens.VICTORY_CHARTS].title,
  },
  {
    imageProps: {
      style: {
        height: 30,
        width: 30,
      },
      resizeMode: 'center',
      source: VictoryChartsLogo,
    },
    showTitle: true,
    screen: Screens.VICTORY_NATIVE_CHARTS,
    title: ScreensConfig[Screens.VICTORY_NATIVE_CHARTS].title,
  },
];

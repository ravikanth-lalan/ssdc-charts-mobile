import React from 'react';
import { useWindowDimensions, View } from 'react-native';
import {
  VictoryPie,
  VictoryTheme,
  VictoryContainer as VictoryVoronoiContainer,
} from 'victory-native';
import PieDataJSON from '../../data/pie-data.json';

const colorScale = [
  "#97e3d5",
  "#61cdbb",
  "#e8a838",
  "#f1e15b",
  "#f47560",
  "#e8c1a0"
];

const VictoryNativePie = props => {
  const {
    data = [],
    height,
    innerRadius,
    radius,
    theme = VictoryTheme.material,
    width,
    x,
    y,
  } = props;

  return (
    <VictoryPie
      animate={{
        duration: 300,
        onLoad: {
          duration: 0,
        },
      }}
      containerComponent={
        <VictoryVoronoiContainer fixLabelOverlap={true} responsive={true} />
      }
      colorScale={colorScale}
      // colorScale={data.map(datum => datum.color)}
      cornerRadius={4}
      data={data}
      fixLabelOverlap={true}
      height={height}
      innerRadius={innerRadius}
      // labelComponent={<VictoryTooltip renderInPortal={false} />}
      labels={({ datum }) => `${datum.label}: ${datum.value}`}
      padAngle={1}
      radius={radius}
      // sortKey="value"
      // sortOrder="descending"
      theme={theme}
      width={width}
      x={x}
      y={y}
    />
  );
};

const VictoryNativePieChart = props => {
  const { innerRadius = 0, radius = 100, x = 'label', y = 'value' } = props;

  const dimensions = useWindowDimensions();

  return (
    <View
      style={{
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
      }}>
      <VictoryNativePie
        {...props}
        data={PieDataJSON}
        innerRadius={innerRadius}
        radius={radius}
        width={dimensions.width}
        x={x}
        y={y}
      />
    </View>
  );
};

export default VictoryNativePieChart;

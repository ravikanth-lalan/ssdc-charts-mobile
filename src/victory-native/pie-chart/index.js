import React from 'react';
import { useWindowDimensions, View } from 'react-native';
import {
  VictoryPie,
  VictoryTheme,
  VictoryContainer as VictoryVoronoiContainer,
} from 'victory-native';
import PieDataJSON from '../../data/pie-data.json';

const VictoryNativePie = props => {
  const {
    data = [],
    height,
    innerRadius,
    radius,
    theme = VictoryTheme.material,
    width,
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
      x="label"
      y="value"
    />
  );
};

const VictoryNativePieChart = props => {
  const { innerRadius = 0, radius = 160 } = props;

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
      />
    </View>
  );
};

export default VictoryNativePieChart;

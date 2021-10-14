import React from 'react';
import { View, useWindowDimensions } from 'react-native';
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryStack,
  VictoryTheme,
  VictoryTooltip,
  VictoryVoronoiContainer,
} from 'victory-native';
import BarDataJSON from '../../data/bar-data.json';

const VictoryNativeBar = props => {
  const {
    height,
    horizontal = true,
    stackData = [],
    theme = VictoryTheme.material,
    width,
  } = props;

  return (
    <VictoryChart
      containerComponent={
        <VictoryVoronoiContainer fixLabelOverlap={true} responsive={true} />
      }
      domainPadding={25}
      fixLabelOverlap={true}
      height={height}
      horizontal={horizontal}
      theme={theme}
      width={width}>
      <VictoryAxis />
      <VictoryAxis dependentAxis tickFormat={x => `$${x / 1000}k`} />
      <VictoryStack>
        {stackData.map(({ id, color, data }) => {
          return (
            <VictoryBar
              animate={{
                duration: 300,
                onLoad: {
                  duration: 0,
                },
              }}
              key={id}
              data={data}
              labels={({ datum }) => `${id}: ${datum.y}`}
              labelComponent={<VictoryTooltip renderInPortal={false} />}
            />
          );
        })}
      </VictoryStack>
    </VictoryChart>
  );
};

const VictoryNativeBarChart = props => {
  const dimensions = useWindowDimensions();

  return (
    <View
      style={{
        paddingLeft: 12,
        paddingRight: 12,
      }}>
      <VictoryNativeBar
        {...props}
        stackData={BarDataJSON}
        width={dimensions.width}
      />
    </View>
  );
};

export default VictoryNativeBarChart;

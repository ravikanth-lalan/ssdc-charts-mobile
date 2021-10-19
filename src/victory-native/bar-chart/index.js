import React, { useMemo } from 'react';
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
              style={{ data: { fill: color } }}
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

  const data = useMemo(() => BarDataJSON, []);

  const key = useMemo(() => 'country', []);

  const keys = useMemo(
    () => [
      {
        dataKey: 'hot dog',
        fill: '#97e3d5',
      },
      {
        dataKey: 'burger',
        fill: '#61cdbb',
      },
      {
        dataKey: 'sandwich',
        fill: '#e8a838',
      },
      {
        dataKey: 'kebab',
        fill: '#f1e15b',
      },
      {
        dataKey: 'fries',
        fill: '#f47560',
      },
      {
        dataKey: 'donut',
        fill: '#e8c1a0',
      },
    ],
    [],
  );

  const stackData = useMemo(
    () =>
      keys.map(
        ({ dataKey, fill }) => ({
          id: dataKey,
          color: fill,
          data: data.map(datum => ({
            x: datum[key],
            y: datum[dataKey],
          })),
        }),
        [],
      ),
    [data, key, keys],
  );

  return (
    <View
      style={{
        paddingLeft: 12,
        paddingRight: 12,
      }}>
      <VictoryNativeBar
        {...props}
        stackData={stackData}
        width={dimensions.width}
      />
    </View>
  );
};

export default VictoryNativeBarChart;

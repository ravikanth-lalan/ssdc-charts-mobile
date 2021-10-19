import React, { useMemo } from 'react';
import { useWindowDimensions, View } from 'react-native';
import {
  VictoryArea,
  VictoryAxis,
  VictoryChart,
  VictoryStack,
  VictoryTheme,
  VictoryTooltip,
  VictoryVoronoiContainer,
} from 'victory-native';
import AreaDataJSON from '../../data/area-data.json';

const VictoryNativeArea = props => {
  const {
    height,
    stackData = [],
    theme = VictoryTheme.material,
    width,
  } = props;

  return (
    <VictoryChart
      containerComponent={
        <VictoryVoronoiContainer fixLabelOverlap={true} responsive={true} />
      }
      domain={{}}
      domainPadding={0}
      fixLabelOverlap={true}
      height={height}
      theme={theme}
      width={width}>
      <VictoryAxis />
      <VictoryAxis dependentAxis />
      <VictoryStack>
        {stackData.map(({ id, color, data }) => {
          return (
            <VictoryArea
              key={id}
              data={data}
              animate={{
                duration: 300,
                onLoad: {
                  duration: 0,
                },
              }}
              style={{ data: { fill: color } }}
              labels={({ datum }) => `${id}: ${datum.y}`}
              labelComponent={<VictoryTooltip renderInPortal={false} />}
              interpolation="natural"
            />
          );
        })}
      </VictoryStack>
    </VictoryChart>
  );
};

const VictoryNativeAreaChart = props => {
  const dimensions = useWindowDimensions();

  const data = useMemo(() => AreaDataJSON, []);

  const keys = useMemo(
    () => [
      {
        dataKey: 'Raoul',
        fill: '#97e3d5',
      },
      {
        dataKey: 'Josiane',
        fill: '#61cdbb',
      },
      {
        dataKey: 'Marcel',
        fill: '#e8a838',
      },
      {
        dataKey: 'René',
        fill: '#f1e15b',
      },
      {
        dataKey: 'Paul',
        fill: '#f47560',
      },
      {
        dataKey: 'Jacques',
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
          data: data.map((datum, index) => ({ x: index, y: datum[dataKey] })),
        }),
        [],
      ),
    [data, keys],
  );

  return (
    <View
      style={{
        paddingLeft: 12,
        paddingRight: 12,
      }}>
      <VictoryNativeArea
        {...props}
        stackData={stackData}
        width={dimensions.width}
      />
    </View>
  );
};

export default VictoryNativeAreaChart;

import React from 'react';
import { useWindowDimensions, View } from 'react-native';
import {
  VictoryChart,
  VictoryLine,
  VictoryStack,
  VictoryTheme,
  VictoryTooltip,
  VictoryVoronoiContainer,
} from 'victory-native';
import LineDataJSON from '../../data/line-data.json';

const VictoryNativeLine = props => {
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
      domainPadding={0}
      fixLabelOverlap={true}
      height={height}
      theme={theme}
      width={width}>
      <VictoryStack>
        {stackData.map(({ id, color, data }) => {
          return (
            <VictoryLine
              key={id}
              data={data}
              animate={{
                duration: 300,
                onLoad: {
                  duration: 0,
                },
              }}
              style={{ data: { stroke: color } }}
              labels={({ datum }) => `${id}: ${datum.y}`}
              labelComponent={<VictoryTooltip renderInPortal={false} />}
            />
          );
        })}
      </VictoryStack>
    </VictoryChart>
  );
};

const VictoryNativeLineChart = props => {
  const dimensions = useWindowDimensions();

  return (
    <View
      style={{
        paddingLeft: 12,
        paddingRight: 12,
      }}>
      <VictoryNativeLine
        {...props}
        stackData={LineDataJSON}
        width={dimensions.width}
      />
    </View>
  );
};

export default VictoryNativeLineChart;

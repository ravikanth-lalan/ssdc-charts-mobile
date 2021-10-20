import React from 'react';
import { useWindowDimensions, View } from 'react-native';
import {
  VictoryAxis,
  VictoryChart,
  VictoryScatter,
  VictoryGroup,
  VictoryTheme,
  VictoryTooltip,
  VictoryVoronoiContainer,
} from 'victory-native';
import ScatterDataJSON from '../../data/scatter-data.json';

const VictoryNativeScatter = props => {
  const {
    height,
    stackData = [],
    tickCountFactor = 1,
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
      <VictoryAxis
        tickCount={Math.round((width / 100) * tickCountFactor)}
        tickFormat={x => `${x} kg`}
      />
      <VictoryAxis dependentAxis tickFormat={y => `${y} cm`} />
      <VictoryGroup>
        {stackData.map(({ id, color, data }) => {
          return (
            <VictoryScatter
              key={id}
              data={data}
              animate={{
                duration: 300,
                onLoad: {
                  duration: 0,
                },
              }}
              style={{ data: { stroke: color } }}
              labels={({ datum }) => `${id}: x: ${datum.x}, y: ${datum.y}`}
              labelComponent={<VictoryTooltip renderInPortal={true} />}
            />
          );
        })}
      </VictoryGroup>
    </VictoryChart>
  );
};

const VictoryNativeScatterChart = props => {
  const dimensions = useWindowDimensions();

  return (
    <View
      style={{
        paddingLeft: 12,
        paddingRight: 12,
      }}>
      <VictoryNativeScatter
        {...props}
        stackData={ScatterDataJSON}
        width={dimensions.width}
      />
    </View>
  );
};

export default VictoryNativeScatterChart;

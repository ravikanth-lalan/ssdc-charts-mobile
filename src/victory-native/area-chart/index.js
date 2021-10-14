import React from 'react';
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
      containerComponent={<VictoryVoronoiContainer fixLabelOverlap={true} responsive={true} />}
      domain={{}}
      domainPadding={0}
      fixLabelOverlap={true}
      height={height}
      theme={theme}
      width={width}>
      <VictoryAxis />
      <VictoryAxis dependentAxis />
      <VictoryStack>
        {stackData.map(({ id, data }) => {
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

  return (
    <View
      style={{
        paddingLeft: 12,
        paddingRight: 12,
      }}>
      <VictoryNativeArea
        {...props}
        stackData={AreaDataJSON}
        width={dimensions.width}
      />
    </View>
  );
};

export default VictoryNativeAreaChart;

import React from 'react';
import VictoryNativePieChart from '../pie-chart';

const VictoryNativeDonutChart = props => (
  <VictoryNativePieChart {...props} innerRadius={50} radius={100} />
);

export default VictoryNativeDonutChart;

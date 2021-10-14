import React from 'react';
import VictoryNativePieChart from '../pie-chart';

const VictoryNativeDonutChart = props => (
  <VictoryNativePieChart {...props} innerRadius={70} radius={160} />
);

export default VictoryNativeDonutChart;

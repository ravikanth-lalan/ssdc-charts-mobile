import React from 'react';
import VictoryNativeBarChart from '../bar-chart';

const VictoryNativeColumnChart = props => (
  <VictoryNativeBarChart {...props} horizontal={false} />
);

export default VictoryNativeColumnChart;

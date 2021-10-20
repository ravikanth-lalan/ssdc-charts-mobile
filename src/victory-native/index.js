import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import ActivityIndicatorView from '../components/activity-indicator-view';
import VictoryNativeAreaChart from './area-chart';
import VictoryNativeBarChart from './bar-chart';
import VictoryNativeColumnChart from './column-chart';
import VictoryNativeDonutChart from './donut-chart';
import VictoryNativeLineChart from './line-chart';
import VictoryNativePieChart from './pie-chart';
import VictoryNativeScatterChart from './scatter-plot-chart';

const VictoryNativeCharts = () => {
  const [child, setChild] = useState(null);

  useEffect(() => {
    setChild(
      <ScrollView>
        <VictoryNativeColumnChart />
        <VictoryNativeBarChart />
        <VictoryNativePieChart />
        <VictoryNativeDonutChart />
        <VictoryNativeAreaChart />
        <VictoryNativeLineChart />
        <VictoryNativeScatterChart />
      </ScrollView>,
    );
  }, []);

  return <>{child || <ActivityIndicatorView />}</>;
};

export default VictoryNativeCharts;

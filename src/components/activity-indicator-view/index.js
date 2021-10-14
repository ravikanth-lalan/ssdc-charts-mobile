import React, { memo } from 'react';
import { ActivityIndicator, View } from 'react-native';

const ActivityIndicatorView = memo(() => (
  <View
    style={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <ActivityIndicator color="blue" size="large" />
  </View>
));

export default ActivityIndicatorView;

import React, { useState } from 'react';
import WebView from 'react-native-webview';
import ActivityIndicatorView from '../activity-indicator-view';

const WebViewWrapper = ({ uri }) => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <WebView
        source={{ uri }}
        onLoadEnd={_ => setLoading(false)}
        onLoadStart={_ => setLoading(true)}
      />
      {loading && <ActivityIndicatorView />}
    </>
  );
};

export default WebViewWrapper;

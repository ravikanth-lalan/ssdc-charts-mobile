import React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ChartsConfig } from '../common/constants';

const Home = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    {ChartsConfig.map(({ imageProps, screen, showTitle, title }, index) => (
      <View
        key={index}
        style={{ alignSelf: 'center', marginTop: index === 0 ? 0 : 30 }}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={_ => navigation.navigate(screen)}>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 4,
              height: 80,
              width: 320,
              padding: 12,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <Image {...imageProps} />
            {showTitle && (
              <Text style={{ fontSize: 24, marginLeft: 10 }}>{title}</Text>
            )}
          </View>
        </TouchableOpacity>
      </View>
    ))}
  </View>
);

export default Home;

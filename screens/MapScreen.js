import MapView from 'react-native-maps'
import React from 'react';

export default class MapScreen extends React.Component {
  render() {
    return (
      <MapView
        style={{flex: 1}}
        region={{
          latitude: 42.882004,
          longitude: 74.582748,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        showsUserLocation={true}
      />
    );
  }
}
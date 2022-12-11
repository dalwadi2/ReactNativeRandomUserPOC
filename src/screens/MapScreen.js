import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import useFetchUsers from '../hooks/useFetchUsers';

// map key ="AIzaSyB33dYNcg4A_HwmAKQxCTdss7_ahvEX56M"
const MapScreen = ({ navigation, route }) => {
  const { data, loading } = useFetchUsers();

  return (
    <>
      <View style={styles.container}>
        {loading ? (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color={'#64b5f6'} />
          </View>
        ) : (
          <MapView provider={PROVIDER_GOOGLE} style={styles.map}>
            {data.results.map(item => (
              <Marker
                key={item.login.uuid}
                coordinate={{
                  latitude: Number(item.location.coordinates.latitude),
                  longitude: Number(item.location.coordinates.longitude),
                }}
                title={item.login.username}
              />
            ))}
          </MapView>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default MapScreen;

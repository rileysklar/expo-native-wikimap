import { View, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import MapView from 'react-native-maps';
import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

export default function HomeScreen() {
  const [location, setLocation] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }

      const currentLocation = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    })();
  }, []);

  return (
    <>
      <Stack.Screen 
        options={{
          title: 'WikiMaps',
          headerShown: true,
        }}
      />
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={location}
          showsUserLocation={true}
          showsMyLocationButton={true}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
}); 
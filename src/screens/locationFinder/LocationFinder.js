import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useRef, useCallback, useEffect} from 'react';
import {useSelector} from 'react-redux';

import Header from '../../components/headers/Header';
import MainHeader from '../../components/headers/MainHeader';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import AutoComplete from '../../components/autoComplete/AutoComplete';
import SubHeader from '../../components/headers/SubHeader';

export default function LocationFinder() {
  const locations = useSelector(state => state.locations.locations);
  const location = useSelector(state => state.locations.location);
  const mapView = useRef(null);

  useEffect(()=>{
    if(location){
      goToInitialLocation(location.coordinate);
    }
  },[location])

  const goToInitialLocation = region => {
    mapView.current.animateToRegion(region, 2000);
  };

  const listItem = ({item, index}) => (
    <View style={styles.listItem}>
      <TouchableOpacity
        onPress={() => {
          goToInitialLocation(item.coordinate);
        }}>
        <Text>{index+1}. {item.title}</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.container}>
      <MainHeader title={'Location Finder'} />

      <View style={{flex: 2}}>
        <AutoComplete />
        <MapView
          ref={mapView}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          onMapReady={() => goToInitialLocation(location.coordinate)}
          initialRegion={location.coordinate}
          >
          {locations.map(location => (
            <Marker
              key={location.key}
              coordinate={location.coordinate}
              title={location.title}
              description={`Marker ${location.key}`}
            />
          ))}
        </MapView>
      </View>
      <View style={styles.listContainer}>
        <SubHeader title={'Searched Locations'} />
        <FlatList
          data={locations}
          renderItem={listItem}
          keyExtractor={item => item.key}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: Dimensions.get('window').height,
    backgroundColor: '#dfe2e6',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  listItem: {padding: 15, borderBottomWidth: 1, borderBottomColor: '#ccc'},
  listContainer:{
    flex:1,
    backgroundColor: '#ffffff'
  }
});

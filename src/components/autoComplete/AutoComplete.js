import {
  View,
  TextInput,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSuggessions, resetSuggessions } from '../../store/actions/suggessions';
import { fetchLocation } from '../../store/actions/location';

export default function AutoComplete() {
  const AUTO_COMPLETE_URL =
    'https://maps.googleapis.com/maps/api/place/autocomplete/json';
  const DETAILS_URL = 'https://maps.googleapis.com/maps/api/place/details/json';
  const dispatch = useDispatch();
  const suggessions = useSelector((state) => state.suggessions.suggessions);
  const [text, setText] = useState('');

  const textChangeHandler = async value => {
    setText(value);
    if (value) {
        dispatch(fetchSuggessions(value))
    } else {
        dispatch(resetSuggessions(value))
    }
  };

  const onSelect = async item => {
    setText('');
    dispatch(fetchLocation(item));
    dispatch(resetSuggessions());
  };

  const renderItem = ({item}) => (
    <View style={styles.dropDownItem}>
      <TouchableOpacity
        onPress={() => {
          onSelect(item);
        }}>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Enter location to search"
        onChangeText={textChangeHandler}
        defaultValue={text}
      />
      <FlatList
        data={suggessions}
        renderItem={renderItem}
        keyExtractor={item => item.key}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 999,
    flex: 1,
    width: '100%',
    padding: 12,
    backgroundColor: '#ffffff',
  },
  searchInput: {
    borderWidth: 1,
    padding: 18,
    fontSize: 18,
    backgroundColor: '#ffffff',
  },
  dropDownItem: {padding: 15, borderBottomWidth: 1, borderBottomColor: '#ccc'},
});

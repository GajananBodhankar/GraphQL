import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  ActivityIndicator,
  Pressable,
  SafeAreaView,
} from 'react-native';
import {useQuery} from '@apollo/client';
import {CONTINENT_QUERY} from './query';
import {style} from './style';

const Country = () => {
  const [Data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>();
  const {data} = useQuery(CONTINENT_QUERY);
  async function trigger() {
    setLoading(true);
    setTimeout(() => {
      setData(data['continents']);
      setLoading(false);
    }, 2000);
  }
  function renderItem({item}: any) {
    return (
      <View style={style.flatlist}>
        <Text style={style.name}>{item.name}</Text>
      </View>
    );
  }
  return (
    <View style={style.mainContainer}>
      <SafeAreaView />
      {Data.length == 0 && !loading && (
        <View style={style.pressableView}>
          <Pressable style={style.pressable} onPress={trigger}>
            <Text style={style.txt}>Press for data</Text>
          </Pressable>
        </View>
      )}

      {loading && (
        <>
          <View style={{alignSelf: 'center'}}>
            <View style={style.loadingView}>
              <Text style={style.loadingtxt}>Loading...</Text>
              <ActivityIndicator size={20} color={'green'} />
            </View>
          </View>
        </>
      )}
      {!loading && Data.length > 0 && (
        <View style={style.flatlistMain}>
          <FlatList data={Data} renderItem={renderItem} />
        </View>
      )}
      {Data.length > 0 && (
        <Text style={style.fetchtxt}>Fetch successful!!</Text>
      )}
    </View>
  );
};
export default Country;

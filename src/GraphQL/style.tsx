import {Dimensions, StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  loadingView: {
    flexDirection: 'row',
    paddingTop: Dimensions.get('screen').height / 4,
  },
  pressableView: {
    width: Dimensions.get('screen').width / 2,
    alignSelf: 'center',
    paddingTop: Dimensions.get('screen').height / 4,
  },
  pressable: {
    backgroundColor: 'red',
    borderRadius: 10,
  },
  txt: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '500',
    paddingVertical: 10,
    color: 'white',
  },
  loadingtxt: {
    fontSize: 18,
    textAlign: 'center',
    color: 'black',
  },
  flatlist: {
    paddingVertical: 10,
    alignSelf: 'center',
    width: Dimensions.get('screen').width / 2,
    borderWidth: 0.9,
    marginVertical: 5,
  },
  flatlistMain: {
    height: Dimensions.get('window').height / 2.5,
    marginTop: Dimensions.get('window').height / 10,
    paddingVertical: 5,
    borderWidth: 0.7,
    width: Dimensions.get('window').width / 1.5,
    alignSelf: 'center',
  },
  name: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
  },
  fetchtxt: {
    color: 'green',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 22,
    fontWeight: '400',
  },
});

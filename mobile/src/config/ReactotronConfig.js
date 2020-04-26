import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

// // eslint-disable-next-line no-undef
if (__DEV__) {
  const tron = Reactotron.configure({
    name: 'GoBarber',
    host: '192.168.0.46',
  })
    .setAsyncStorageHandler(AsyncStorage)
    .use(reactotronRedux())
    .use(reactotronSaga())
    .useReactNative()
    .connect();

  tron.clear();

  console.tron = tron;
}

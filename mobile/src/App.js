import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';

import Teste from '~/Teste';

const App = () => {
  return (
    <>
      <StatusBar />
      <SafeAreaView>
        <ScrollView />
        <Teste />
      </SafeAreaView>
    </>
  );
};

export default App;

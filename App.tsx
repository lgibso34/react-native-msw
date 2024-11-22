/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    async function getExample() {
      try {
        const response = await fetch('http://example.com/test').then(res =>
          res.json(),
        );
        console.log(response);

        if (response.test === 'hello world') {
          console.log('PASS', response.test);
        } else {
          console.log(
            'Expected response.test to equal "hello world" but instead received',
            response.test,
          );
        }
      } catch (e) {
        console.log('something went wrong', e);
      }
    }
    getExample();
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}></View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;

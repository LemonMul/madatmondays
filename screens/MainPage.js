import React, { useState, useEffect } from 'react';
import {
  Text,
  TextInput,
  View,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

const MainPage = () => {
  const test = () => {
    var XMLHttpRequest = require('xhr2');
    var xhr = new XMLHttpRequest();
    var url =
      'http://openapi.seoul.go.kr:8088/sample/xml/CardSubwayStatsNew/1/5/20220301'; /*URL*/
    xhr.open('GET', url);
    xhr.onreadystatechange = function () {
      if (this.readyState == xhr.DONE) {
        // <== 정상적으로준비되었을때
        if (xhr.status == 200 || xhr.status == 201) {
          // <== 호출상태가정상적일때
          alert(
            'Status: ' +
              this.status +
              '\nHeaders: ' +
              JSON.stringify(this.getAllResponseHeaders()) +
              '\nBody: ' +
              this.responseText
          );
        }
      }
    };
    xhr.send('');
  };

  return (
    <View>
      <TouchableOpacity onPress={test}>
        <Text>test</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainPage;

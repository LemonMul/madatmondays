import React, { useState, useEffect } from 'react';
import {
  Text,
  TextInput,
  View,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import {API_KEY} from "@env";


const APITestPage = () => {
  const test = () => {
    const XMLHttpRequest = require('xhr2');
    const xhr = new XMLHttpRequest();
    const apiKEY = process.env.EXPO_PUBLIC_API_KEY;

    const url =
      `http://openAPI.seoul.go.kr:8088/${apiKEY}/json/ListNecessariesPricesService/1/5/하나로마트`; /*URL*/
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

export default APITestPage;

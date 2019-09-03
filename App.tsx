import React, { useState, useEffect, useMemo } from "react";
import { AppLoading } from "expo";
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import NavController from "./src/navigation/NavController";
import { dataContext } from "./useContext";

export default function App() {

  const [loading, setLoading] = useState(false);

  const [data, setData] = useState<any>({
    startPlace: "출발지",
    endPlace: ""
  });

  const value = useMemo(() => ({ data, setData }), [data, setData]);

  const preload = async() => {

    setLoading(true);

    try {
      await Font.loadAsync({
        'Do-Hyeon': require('./assets/fonts/DoHyeon-Regular.ttf'),
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      });
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    preload();
  }, []);

  return loading ? (
      <AppLoading/>
    ) : (
      <dataContext.Provider value={value as any}>
          <NavController/>
      </dataContext.Provider>
  );
}


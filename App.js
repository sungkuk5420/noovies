import React, { useState } from 'react';
import { AppLoading } from "expo";
import { Text, Image } from "react-native";
import { Asset } from 'expo-asset';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';

const cacheImages = (images) => images.map(image => {
  if (typeof image === "string") {
    return Image.prefetch(image)
  } else {
    return Asset.fromModule(image).downloadAsync();
  }
});

const cacheFonts = fonts => fonts.map(font => Font.loadAsync(font))

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const loadAssets = () => {
    const images = cacheImages([
      "https://images.unsplash.com/photo-1508742345712-0656a285ac27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      require("./assets/splash.png")
    ]);
    const fonts = cacheFonts([Ionicons.font]);
    console.log(fonts);
    return Promise.all([...images, ...fonts]);
  };
  const onFinish = () => setIsReady(true);
  return isReady ? <Text>Ready!</Text> : <AppLoading startAsync={loadAssets} onFinish={onFinish} onError={console.error} />;
}

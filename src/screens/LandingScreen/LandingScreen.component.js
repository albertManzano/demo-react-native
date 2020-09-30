import React from "react";
import {  View } from "react-native";
import ImageDetail from '../../components/ImageDisplay/ImageDisplay.component'

function Landing() {
  return (
    <View>
      <ImageDetail title="Forest" imageSource={require('../../assets/forest.jpg')} />
      <ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')}/>
      <ImageDetail title="Mountain" imageSource={require('../../assets/mountain.jpg')}/>
    </View>
  )
};

export default Landing;

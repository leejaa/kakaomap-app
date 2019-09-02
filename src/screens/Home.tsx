import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import constants from "../../constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

const styles = StyleSheet.create({
  View1: {
    marginLeft: 20
    , marginTop: 20
  },
  View2: {
    marginTop: 20
    , flexDirection: 'row'
  },
  Text: {
    fontSize: 20
    , fontWeight: 'bold'
    , lineHeight: 30
  },
  Image: {
    width: constants.width / 4
    , height: 100
    , marginLeft: constants.width / 16
  }
});




export default ({navigation} : any) => {

  return (
    <ScrollView>
      <View style={styles.View1}>
        <Text style={styles.Text}>안녕하세요. {"\n"}카카오 T 입니다.</Text>
      </View>
      <View style={styles.View2}>
        <TouchableOpacity onPress={() => navigation.navigate("Find", {
          title: "택시"
        })}>
          <View style={{alignItems: 'center'}}>
            <Image source={{uri: "http://imagescdn.gettyimagesbank.com/500/201607/a10519864.jpg"}} style={styles.Image}/>
            <Text style={{fontWeight: 'bold'}}>택시</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={{alignItems: 'center'}}>
          <Image source={{uri: "http://www.bloter.net/wp-content/uploads/2015/11/taxi-icon_.png"}} style={styles.Image}/>
          <Text style={{fontWeight: 'bold'}}>블랙</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={{alignItems: 'center'}}>
          <Image source={{uri: "http://www.urbanbrush.net/web/wp-content/uploads/edd/2019/08/urbanbrush-20190812011515239316.png"}} style={styles.Image}/>
          <Text style={{fontWeight: 'bold'}}>바이크</Text>
        </View>
        </TouchableOpacity>
     </View>
      <View style={styles.View2}>
        <TouchableOpacity>
        <View style={{alignItems: 'center'}}>
          <Image source={{uri: "https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/2b/f6/4f/2bf64f3d-cda3-eb6f-aaeb-e36ab19fe2a7/AppIcon.release-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-6.png/1200x630wa.png"}} style={styles.Image}/>
          <Text style={{fontWeight: 'bold'}}>대리</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{alignItems: 'center'}}>
           <Image source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_dUn2l5zn2hBqnS67I6vQmbabwUKXJsDbzlz1Rp-8-FyRxSm02g"}} style={styles.Image}/>
           <Text style={{fontWeight: 'bold'}}>주차</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
         <View style={{alignItems: 'center'}}>
          <Image source={{uri: "https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/8f/09/d3/8f09d312-b1c9-c200-1d62-cca4ce7082fb/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-7.png/1200x630wa.png"}} style={styles.Image}/>
          <Text style={{fontWeight: 'bold'}}>내비</Text>
         </View>
        </TouchableOpacity>
      </View>
      
    
    </ScrollView>
  );
}

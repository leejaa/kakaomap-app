import React from "react";
import {  View } from "react-native";
import { Avatar } from 'react-native-elements';
import { Ionicons } from "@expo/vector-icons";
import { Input } from 'native-base';
import {
    createBottomTabNavigator,
    createStackNavigator
  } from "react-navigation";
import Home from "../screens/Home";
import Find from "../screens/Find";
import Find2, { findEndPlace } from "../screens/Find2";






const stackFactory = (initialRoute: () => JSX.Element, customConfig: { headerRight: JSX.Element, headerStyle: Object }) =>
    createStackNavigator(
        {
            InitialRoute: {
                screen: initialRoute,
                navigationOptions: {
                    ...customConfig
                }
            },
            Find: {
                screen: Find,
                navigationOptions: ({navigation} : any) => {
                    return {
                        title : navigation.getParam("title", "")
                    }
                }
            },
            Find2: {
                screen: Find2,
                navigationOptions: ({navigation} : any) => {
                    return {
                        headerTitle : <Input placeholder="도착지 검색" onChangeText={findEndPlace}/>
                    }
                }
            }
        },
        {
            defaultNavigationOptions: {
                headerBackTitle: null,
            }
        }
    );

export default createBottomTabNavigator(
    {
        Home: {
            screen: stackFactory(Home as any, {
                headerRight: (
                    <View style={{alignItems: 'center', flex: 1}}>
                        <Avatar
                            rounded
                            source={{
                                uri:
                                'https://pbs.twimg.com/media/DTtzFbzVMAAxRQr.jpg',
                            }}
                        />
                    </View>
                ),
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0
                }
              
            }),
            navigationOptions: {
              tabBarIcon: ({ focused }) => (
                <Ionicons
                    name={"md-home"}
                    color={"#262626"}
                    
                />
              ),
            }
        },
    }
);



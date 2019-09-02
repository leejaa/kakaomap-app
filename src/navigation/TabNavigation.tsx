import React from "react";
import {  View, Text } from "react-native";
import { Avatar } from 'react-native-elements';
import { Ionicons } from "@expo/vector-icons";
import {
    createBottomTabNavigator,
    createStackNavigator
  } from "react-navigation";
import Home from "../screens/Home";
import Find from "../screens/Find";

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



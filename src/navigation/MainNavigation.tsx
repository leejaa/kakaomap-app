import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import TabNavigation from './TabNavigation';


const MainNavigation = createStackNavigator({
  TabNavigation
},{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#FAFAFA"
    }
  },
  headerMode: "none",
  mode: "modal"
});

export default createAppContainer(MainNavigation);
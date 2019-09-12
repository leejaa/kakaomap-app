import React, { useContext, useEffect, useCallback } from "react";
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import { ListItem } from 'react-native-elements'
import axios from "axios";
import { dataContext } from "../../useContext";
import { MAP_KEY } from "../../env";



export default ({navigation} : any) => {

  const { data, setData} : any = useContext(dataContext);

  console.log(JSON.stringify(data));

  const onPress = async(description : any) => {
    setData({
      ...data,
      endPlace: description
    });

    navigation.navigate("Find");
  }

    return (
        <Container>
          {
            data.autoAddress.predictions ? (
              data.autoAddress.predictions.map(
                (i : any)  => (
                <ListItem
                  key={i.id}
                  title={i.description}
                  bottomDivider
                  onPress={() => onPress(i.description)}
                />
                )
              )
            ) : (
              null
            )
          }
          
        </Container>
      );
}

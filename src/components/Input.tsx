import React, { useContext, useEffect, useCallback } from "react";
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import { ListItem } from 'react-native-elements'
import axios from "axios";
import { dataContext } from "../../useContext";
import { MAP_KEY } from "../../env";

export default () => {

    const { data, setData} : any = useContext(dataContext);

    const autoCompleteAddress = async(event : any) => {

        const URL = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${event}&types=geocode&language=ko&key=${MAP_KEY}`;
      
        const {data : predictions} = await axios(URL);

        setData({
            ...data,
            autoAddress: predictions
        });
      
      };

    return (
        <Input placeholder="도착지 검색" onChangeText={autoCompleteAddress}/>
      );
}

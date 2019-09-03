import React, { useEffect, useState, useContext } from "react";
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import * as Permissions from "expo-permissions";
import * as Location from 'expo-location';
import { Container, Header, Content, Item, Input, Icon } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { Text, Alert } from "react-native";
import { reverseGeoCode } from "../../mapHelpers";
import { dataContext } from '../../useContext';



export default ({navigation} : any) => {

    const [permission, setPermission] = useState(false);
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    const { data, setData} : any = useContext(dataContext);

    const preload = async() => {
        const { status } = await Permissions.askAsync(Permissions.LOCATION);

        if(status !== 'denied'){

            try {
                setPermission(true);
    
                const { coords : {
                    latitude : lat, 
                    longitude : lng
                }  } = await Location.getCurrentPositionAsync();
    
                setLatitude(lat);
                setLongitude(lng);
    
                const address = await reverseGeoCode(lat, lng);
    
                setData({
                    ...data,
                    startPlace: address
                });
                
            } catch (error) {
                console.log(error);
            }

        }
    }

    useEffect(() => {
        preload();
    }, [])

    return (
        permission && (
            <Container style={{marginTop: 10}}>
                <Content>
                <Item>
                    <Ionicons name="md-radio-button-off" size={15}/>
                    <Input placeholder='출발지 검색' style={{marginLeft: 10}} value={data.startPlace}/>
                    <Ionicons name="md-refresh" size={24} style={{marginRight: 10}}/>
                </Item>
                <Item>
                <Ionicons name="md-radio-button-on" size={15} color="red"/>
                    <Input placeholder='도착지 검색' style={{marginLeft: 10}} onFocus={() => navigation.navigate("Find2", {action: "endPlace", title: "도착지"})}/>
                </Item>
                {
                    data.endPlace !== "" ? (
                        <Item style={{height:35, justifyContent:'center'}}>
                            <Ionicons name="md-pin" size={15}/>
                            <Text>  약 6분 거리</Text>
                        </Item>
                    ) : (
                        null
                    )
                }
                
                </Content>
            </Container>
        )
      );
}

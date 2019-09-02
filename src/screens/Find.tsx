import React, { useEffect, useState } from "react";
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import * as Permissions from "expo-permissions";
import * as Location from 'expo-location';



export default ({navigation} : any) => {

    const [permission, setPermission] = useState(false);
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    const preload = async() => {
        const { status } = await Permissions.askAsync(Permissions.LOCATION);
        if(status !== 'denied'){
            setPermission(true);
            const { coords : {
                latitude : lat, 
                longitude : lng
            }  } = await Location.getCurrentPositionAsync();

            setLatitude(lat);
            setLongitude(lng);

        }
    }

    useEffect(() => {
        preload();
    }, [])

    return (
        permission && (
            <MapView
                style={{flex: 1}}
                initialRegion={{
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0.0043,
                    longitudeDelta: 0.0034,
                }}
            >

                <Marker
                    title={"현위치"}
                    description={"현재위치"}
                    coordinate={{
                        latitude: latitude,
                        longitude: longitude
                    }}
                />

            </MapView>
        )
      );
}

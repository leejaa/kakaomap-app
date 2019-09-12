import axios from "axios";
import { MAP_KEY } from "./env";

export const geoCode = async (address: string) => {
  const URL = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${MAP_KEY}`;
  const { data } = await axios(URL);
  if (!data.error_message) {
    const { results } = data;
    const firstPlace = results[0];

    if(!firstPlace){
      return false;
    }

    const {
      formatted_address,
      geometry: {
        location: { lat, lng }
      }
    } = firstPlace;
    return { formatted_address, lat, lng };
  } else {
    console.log(data.error_message);
    return false;
  }
};

export const reverseGeoCode = async (lat: number, lng: number) => {
  const URL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${MAP_KEY}&language=ko`;
  const { data } = await axios(URL);
  if (!data.error_message) {
    const { results } = data;
    const firstPlace = results[0];
    if (!firstPlace) {
      return false;
    }
    const address = firstPlace.formatted_address;
    return address;
  } else {
    console.log(data.error_message);
    return false;
  }
};


export const autoCompleteAddress = async(event : any) => {

  const URL = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${event}&types=geocode&language=ko&key=${MAP_KEY}`;

  const {data : predictions} = await axios(URL);

  return predictions;

};


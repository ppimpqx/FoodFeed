import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import MapView from "react-native-maps";
import LocationService from "../services/LocationService";

export default function MyMapView(props) {
  const width = Dimensions.get("screen").width;
  const height = Dimensions.get("screen").height;  

  if (props.location) {
    //DISPLAY MAP ON YOUR LOCATION
    return (
      <MapView
        style={{ width: width, height: height }}
        initialRegion={{
          latitude: props.location.coords.latitude,
          longitude: props.location.coords.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}   
        showsUserLocation={true}
        onUserLocationChange={(event) => {
            // console.log("LOCATION CHANGED : " , event);
            if (event.nativeEvent.coordinate) {
              let new_location = {
                coords: event.nativeEvent.coordinate,
                mocked: false,
                timestamp: event.nativeEvent.coordinate.timestamp,
              };
              //SET LOCATION
              props.setLocation(new_location); 
              //SEND TO SERVER
                if (props.recordLocation) {
                console.log("SEND TO SERVER");
                LocationService.storeItem({
                  user_id: "Me",
                  latitude: event.nativeEvent.coordinate.latitude,
                  longitude: event.nativeEvent.coordinate.longitude,
                });
              }
         
            }
        }}
        
      >        
      </MapView>
    );
  } else {
    //DISPLAY DEFAULT MAP on 0,0
    return <MapView style={{ width: width, height: height }}></MapView>;
  }
}

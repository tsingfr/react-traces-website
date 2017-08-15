import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, Polyline } from "react-google-maps";
import { MarkerType } from './App.js';
import GreenStarImg from './img/star_green.png';
import RedStarImg from './img/star_red.png';
import PinImg from './img/pin.png';


const google = window.google;

export const Map = withGoogleMap(props => (
    <GoogleMap
      ref={props.onMapMounted}
      defaultOptions={{
	  mapTypeControlOptions: {
              style: google.maps.MapTypeControlStyle.DEFAULT,
              position: google.maps.ControlPosition.TOP_LEFT
	  },
	  zoomControl: false,
	  streetViewControlOptions: {
              position: google.maps.ControlPosition.BOTTOM_CENTER
	  }
      }}
      defaultZoom={14}
      defaultCenter={{ lat: 48.852, lng: 2.350 }}
      onClick={props.onMapLeftClick}
      onRightClick={props.onMapRightClick}
      >
      {props.markers.map((marker, index) => {
	  const onClick = () => props.onMarkerClick(marker);

	  let position = new google.maps.LatLng(
	      marker.coord.lat, marker.coord.lng
	  );

	  var icon;
	  
	  switch (marker.type) {
	  case MarkerType.red:
	      icon = {url: RedStarImg, scaledSize: new google.maps.Size(16, 16)};
	      break;
	  case MarkerType.green:
	      icon = {url: GreenStarImg, scaledSize: new google.maps.Size(16, 16)};
	      break;
	  case MarkerType.searchHit:
	      icon = {url: PinImg, scaledSize: new google.maps.Size(48, 48)};
	      break;
	  case MarkerType.new:
	      icon = {url: PinImg, scaledSize: new google.maps.Size(48, 48)};
	      break;
	  }
	  
	  return (
	      <Marker
		key={index}
		icon={icon}
		position={position}
		title={(index + 1).toString()}
		onClick={onClick}
		>
	      </Marker>
	  );
      })}
    
    {props.traces.map((trace, index) => {
	const onClick = () => props.onTraceClick(trace);
	
	var coords = [];

	for (var it in trace.detail) {

	    coords.push({
		lat: trace.detail[it].latitude,
		lng: trace.detail[it].longitude
	    });
	}

	var opt = {
	    strokeColor: '#FF0000',
	    strokeOpacity: 1.0,
	    strokeWeight: 2
	};

	return (
	    <Polyline
	      key={index}
	      path={coords}
	      options={opt}
	      onClick={onClick}
	      />
	);
    })}
    </GoogleMap>
));

import React from "react";
// import Autocomplete from "react-google-autocomplete";
import MapboxAutocomplete from 'react-mapbox-autocomplete';



export default function Location(props: { value: any; handlePlaceChange: (arg0: any, arg1: { formatted_address: any; geometry: { location: { lat: () => number; lng: () => number; }; }; }) => void; for: any; }) {
  return (
    <React.Fragment>
      {/* <Autocomplete
        className="form-control form-control-sm"
        value={props.value}
        onPlaceSelected={(place: { formatted_address: any; geometry: { location: { lat: () => number; lng: () => number; }; }; place_id : string; }) => {
            props.handlePlaceChange(props.for, place);
        }}
        types={["(cities)"]}
        componentRestrictions={{ country: "in" }}
        onChange={(e: { target: { value: any; }; }) => {
                    
            const place = {
              formatted_address: e.target.value,
              geometry : {
                location : {
                  lat : function() {return 0},
                  lng : function() {return 0}
                }
              }
            };
            props.handlePlaceChange(props.for, place);
          }}

      /> */}
{/* 
      https://api.mapbox.com/geocoding/v5/mapbox.places/
      starbucks.json?bbox=-77.083056,38.908611,-76.997778,38.959167&access_token=pk.eyJ1IjoidmlyZW45NyIsImEiOiJja2Z4bDJ0eGcxbG40MnB0OHl0MGRpaXY2In0.wa0lFkxcbILUDWL05aOvEA */}

      <MapboxAutocomplete publicKey='pk.eyJ1IjoidmlyZW45NyIsImEiOiJja2Z4bDJ0eGcxbG40MnB0OHl0MGRpaXY2In0.wa0lFkxcbILUDWL05aOvEA'
        inputClass='form-control form-control-sm '
        onSuggestionSelect={(result, lat, lng, text , id) => {
          // console.log(id)
          // const { result, lat, lng, text } = obj
          const place = {
            formatted_address: result,
            geometry: {
              location: {
                lat: () => {
                  return Number(lat)
                },
                lng: () => {
                  return Number(lng)
                } 
              }
            },
            place_id: `${text}${lat}${lng}`
          }
          props.handlePlaceChange(props.for, place);
        }}
        country='in'
        resetSearch={false} />
    </React.Fragment>
  );
}
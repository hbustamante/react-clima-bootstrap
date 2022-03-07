import React from 'react';
import GoogleMaps from 'simple-react-google-maps';

const Maps = ({latitude, longitude}) => {
    
    return ( <>
        {(latitude && longitude) ? 
            <GoogleMaps
            apiKey={process.env.REACT_APP_API_KEY_MAPS}
            style={{width: '100%' , height: '300px'}}
            zoom={12}
            center={{lat: latitude, lng: longitude}}
            />
            : null        
        }
          
        </> );
}
 
export default Maps;
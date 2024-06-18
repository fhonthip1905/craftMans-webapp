import { useCallback, useRef, useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const libraries = ["places"];

export default function ShopLocationContainer ({ lat, lng, placeName })  {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDeGnzxu5ZaWsmL8U1yyDS1NT_jgnpt--Q", // Google API Key ของคุณ
    libraries,
  });

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const [directions, setDirections] = useState(null);

  const handleMapClick = async (event) => {
    const directionsService = new window.google.maps.DirectionsService();
    const result = await directionsService.route({
      origin: { lat, lng },
      destination: { lat: event.latLng.lat(), lng: event.latLng.lng() },
      travelMode: window.google.maps.TravelMode.DRIVING,
    });
    setDirections(result);
  };

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps</div>;

  return (
    <>
      <div className="flex flex-col justify-center w-full items-canter">
        <div className="text-amber-500 font-extrabold text-4xl mb-8 flex justify-center">
          {placeName}
        </div>
        <div >
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={15}
            center={{ lat, lng }}
            onLoad={onMapLoad}
            onClick={handleMapClick}
          >
            <Marker position={{ lat, lng }} />
            {directions && <DirectionsRenderer directions={directions} />}
          </GoogleMap>
        </div>
      </div>
    </>
  );
}



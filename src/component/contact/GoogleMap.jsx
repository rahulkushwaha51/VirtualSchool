import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';
import './GoogleMap.css'
const GoogleMap=()=> {
  const position = {lat: 53.54992, lng: 10.00678};

  return (
    <APIProvider apiKey={'AIzaSyA9RhOxTKhB7KED8Psh-ZQeg5UNVMh2M0o'}>
      <div className='modify'>
      <Map center={position} zoom={10}>
        <Marker position={position} />
      </Map>
      </div>
    </APIProvider>
  )
}
export default GoogleMap;
import '@tomtom-international/web-sdk-maps/dist/maps.css'
import tt from '@tomtom-international/web-sdk-maps';
import { useRef, useEffect, useState} from 'react';
 
export default function Dashboard() {
    const mapElement = useRef();
    const [map, setMap] = useState({});

    useEffect(() => {
        let map = tt.map({
          key: "aiGyPvdRv0jDJEKp1FFXqSyMbAunpuNH",
          container: mapElement.current,
          center: [-46.61991444711061,-23.68551324571913],
          zoom: 14
        });
        setMap(map);
        return () => map.remove();
      }, []);
    return ( <>

    



        <section className=''>
        <div ref={mapElement} className="mapDiv h-screen"></div>

        </section>


        <section>


        </section>
    

    
    </>
    )
}
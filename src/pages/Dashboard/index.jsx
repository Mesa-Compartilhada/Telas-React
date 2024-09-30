// Components:
import Header from "../../components/Header_V2.jsx/index.jsx"
import {ListaDoacoes} from "../../components/listaDoacoes/ListaDoacoes.jsx"

//API
import '@tomtom-international/web-sdk-maps/dist/maps.css'
import tt from '@tomtom-international/web-sdk-maps';
import { useRef, useEffect, useState } from 'react';

export default function Dashboard() {
    const mapElement = useRef();
    const [map, setMap] = useState({});

    useEffect(() => {
        let map = tt.map({
            key: "aiGyPvdRv0jDJEKp1FFXqSyMbAunpuNH",
            container: mapElement.current,
            center: [-46.61991444711061, -23.68551324571913],
            zoom: 14
        });
        setMap(map);
        return () => map.remove();
    }, []);

    return (
        <>
          <Header/>
          
            <div className="flex justify-center items-center h-screen">
                <div ref={mapElement} className="w-[1000px] h-[480px]"></div>
            </div>

            <section>
            <ListaDoacoes/>
            </section>
        </>
    )
}

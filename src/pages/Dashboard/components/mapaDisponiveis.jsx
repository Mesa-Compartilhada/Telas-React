//API
import '@tomtom-international/web-sdk-maps/dist/maps.css'
import tt from '@tomtom-international/web-sdk-maps';

import { useRef, useEffect, useState } from 'react';
import { getDoacoesByStatus } from '../../../lib/api/doacao.js';
import { STATUS_DOACAO } from '../../../constants/doacao.js';
import { CardPerfil } from '../../../components/perfil/CardPerfil.jsx';
import { getEmpresaById } from '../../../lib/api/empresa.js';
import { Link } from 'react-router-dom';
import Modal from '../../../components/modal/Modal.jsx';

export default function MapaDisponiveis() {
    const [empresaSelecionada, setEmpresaSelecionada] = useState()
    const [abrirModalEmpresa, setAbrirModalEmpresa] = useState(false)
    const selecionarEmpresa = async (id) => {
        const result = await getEmpresaById(id)
        setEmpresaSelecionada(result.empresa)

        setAbrirModalEmpresa(true)
    }

    const mapElement = useRef();
    const [map, setMap] = useState({});

    const [popEmpresa, setPopEmpresa] = useState(null);
    async function getListaEmpresa() {
        let doacao = await getDoacoesByStatus(STATUS_DOACAO.DISPONIVEL)
        let tempPop = []
        doacao.forEach(item => {
            tempPop.push(item.empresaDoadora)
        });
        setPopEmpresa(tempPop)
    } 

    useEffect(() => {
        let map = tt.map({
            key: process.env.REACT_APP_TOMTOM_API_KEY,
            container: mapElement.current,
            center: [-46.61991444711061, -23.68551324571913],
            zoom: 14
        });
        
        getListaEmpresa()
        setMap(map);
        return () => map.remove();
    }, []);

    useEffect(() => {
        if (popEmpresa) {
            let mapa = map
            var marker
            let popup
            var markerHeight = 50
            let popupOffsets = {
                'bottom': [0, -markerHeight]
            }

            popEmpresa.forEach(item => {
                const button = document.createElement("button")
                button.innerText = item.nome
                button.className = ""
                button.addEventListener("click", () => [selecionarEmpresa(item.id), setAbrirModalEmpresa(true)])

                const popupContent = document.createElement("div")
                popupContent.appendChild(button)

                popup = new tt.Popup({offset: popupOffsets, className: 'my-class'})
                .setLngLat({lng:item.endereco.longitude, lat:item.endereco.latitude})
                .setDOMContent(popupContent)
                .addTo(mapa);
                marker = new tt.Marker()
                .setLngLat({lng:item.endereco.longitude, lat:item.endereco.latitude}).setPopup(popup)
                .addTo(mapa)
            });
            setMap(mapa)
        }
    }, [popEmpresa]);

    return(
        <div className="flex flex-col gap-2 m-5 items-center">
            <h1 className="text-2xl">Mapa de empresas doadoras</h1>
            <div ref={mapElement} className="w-2/3 h-96 m-auto" />
            {
                empresaSelecionada && abrirModalEmpresa
                &&
                <Modal setIsActive={ setAbrirModalEmpresa }>
                    <div>
                        <CardPerfil empresa={empresaSelecionada} />
                        <Link to={`/perfil/${empresaSelecionada.id}`}>Ir para a página da empresa</Link>
                    </div>
                </Modal>
            }
        </div>
        
    )

}
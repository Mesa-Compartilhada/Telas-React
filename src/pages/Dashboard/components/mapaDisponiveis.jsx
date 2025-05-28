//API
import '@tomtom-international/web-sdk-maps/dist/maps.css';
import tt from '@tomtom-international/web-sdk-maps';

import { useRef, useEffect, useState } from 'react';
import { getDoacoesByStatus } from '../../../lib/api/doacao.js';
import { STATUS_DOACAO } from '../../../constants/doacao.js';
import { CardPerfil } from '../../../components/perfil/CardPerfil.jsx';
import { getEmpresaById } from '../../../lib/api/empresa.js';
import { Link } from 'react-router-dom';
import Modal from '../../../components/modal/Modal.jsx';

export default function MapaDisponiveis() {
    const [empresaSelecionada, setEmpresaSelecionada] = useState();
    const [abrirModalEmpresa, setAbrirModalEmpresa] = useState(false);
    const [popEmpresa, setPopEmpresa] = useState(null);

    const mapElement = useRef();
    const mapRef = useRef(null);
    const markersRef = useRef([]);

    const selecionarEmpresa = async (id) => {
        const result = await getEmpresaById(id);
        setEmpresaSelecionada(result.empresa);
        setAbrirModalEmpresa(true);
    };

    const getListaEmpresa = async () => {
        const doacao = await getDoacoesByStatus(STATUS_DOACAO.DISPONIVEL);
        const tempPop = doacao.map(item => item.empresaDoadora);
        setPopEmpresa(tempPop);
    };

    useEffect(() => {
        const initMap = async () => {
            const map = tt.map({
                key: process.env.REACT_APP_TOMTOM_API_KEY,
                container: mapElement.current,
                center: [-46.61991444711061, -23.68551324571913],
                zoom: 14
            });

            mapRef.current = map;
            await getListaEmpresa();

            return () => map.remove();
        };

        initMap();
    }, []);

    useEffect(() => {
        if (popEmpresa && mapRef.current) {
            const mapa = mapRef.current;

            markersRef.current.forEach(marker => marker.remove());
            markersRef.current = [];

            const markerHeight = 50;
            const popupOffsets = { bottom: [0, -markerHeight] };

            popEmpresa.forEach(item => {
                const button = document.createElement("button");
                button.innerText = item.nome;
                button.setAttribute("tabIndex", "-1");
                button.className = "";
                button.addEventListener("click", () => {
                    selecionarEmpresa(item.id);
                    setAbrirModalEmpresa(true);
                });

                const popupContent = document.createElement("div");
                popupContent.appendChild(button);

                const popup = new tt.Popup({
                    offset: popupOffsets,
                    className: 'my-class',
                    focus: false
                })
                    .setLngLat({
                        lng: item.endereco.longitude,
                        lat: item.endereco.latitude
                    })
                    .setDOMContent(popupContent);

                const marker = new tt.Marker()
                    .setLngLat({
                        lng: item.endereco.longitude,
                        lat: item.endereco.latitude
                    })
                    .setPopup(popup)
                    .addTo(mapa);

                markersRef.current.push(marker);
            });
        }
    }, [popEmpresa]);

    return (
        <div className="flex flex-col gap-2 m-5 items-center">
            <h1 className="text-2xl">Mapa de empresas doadoras</h1>
            <div ref={mapElement} className="w-2/3 h-96 m-auto" />
            {
                empresaSelecionada && abrirModalEmpresa &&
                <Modal setIsActive={setAbrirModalEmpresa}>
                    <div className='flex flex-col gap-2'>
                        <CardPerfil empresa={empresaSelecionada} />
                        <Link to={`/perfil/${empresaSelecionada.id}`} className='link-default w-fit'>
                            Ir para a página da empresa
                        </Link>
                    </div>
                </Modal>
            }
        </div>
    );
}

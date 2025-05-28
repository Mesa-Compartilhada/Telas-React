popEmpresa.forEach(item => {
                const button = document.createElement("button")
                button.innerText = item.nome
                button.setAttribute("tabIndex", "-1")
                button.className = ""
                button.addEventListener("click", () => [selecionarEmpresa(item.id), setAbrirModalEmpresa(true)])

                const popupContent = document.createElement("div")
                popupContent.appendChild(button)

                popup = new tt.Popup({offset: popupOffsets, className: 'my-class', closeOnClick: false, focus: false})
                .setLngLat({lng:item.endereco.longitude, lat:item.endereco.latitude})
                .setDOMContent(popupContent)
                .addTo(mapa);
                marker = new tt.Marker()
                .setLngLat({lng:item.endereco.longitude, lat:item.endereco.latitude}).setPopup(popup)
                .addTo(mapa)
            });
            setMap(mapa)
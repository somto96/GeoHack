// const Axios = require('axios-functions.js'); 
$(document).ready(function () {

    // var test =  document.getElementById('filters').activeElement;
    // console.log(test);
    // console.log(window.scrollY);
    /***
     * Note: Mapbox uses LngLat format.
     * 
     * Google provides coordinates in LatLng format
     *  
     */

    mapboxgl.accessToken =
        'pk.eyJ1Ijoic29tdG85NiIsImEiOiJjazJrOHdvOWIxMDRsM2pvMDhpdGcxMG14In0.L0lWaue08HMjJbSJZUZA5Q';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v10',
        pitch: 55,
        center: [3.916667, 7.396389],
        zoom: 10,
        bearing: 17.6,

    });
    // console.log(map.scrollZoom._map.transform.zoom)


    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());

   

    /**
     * FUNCTIONS
     */
    // document.getElementById('location-name')
    const loadPolygonMapData = (id, source, data, color, opacity) => {
        map.on('load', function () {
            map.addSource(source, {
                type: 'geojson',
                data: data
            });
            map.addLayer({
                'id': id,
                'type': "fill",
                'source': source,
                'layout': {
                    'visibility': 'none',
                },
                'paint': {
                    'fill-color': color,
                    'fill-opacity': opacity
                }
            });
        });


    }

    const loadPointMapData = (imageURL, imageId, source, data, id) => {
        map.loadImage(
            imageURL,
            function (error, image) {
                if (error) throw error;
                map.addImage(imageId, image);
                map.addSource(source, {
                    'type': 'geojson',
                    'data': data
                });
                map.addLayer({
                    'id': id,
                    'type': 'symbol',
                    'source': source,
                    'layout': {
                        'icon-image': imageId,
                        'icon-size': 0.1,
                        'visibility': 'none'
                    }
                });
            }
        );

    }

    const renderedLink = {
        templateA: (data) => {
            var parentListA = document.createElement('li');
            var linkA = document.createElement('a');
            var childDiv = document.createElement('div');
            var showBtn = document.createElement('a');
            var closeBtn = document.createElement('a');
            var childText = document.createElement('p');

            // var count = 0; 
            showBtn.classList.add('uk-button', 'uk-button-default', 'uk-button-small');
            closeBtn.classList.add('uk-button', 'uk-button-default', 'uk-button-small');
            linkA.classList.add("uk-accordion-title", "active");
            childDiv.classList.add("uk-accordion-content");
            childText.setAttribute("id", "story")
            linkA.textContent = data;
            showBtn.textContent = "Show";
            closeBtn.textContent = "Hide";


            linkA.onclick = function () {
                // count += 1;
                console.log('clicked');
                // console.log(count);
                var clickedLayer = linkA.textContent;
                console.log(clickedLayer);
                if (clickedLayer === "Boundary") {
                    childText.textContent =
                        `Ibadan is the capital and
                            most populous city of Oyo State, Nigeria. With a population of over 3 million, it is the third
                            most
                            populous city in Nigeria after Lagos and Kano.
                            Ibadan is located in south-western Nigeria, 128 kilometres (80 mi) inland northeast of Lagos and
                            530
                            kilometres (330 mi) southwest of Abuja, the federal capital, and is a prominent transit point
                            between the coastal region and the areas in the hinterland of the country. Ibadan had been the
                            centre of administration of the old Western Region since the days of the British colonial rule,
                            and
                            parts of the city's ancient protective walls still stand to this day. The principal inhabitants
                            of
                            the city are the Yorubas, as well as various communities from other parts of the country.`;
                }

                showBtn.onclick = () => {
                    map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
                }

                closeBtn.onclick = () => {
                    map.setLayoutProperty(clickedLayer, 'visibility', 'none');
                }
            }
            document.getElementById('filters').appendChild(parentListA);
            parentListA.appendChild(linkA);
            parentListA.appendChild(childDiv);
            childDiv.appendChild(showBtn);
            childDiv.appendChild(closeBtn);
            childDiv.appendChild(childText);

        },

        templateB: (data) => {
            var parentListB = document.createElement('li');
            var linkB = document.createElement('a');
            var childDiv = document.createElement('div');
            var showBtn = document.createElement('a');
            var closeBtn = document.createElement('a');
            var childText = document.createElement('p');

            // var count = 0;

            showBtn.classList.add('uk-button', 'uk-button-default', 'uk-button-small');
            closeBtn.classList.add('uk-button', 'uk-button-default', 'uk-button-small');
            linkB.classList.add("uk-accordion-title");
            childDiv.classList.add("uk-accordion-content");
            childText.setAttribute("id", "story")
            linkB.textContent = data;
            closeBtn.textContent = "Hide";
            showBtn.textContent = "Show";

            linkB.onclick = function () {
                // count += 1;
                console.log('clicked');
                // console.log(count);
                console.log('clicked');
                var clickedLayer = linkB.textContent;
                // console.log(clickedLayer === "Health Facilities");
                if (clickedLayer === "Health Facilities") {
                    childText.textContent =
                        `There were 438 hospitals
                 in 1999, about 85% of them privately owned. Ibadan South-West LGA had the highest proportion of the
                 privately owned facilities (37%), but was second to Ibadan North with respect to government hospitals.
                 Ibadan North had the highest number of government hospitals while all the government hospitals in Ibadan
                 South-East LGA were PHCs. Ibadan North LGA also had the highest number of doctors owing to the
                presence of the University College Hospital (UCH), a tertiary health facility. After 16 years, the number of
                private hospitals had declined by 72.5% to 103 while the number of government hospitals had grown from
                 64 to 103.`;
                }

                showBtn.onclick = () => {
                    map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
                }

                closeBtn.onclick = () => {
                    map.setLayoutProperty(clickedLayer, 'visibility', 'none');
                }
            }
            document.getElementById('filters').appendChild(parentListB);
            parentListB.appendChild(linkB);
            parentListB.appendChild(childDiv);
            childDiv.appendChild(showBtn);
            childDiv.appendChild(closeBtn);
            childDiv.appendChild(childText);
        },

        templateC: (data) => {
            var parentListC = document.createElement('li');
            var linkC = document.createElement('a');
            var childDiv = document.createElement('div');
            var showBtn = document.createElement('a');
            var closeBtn = document.createElement('a');
            var childText = document.createElement('p');

            // var count = 0;

            showBtn.classList.add('uk-button', 'uk-button-default', 'uk-button-small');
            closeBtn.classList.add('uk-button', 'uk-button-default', 'uk-button-small');
            linkC.classList.add("uk-accordion-title");
            childDiv.classList.add("uk-accordion-content");
            childText.setAttribute("id", "story")
            linkC.textContent = data;
            closeBtn.textContent = "Hide";
            showBtn.textContent = "Show";

            linkC.onclick = function () {
                // count += 1;
                console.log('clicked');
                // console.log(count);
                console.log('clicked');
                var clickedLayer = linkC.textContent;
                // console.log(clickedLayer === "Health Facilities");
                if (clickedLayer === "Flood Extent") {
                    childText.textContent =
                        `There were 438 hospitals
                 in 1999, about 85% of them privately owned. Ibadan South-West LGA had the highest proportion of the
                 privately owned facilities (37%), but was second to Ibadan North with respect to government hospitals.
                 Ibadan North had the highest number of government hospitals while all the government hospitals in Ibadan
                 South-East LGA were PHCs. Ibadan North LGA also had the highest number of doctors owing to the
                presence of the University College Hospital (UCH), a tertiary health facility. After 16 years, the number of
                private hospitals had declined by 72.5% to 103 while the number of government hospitals had grown from
                 64 to 103.`;
                }

                showBtn.onclick = () => {
                    map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
                }

                closeBtn.onclick = () => {
                    map.setLayoutProperty(clickedLayer, 'visibility', 'none');
                }
            }
            document.getElementById('filters').appendChild(parentListC);
            parentListC.appendChild(linkC);
            parentListC.appendChild(childDiv);
            childDiv.appendChild(showBtn);
            childDiv.appendChild(closeBtn);
            childDiv.appendChild(childText);
        },

        templateD: (data) => {
            var parentListD = document.createElement('li');
            var linkD = document.createElement('a');
            var childDiv = document.createElement('div');
            var showBtn = document.createElement('a');
            var closeBtn = document.createElement('a');
            var childText = document.createElement('p');

            // var count = 0;

            showBtn.classList.add('uk-button', 'uk-button-default', 'uk-button-small');
            closeBtn.classList.add('uk-button', 'uk-button-default', 'uk-button-small');
            linkD.classList.add("uk-accordion-title");
            childDiv.classList.add("uk-accordion-content");
            childText.setAttribute("id", "story")
            linkD.textContent = data;
            closeBtn.textContent = "Hide";
            showBtn.textContent = "Show";

            linkD.onclick = function () {
                // count += 1;
                console.log('clicked');
                // console.log(count);
                console.log('clicked');
                var clickedLayer = linkD.textContent;
                // console.log(clickedLayer === "Health Facilities");
                if (clickedLayer === "Dump Sites") {
                    childText.textContent =
                        `There were 438 hospitals
                 in 1999, about 85% of them privately owned. Ibadan South-West LGA had the highest proportion of the
                 privately owned facilities (37%), but was second to Ibadan North with respect to government hospitals.
                 Ibadan North had the highest number of government hospitals while all the government hospitals in Ibadan
                 South-East LGA were PHCs. Ibadan North LGA also had the highest number of doctors owing to the
                presence of the University College Hospital (UCH), a tertiary health facility. After 16 years, the number of
                private hospitals had declined by 72.5% to 103 while the number of government hospitals had grown from
                 64 to 103.`;
                }

                showBtn.onclick = () => {
                    map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
                }

                closeBtn.onclick = () => {
                    map.setLayoutProperty(clickedLayer, 'visibility', 'none');
                }
            }
            document.getElementById('filters').appendChild(parentListD);
            parentListD.appendChild(linkD);
            parentListD.appendChild(childDiv);
            childDiv.appendChild(showBtn);
            childDiv.appendChild(closeBtn);
            childDiv.appendChild(childText);
        }
    }





    // LAYERS
    /**
     * Getting data using axios
     * 
     */
    const Axios = {
        polygonData: (data, id, source, color, opacity) => {
            axios.get(data)
                .then(res => {
                    // console.log(res.data);
                    // var boundaryData = res.data;
                    console.log(res.data);
                    // loadPolygonMapData = (id, source, data, color, opacity)
                    // loadPolygonMapData('Boundary', 'admin-boundaries', res.data, '#088', 0.3);
                    loadPolygonMapData(id, source, res.data, color, opacity);

                }).catch(err => console.log(err));
        },
        // source, data, id, radius, color, sourceLayer
        pointData: (data, imageURL, imageId, source, id) => {
            axios.get(data)
                .then(res => {
                    // console.log(res.data);
                    // var hea = res.data;
                    console.log(res.data);
                    // loadPointMapData = (imageURL, imageId, source, data, id)
                    // loadPointMapData('../assets/img/hospital.png', 'hospital', 'health-facilities',res.data, 'Health Facilities');
                    loadPointMapData(imageURL, imageId, source, res.data, id);

                }).catch(err => console.log(err));
        }
    }

    Axios.polygonData('./js/data/administrative_ibadan_district.geojson', 'Boundary', 'admin-boundaries', '#088', 0.3);
    Axios.polygonData('./js/data/flood_extent.geojson', 'Flood Extent', 'flood-extent', 'blue', 0.5);
    Axios.polygonData('./js/data/dumpsites_areas.geojson', 'Dump Sites', 'dump-sites', 'red', 0.5);
    // Axios.pointData('./js/data/health_facilities.geojson', 'https://png.pngtree.com/png-clipart/20190116/ourmid/pngtree-hand-painted-medical-health-hospital-png-image_391910.jpg', 'hospital', 'health-facilities', 'Health Facilities');
    Axios.pointData('./js/data/health_facilities.geojson', '../assets/img/hospital.png', 'hospital', 'health-facilities', 'Health Facilities');


    /**
     * ACTION EVENTS
     */
    var toggleableLayerIds = ['Boundary', 'Health Facilities', 'Flood Extent', 'Dump Sites'];

    renderedLink.templateA(toggleableLayerIds[0]);
    renderedLink.templateB(toggleableLayerIds[1]);
    renderedLink.templateC(toggleableLayerIds[2]);
    renderedLink.templateD(toggleableLayerIds[3]);










})
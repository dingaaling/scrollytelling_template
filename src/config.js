var config = {
    style: 'mapbox://styles/mapbox/navigation-night-v1',
    accessToken: 'pk.eyJ1IjoiaWFtamVuZGluZyIsImEiOiJjbDliNmNuYWcwNWxzNDFvMDlia3FkOWk4In0.JyLESZ4wmJ8NC5cnUJKczg',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Polar Portals Postcards',
    subtitle: 'Connecting students and explorers from Stratford to the South Pole',
    byline: 'Polar Portals Team',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'The Start of the Journey',
            image: './images/IMG_2477.JPG',
            description: 'In autumn 2022,  Polar Portals (AR enabled postcards) will be sent via the Antarctic to schools in the UK to inspire and engage children to consider a career in polar research, especially among the target audience of 8–12 year olds from racial and ethnic minorities. The postcards will present visual artworks connected to the theme of polar regions, exploration and science.',
            location: {
                center: [ -0.127600, 51.507200],
                zoom: 7.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'The Postcards',
            image: './images/IMG_1753.JPG',
            description: "On the reverse of the postcards, pupils will be able to access a QR code to learn about the postcard’s journey and bring it to life through AR, documenting the postcard's journey and that of the participating polar researchers through video diary entries and personal messages.",
            location: {
                center: [0.000072, 51.549429],
                zoom: 12,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'The Journey',
            image: './images/IMG_1907.JPG',
            description: 'The postcards will travel from the United Kingdom to South America...',
            location: {
                center: [-70.930237, -53.165717],
                zoom: 10,
                pitch: 10,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'The Destination',
            image: './images/P1070649.jpg',
            description: '...and finally reach Antarctica! Together with Royal Museums Greenwich, an under-18s Postcard Design Competition will be held with local schools in East London. The winning postcard will be stocked in the UK Antarctic Heritage Trust Penguin Post Office, Antarctica, and available for purchase.',
            location: {
                center: [169.356107, -78.233530],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};

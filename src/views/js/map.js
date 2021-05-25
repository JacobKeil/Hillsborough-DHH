map.addControl(
    new mapboxgl.FullscreenControl({
      container: document.querySelector("body"),
    })
  );

  var geojson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-82.5595, 28.013],
        },
        properties: {
          title: "Morgan Woods Elementary School",
          description: "Morgan Woods",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-82.562, 28.001],
        },
        properties: {
          title: "Town and Country Elementary School",
          description: "Town and Country",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-82.566, 27.988],
        },
        properties: {
          title: "Bay Crest Elementary School",
          description: "Bay Crest",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-82.573, 27.992],
        },
        properties: {
          title: "Dickenson Elementary School",
          description: "Dickenson",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-82.576, 28.015],
        },
        properties: {
          title: "Woodbridge Elementary School",
          description: "8301 Woodbridge Blvd, Tampa, FL 33615",
        },
      }
    ],
  };
  // add markers to map
  geojson.features.forEach(function (marker) {
    var el = document.createElement("div");
    el.className = "marker fas fa-map-marker-alt fa-2x";

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el, {
      offset: [0, -15],
    })
      .setLngLat(marker.geometry.coordinates)
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML("<h3>" + marker.properties.title + '</h3><i class="fas fa-directions"></i><a href="http://www.google.com/maps/place/' + marker.geometry.coordinates[1] + "," + marker.geometry.coordinates[0] + '">Directions<h4>')
      )
      .addTo(map);
  });
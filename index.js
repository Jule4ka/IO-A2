function initMap() {
    let postalCodeLayer;
    //generate a map
    const NY = {lat: 40.813 , lng: -73.762};
    const mapDiv = document.getElementById("map")
    let btn1 = document.getElementById("btn1");
    const options = {
      zoom: 10,
      center: NY,
      mapId: "2e0b510a24c1a913",
    }
    const map = new google.maps.Map(mapDiv, options);

    //colour the map upon button click (search for the postal code)
    btn1.addEventListener("click", StyleTheCode  => { 

    // add data-driven styling based on the beginning of postal code (example)
      postalCodeLayer = map.getFeatureLayer(google.maps.FeatureType.POSTAL_CODE);
      postalCodeLayer.style = (placeFeature) =>{
      const displayName = placeFeature.feature.displayName;
      const InputPostalCode = document.getElementById("input1").value;
      //conditional formatting -> search hit is yello, 10** are green, 11*** are blue
      if (displayName == InputPostalCode ){
        return  {strokeColor: 'black', strokeWeight: 1, fillColor: 'yellow', fillOpacity: 0.8}
      }
      else if (displayName.startsWith('10',0)){
        return      {strokeColor: 'black', strokeWeight: 1, fillColor: 'green', fillOpacity: 0.8}}
      else if  (displayName.startsWith('11',0)){
        return      {strokeColor: 'black', strokeWeight: 1, fillColor: 'blue', fillOpacity: 0.8}}
    }

    }
    
    , false);
    ;



    }

  window.initMap = initMap;



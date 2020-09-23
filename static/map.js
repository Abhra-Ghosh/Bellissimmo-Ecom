var platform = new H.service.Platform(
  {
    'apikey': '"------------<YOUR HEREMAPS API KEY>-----------------"'
  });
    
 
 $('#map').html('<div style="width: 300px; height: 300px; z-index:50; position: absolute; right:8%;bottom:2%; box-shadow: 10px 10px 8px #000000;" id="mapContainer"></div>')
  var defaultLayers = platform.createDefaultLayers();
  
  // Instantiate the map using the vecor map with the
  // default style as the base layer:
  var map = new H.Map(
    document.getElementById('mapContainer'),
    defaultLayers.vector.normal.map,
      { 
        zoom: 5,
        center: { lng: 73, lat:19  }
      });
    
    var mapEvents = new H.mapevents.MapEvents(map);
    map.addEventListener('tap', function(evt) {
              
        console.log(evt.type, evt.currentPointer.type);
   });
   var behavior = new H.mapevents.Behavior(mapEvents);

   var service = platform.getSearchService();
   var ui = H.ui.UI.createDefault(map, defaultLayers);
   group = new H.map.Group();



 // Get an object containing the default map layers:
 function getMap(){   
  $('#messageAdd').fadeOut('fast')

  $('#messageAdd').fadeIn('slow')

  $('#deliveryMessageAdd').fadeOut('fast')

  $('#deliveryMessageAdd').fadeIn('slow')

  $('#deliveryDistanceAdd').fadeOut('fast')

  $('#deliveryDistanceAdd').fadeIn('slow')


   $('#map').html('<div style="width: 300px; height: 300px; z-index:50; position: absolute; right:8%;bottom:2%; box-shadow: 10px 10px 8px #000000;" id="mapContainer"></div>')
  var defaultLayers = platform.createDefaultLayers();
  
  // Instantiate the map using the vecor map with the
  // default style as the base layer:
  var map = new H.Map(
    document.getElementById('mapContainer'),
    defaultLayers.vector.normal.map,
      { 
        zoom: 5,
        center: { lng: 73, lat:19  }
      });
    
    var mapEvents = new H.mapevents.MapEvents(map);
    map.addEventListener('tap', function(evt) {
              
        console.log(evt.type, evt.currentPointer.type);
   });
   var behavior = new H.mapevents.Behavior(mapEvents);

   var service = platform.getSearchService();
   var ui = H.ui.UI.createDefault(map, defaultLayers);
   group = new H.map.Group();



  

  // map.removeObject(group)
  
    let adr=$('#adr').val()
    let city=$('#city').val()
    let zip=$('#zip').val()
    let lay=`${adr}, ${city}, ${zip}`
    let place=encodeURIComponent(lay)
    console.log(place);
  
  
  
  const getData = async (url)=>{
    const response = await fetch(url);
    data1 = (await response.json());
    console.log(data1)
  }
  
  const command = async () => {
    const url = `https://geocode.search.hereapi.com/v1/geocode?q=${place}&apiKey=<YOUR-API-KEY>`;
 
    await getData(url);
    const loc=data1.items[0].position;
 
      
     
  const storeLoc={ lat: 12.95693, lng: 77.70041 }
  
   store = new H.map.Marker(storeLoc);
   user = new H.map.Marker(loc);
console.log(store)
  
  const straightLineString = new H.geo.LineString();
  
  
  group.addObjects([store,user]);
  map.addObject(group);
 

  straightLineString.pushPoint(loc);
  straightLineString.pushPoint({lat:store.b.lat,lng:store.b.lng});
  const straightPolyline = new H.map.Polyline(straightLineString,{ style: { lineWidth: 4 }});
  map.addObject(straightPolyline);
  
  map.getViewModel().setLookAtData({
    bounds: group.getBoundingBox(),
    zoom:5
  });
  
  
  var p1 = new H.geo.Point(storeLoc.lat, storeLoc.lng);
  var p2 = new H.geo.Point(loc.lat, loc.lng);
  var dist = p1.distance(p2); 
  console.log(dist/1000+" km")
  d=dist/1000//in KM
  
  if(d<10)
    localStorage.setItem("days","1")
  else if(d>10 && d <100)
    localStorage.setItem("days","2")
  else if(d>100 && d <999)
    localStorage.setItem("days","3")
  else if(d>999 && d <2700)
    localStorage.setItem("days","5")
  else  
    localStorage.setItem("days","8")
  
  if(d<50){
    map.setZoom(10);
  }

  var days = localStorage.getItem("days")
  document.getElementById("deliveryMessageAdd").innerHTML = `Your products will be delivered in ${days} day(s)!`;
  document.getElementById("deliveryDistanceAdd").innerHTML =`The distance between our store and your selected location is approximately : \n \n\n<u>${Math.floor(d)}km<u>`
  
      
  }
  command();                

}





var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Miscellaneous/NYC%20Public%20Wifi%20Locations.csv"
var providers = getColumn(url,1)
var locations = getColumn(url,2)
var accessLocations = getColumn(url,5)
var boroughs = getColumn(url,6)
var neighborhoods = getColumn(url,7)
var indoorLocations = ["Library", "Indoor"]

var uniqueProviders = [];
for(var i=0; i < providers.length; i++){
    // goes through the list of parties
    if(!uniqueProviders.includes(providers[i])){
        // when there is a new one
        uniqueProviders.push(providers[i])
        // it adds it to the list
    }
}
uniqueProviders.sort()
var internetSelect = document.getElementById("internetProvides")
for (var i = 0; i < uniqueProviders.length; i++){
    var el = document.createElement("option")
    el.innerHTML = uniqueProviders[i];
    el.value = uniqueProviders[i];
    internetSelect.appendChild(el);
}


var uniqueNeighborhoods = []
for(var i=0; i < neighborhoods.length; i++){
    // goes through the list of parties
    if(!uniqueNeighborhoods.includes(neighborhoods[i])){
        // when there is a new one
        uniqueNeighborhoods.push(neighborhoods[i])
        // it adds it to the list
    }
}

uniqueNeighborhoods.sort()

var neighborhoodSelect = document.getElementById("Neighborhoods")
for (var i = 0; i < uniqueNeighborhoods.length; i++){
    var el2 = document.createElement("option")
    el2.innerHTML = uniqueNeighborhoods[i];
    el2.value = uniqueNeighborhoods[i];
    neighborhoodSelect.appendChild(el2);
}

function findPublicWIFI(providerInput, neighborhoodInput, locationInput){
    console.log(providerInput)
    console.log(neighborhoodInput)
    console.log(locationInput)
    var perfectMatchs;
    if(locationInput=="Indoor"){
        locationInput=indoorLocations;
        perfectMatchs = []
        for(var i=0; i < providers.length; i++){
        
            if (providers[i] == providerInput && neighborhoods[i] == neighborhoodInput && locationInput.includes(accessLocations[i])){
                perfectMatchs.push(locations[i])
            }
        }
    } else{
        perfectMatchs = []
        var i=0;
        while( i < providers.length){
        
            if (providers[i] == providerInput && neighborhoods[i] == neighborhoodInput && accessLocations[i].includes(locationInput)){
                perfectMatchs.push(locations[i])
            }
            i++
        }
    }

    if (perfectMatchs.length==0){
        console.log("get your own wifi you bum™")
        location.replace("getYourOwn.html");
    }
    else{
        console.log(perfectMatchs)
        sessionStorage.setItem("matches", JSON.stringify(perfectMatchs));
        location.replace("wifi.html");
        
    }
}

function getData(){
    var matches = JSON.parse(sessionStorage.getItem("matches"));

   document.getElementById("matches").innerHTML= matches;

}


function goBack(){
    location.replace("indext.html");
  }
function pullResults(){
    
}

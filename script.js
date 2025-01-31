
var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Miscellaneous/NYC%20Public%20Wifi%20Locations.csv"
var providers = getColumn(url,1)
var locations = getColumn(url,2)
var accessLocations = getColumn(url,5)
var boroughs = getColumn(url,6)
var neighborhoods = getColumn(url,7)


var uniqueProviders = [];
for(var i=0; i < providers.length; i++){
    // goes through the list of parties
    if(!uniqueProviders.includes(providers[i])){
        // when there is a new one
        uniqueProviders.push(providers[i])
        // it adds it to the list
    }
}

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

var neighborhoodSelect = document.getElementById("Neighborhoods")
for (var i = 0; i < uniqueNeighborhoods.length; i++){
    var el2 = document.createElement("option")
    el2.innerHTML = uniqueNeighborhoods[i];
    el2.value = uniqueNeighborhoods[i];
    neighborhoodSelect.appendChild(el2);
}
var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Miscellaneous/NYC%20Public%20Wifi%20Locations.csv"
var providers = getColumn(url,1)
var locations = getColumn(url,2)
var accessLocations = getColumn(url,5)
var boroughs = getColumn(url,6)
var neighborhoods = getColumn(url,7)
// makes the library also an indoor location not just ones including indoor.
var indoorLocations = ["Library", "Indoor"]

var uniqueProviders = [];
for(var i=0; i < providers.length; i++){
    // goes through the list of providers.
    if(!uniqueProviders.includes(providers[i])){
        // when there is a new provider.
        uniqueProviders.push(providers[i])
        // it adds it to the list of unique providers.
    }
}
uniqueProviders.sort()
// puts the list of providers into alphabetical order.

var internetSelect = document.getElementById("internetProvides")
for (var i = 0; i < uniqueProviders.length; i++){
    var el = document.createElement("option")
    el.innerHTML = uniqueProviders[i];
    el.value = uniqueProviders[i];
    internetSelect.appendChild(el);
}
// takes the list of unique internet providers and makes a drop down from them


var uniqueNeighborhoods = []
for(var i=0; i < neighborhoods.length; i++){
    // goes through the list of neighborhoods
    if(!uniqueNeighborhoods.includes(neighborhoods[i])){
        // when there is a new neighborhoods
        uniqueNeighborhoods.push(neighborhoods[i])
        // it adds it to the list unique neighborhoods
    }
}

uniqueNeighborhoods.sort()
// sorts the neighborhoods into alphabetical order

var neighborhoodSelect = document.getElementById("Neighborhoods")
for (var i = 0; i < uniqueNeighborhoods.length; i++){
    var el2 = document.createElement("option")
    el2.innerHTML = uniqueNeighborhoods[i];
    el2.value = uniqueNeighborhoods[i];
    neighborhoodSelect.appendChild(el2);
}
// takes the list of unique neighborhoods and makes a drop down from them




// findPublicWIFI has three peramitaers that are the three inputs in the dropdowns.
// then it takes those 3 inputs and checks to see if their are any matches for them.
// if there is it will take that list of matches and make it into a string,
// it will also switch to another page where it will desplay the resluts.
// if there are no matches found then it brings you to a differnt page to say that
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
// takes the string from sessionStorage and gives it an id 
function getData(){
    var matches = JSON.parse(sessionStorage.getItem("matches"));
    
    document.getElementById("matches").innerHTML = matches.join("<br>")}

// when this button is clicked on a  differnt page you are sent to the main html page
function goBack(){
    location.replace("indext.html");
}

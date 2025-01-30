
var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Miscellaneous/NYC%20Public%20Wifi%20Locations.csv"
var providers = getColumn(url,1)
var locations = getColumn(url,2)
var accessLocations = getColumn(url,5)
var boroughs = getColumn(url,6)

var uniqueProviders = [];
for(var i=0; i < providers.length; i++){
    // goes through the list of parties
    if(!uniqueProviders.includes(providers[i])){
        // when there is a new one
        uniqueProviders.push(providers[i])
        // it adds it to the list
    }
}
console.log(uniqueProviders)

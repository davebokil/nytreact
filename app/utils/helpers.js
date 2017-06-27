// AXIOS FOR CALL TO NYT

// Include the axios package for performing HTTP requests (promise based alternative to request)
import axios from 'axios'

// NYT authentication key
const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

// API Helper Call

export default {


}
//-------------------------------------------------------------------------------------------------------------------------------------------

// Include the axios package for performing HTTP requests (promise based alternative to request)
import axios from 'axios'

// Geocoder API
const geocodeAPI = "35e5548c618555b1a43eb4759d26b260";

// Helper functions for making API Calls
// We export the API helper
export default {

    // This function serves our purpose of running the query to geolocate.
    runQuery(location) {

        console.log(location);

        // Figure out the geolocation
        // const queryURL = "http://api.opencagedata.com/geocode/v1/json?query=" + location + "&pretty=1&key=" + geocodeAPI;
        const queryURL = `http://api.opencagedata.com/geocode/v1/json?query=${location}&pretty=1&key=${geocodeAPI} `;


        return axios.get(queryURL).then(function (response) {
            // If get get a result, return that result's formatted address property
            if (response.data.results[0]) {
                return response.data.results[0].formatted;
            }
            // If we don't get any results, return an empty string
            return "";
        });
    },

    // This function hits our own server to retrieve the record of query results
    getHistory() {
        return axios.get("/api");
    },

    // This function posts new searches to our database.
    postHistory(location) {
        return axios.post("/api", {location: location});
    }
};








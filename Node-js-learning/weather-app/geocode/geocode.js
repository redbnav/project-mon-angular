const request = require('request')

var geocodeAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);

    request({
        // url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia',
        url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    },(error, response, body) => {
        if (error) {
            callback('Unable to connect to google service.')
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find location that address.')
        } else if (body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        } 
    });

}

module.exports = {
    geocodeAddress
};

// f13235c0ba31197a49df5ead788d913b
// api request https://api.darksky.net/forecast/f13235c0ba31197a49df5ead788d913b/37.8267,-122.4233
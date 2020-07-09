var appdconf = require('./config/appdconf'); 
var https = require('https');
var ips = require('./api/listIPs');
var appHierarchy = require('./api/hierarchy');

var options = {
    host: appdconf.account + appdconf.url,
    port: appdconf.port,
    path: appdconf.ep.ma,
    // authentication headers
    headers: {
        'Authorization': 'Basic ' + Buffer.from(appdconf.user + '@' + appdconf.account + ':' + appdconf.pass).toString('base64')
    }   
};

// Makes actual API call to AppD
request = https.get(options, function(res){
    var body = [];
    res.on('data', function(data) {
        body += data;
    });
    res.on('end', function() {

        // REVISION:
        // Section needs to check for what data is requested
        // and call appropriate API
        // Should come from URI. 

        // Call to get list of IP addresses
        ips(body);

        
        //appHierarchy(body);

    })

    res.on('error', function(e) {
        console.log("Got error: " + e.message);
    });
});

//  module.exports = request;


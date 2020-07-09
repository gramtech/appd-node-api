
var ips = (function (body) {

    const myData = JSON.parse(body);
    var myKey = "hostId";

    console.log( 'ServerName|HostId|IP')
    for (var i = 0, len = myData.length; i < len; i++) {
        // if (myData[i].name == 'UNKNOWN') {
            // console.log(myData[i][myKey]);
            
            let mk = myData[i][myKey];
            let marr = myData[i].networkInterfaces;

            if ( marr.length < 1 || marr === undefined ) {
                console.log( myData[i]['name'] + '|' + mk + '|No Network details');
            } else {
                console.log( myData[i]['name'] + '|' + mk + '|' + marr[0].ip4Address);
            }

            // console.log(myData[2].networkInterfaces[0].ip4Address) 
    }
})

module.exports = ips;
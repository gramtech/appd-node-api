
var appHierarchy = (function (body) {

    const myData = JSON.parse(body);
    var myKey = "hostId";

    console.log( 'ServerName|HostId|hierarchy')
    for (var i = 0, len = myData.length; i < len; i++) {
        // if (myData[i].name == 'UNKNOWN') {
            // console.log(myData[i][myKey]);
            
            let mk = myData[i][myKey];
            let heir = myData[i].hierarchy;

            if ( heir.length < 1 || heir === undefined ) {
                console.log( myData[i]['name'] + '|' + mk + '|No Heirarchy');
            } else {
                console.log( myData[i]['name'] + '|' + mk + '|' + heir);
            }

            // console.log(myData[2].networkInterfaces[0].ip4Address) 
    }
})

module.exports = appHierarchy;
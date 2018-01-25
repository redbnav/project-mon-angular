const csv = require("csvtojson");

var PreDec = function () {
    const csvFilePath = "C:\\Users\\nband1\\Downloads\\nodeapp-new\\dec.txt";
    var data = [];
    csv({delimiter: "\t"}).fromFile(csvFilePath).on("json", (jsonObj) => {			
        data.push(jsonObj);			
    }).on("done", (error) => {
        data = data.slice(0, 100);
        console.log(JSON.stringify(data));
        return data;
    });
    //return data;
};

module.exports.PreDec = PreDec;
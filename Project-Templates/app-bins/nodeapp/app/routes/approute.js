const csv = require("csvtojson");
const precdec = require("../models/PrecDec")


module.exports = function (app, db){
	app.post("/notes", (req, res) => {
		console.log(req.body);
		const decisionfile = "C:\\Users\\nband1\\Downloads\\nodeapp-new\\dec.txt";
		const predicitionfile = "C:\\Users\\nband1\\Downloads\\nodeapp-new\\sta.txt";

		var decisiondata = [];
		var predicitiondata = []

		csv({delimiter: "\t"}).fromFile(decisionfile).on("json", (jsonObj) => {			
			decisiondata.push(jsonObj);			
		}).on("done", (error) => {
			var finaldata = [];
			decisiondata = decisiondata.slice(0, 100);
					
			csv({delimiter: "\t"}).fromFile(predicitionfile).on("json", (jsonObj) => {			
				predicitiondata.push(jsonObj);			
			}).on("done", (error) => {
				predicitiondata = predicitiondata.slice(0, 100);
				if(predicitiondata.length > 0){
					decisiondata.forEach(function(descision) {
						var result = predicitiondata.filter(function(predicition) {
							return descision[req.body['searchfield']] === predicition[req.body['searchfield']];
						});
						if(result[0] !== undefined){
							for (var key in result[0]) {
								descision[key] = result[0][key];
							}
							finaldata.push(descision);
						}
					});
				}
				var fields = finaldata[0].keys;
				console.log("array of fields = "+fields);
				res.render("pages/index", {sampledata: finaldata, fields: fields});
			});
			//res.render("pages/index", {sampledata: decisiondata});
		});
	});

	app.get("/notes", (req, res) => {
		
		const decisionfile = "C:\\Users\\nband1\\Downloads\\nodeapp-new\\dec.txt";
		const predicitionfile = "C:\\Users\\nband1\\Downloads\\nodeapp-new\\sta.txt";

		var decisiondata = [];
		var predicitiondata = []

		csv({delimiter: "\t"}).fromFile(decisionfile).on("json", (jsonObj) => {			
			decisiondata.push(jsonObj);			
		}).on("done", (error) => {

			/**
			 * code for pivot table
			 */
			console.log(decisiondata.length);
			var noofrows = Math.ceil(decisiondata.length * (5 / 100));
			var pivotData = {};
			var count = 1;
			console.log("no of rows = " + noofrows);
			for (var j = 1; j <= 20; j++) {
				var bin = "Bin" + j;
				var addtobin = decisiondata.slice(count, noofrows + count);
				pivotData[bin] = {};
				for (var k = 0; k < addtobin.length; k++) {

					if(addtobin[k]["FINAL"]){
						if(addtobin[k]["FINAL"] in pivotData[bin]) {
							pivotData[bin][addtobin[k]["FINAL"]] += 1; 		
						} else {
							pivotData[bin][addtobin[k]["FINAL"]] = 1; 		
						}
					}
				}
				count = count + noofrows;
			} 	
			var pivotFields = "";
			var checkmaxlength = 0;
			for (key in pivotData) {
				var keys = Object.keys(pivotData[key]);
				if(keys.length > checkmaxlength){
					checkmaxlength = keys.length;
					pivotFields = keys;
				}
			}
			console.log(pivotFields);
			decisiondata = decisiondata.slice(0, 100);
			var finaldata = [];
			csv({delimiter: "\t"}).fromFile(predicitionfile).on("json", (jsonObj) => {			
				predicitiondata.push(jsonObj);			
			}).on("done", (error) => {
				predicitiondata = predicitiondata.slice(0, 100);
				if(predicitiondata.length > 0){
					decisiondata.forEach(function(descision) {
						var result = predicitiondata.filter(function(predicition) {
							return descision['GERMPLASM_ID'] === predicition['GPID'];
						});
						
						if(result[0] !== undefined){
							for (var key in result[0]) {
								descision[key] = result[0][key];
							}
							finaldata.push(descision);
						}
					});
				}
				if(finaldata.length > 0){
					var fields = Object.keys(finaldata[0]);
					/* for(var i in fields){
						console.log(i);
					} */
					pivotFields.unshift("Bin");
					res.render("pages/index", {sampledata: finaldata, fields: fields, pivotFields: pivotFields, pivotData: pivotData});	
				}
				
			});
		});
		
		/*
		const data = precdec.PreDec();
		console.log(data);
		res.render("pages/index", {sampledata: data});
		*/
	});
};

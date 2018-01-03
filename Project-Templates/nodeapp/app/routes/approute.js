const csv = require("csvtojson");
const pagination = require('pagination')

module.exports = function (app, db){
	app.post("/notes", (req, res) => {
		console.log(req.body);
		const csvFilePath = "C:\\Users\\nband1\\Downloads\\nodeapp-new\\dec.txt";
		var data = [];
		csv({delimiter: "\t"}).fromFile(csvFilePath).on("json", (jsonObj) => {
			if(jsonObj[req.body.searchfield] == req.body.search){
				data.push(jsonObj);	
			}
		}).on("done", (error) => {
			//console.log(JSON.stringify(data));
			data = data.slice(0, 20)
			res.render("pages/index", {sampledata: data});
		});
	});

	app.get("/notes", (req, res) => {
		const csvFilePath = "C:\\Users\\nband1\\Downloads\\nodeapp-new\\dec.txt";
		var data = [];
		csv({delimiter: "\t"}).fromFile(csvFilePath).on("json", (jsonObj) => {			
			data.push(jsonObj);			
		}).on("done", (error) => {
			console.log(JSON.stringify(data));
			var boostrapPaginator = new pagination.TemplatePaginator({
				prelink:'/', current: 3, rowsPerPage: 200,
				totalResult: data.length, slashSeparator: true,
				template: function(result) {
					var i, len, prelink;
					var html = '<div><ul class="pagination">';
					if(result.pageCount < 2) {
						html += '</ul></div>';
						return html;
					}
					prelink = this.preparePreLink(result.prelink);
					if(result.previous) {
						html += '<li><a href="' + prelink + result.previous + '">' + this.options.translator('PREVIOUS') + '</a></li>';
					}
					if(result.range.length) {
						for( i = 0, len = result.range.length; i < len; i++) {
							if(result.range[i] === result.current) {
								html += '<li class="active"><a href="' + prelink + result.range[i] + '">' + result.range[i] + '</a></li>';
							} else {
								html += '<li><a href="' + prelink + result.range[i] + '">' + result.range[i] + '</a></li>';
							}
						}
					}
					if(result.next) {
						html += '<li><a href="' + prelink + result.next + '" class="paginator-next">' + this.options.translator('NEXT') + '</a></li>';
					}
					html += '</ul></div>';
					return html;
				}
			});
			data = data.slice(0, 20)
			res.render("pages/index", {sampledata: data, pagination: boostrapPaginator});
		});
		
	});
};

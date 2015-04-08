var fs    = require('fs'); 
var http  = require('http');
//var sys   = require('sys');
//var jsdom = require('./node_modules/jsdom/lib/jsdom');

var http = require('http');
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'application/json'});
	//response.write(fileData);
	dataService.init(res, "./source_data", 1);  
  	res.end('{"abc":"def"}\n');

}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

// ##### DATA SERVICE #####
dataService={
	debugFlag :0,
	folderPath:"",
	result    :"",
	init :function( res, folderPath, debugFlag ){
		this.res = res;
		this.debugFlag = debugFlag;
		this.folderPath = folderPath;
		if(this.debugFlag == 1 ) console.log(" Initialized..");
		return this.generateResponse();
	},
	generateResponse:function(){
		if(this.debugFlag == 1 ) console.log(" Generate Response..");
		try{
			stats = fs.lstatSync(this.folderPath);
			console.log( stats );
			console.log("Helllo");
			if(stats.isDirectory())
			{
				this.successResponse(this);
			}
		}catch(e){
		}
	}
}; // End DataService.


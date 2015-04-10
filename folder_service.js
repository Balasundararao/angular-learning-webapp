var fs    = require('fs'); 
var http  = require('http');
//var sys   = require('sys');
//var jsdom = require('./node_modules/jsdom/lib/jsdom');

var http = require('http');
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'application/json'});
	res.write(dataService.init(res, "./source_data", 1) + '');
  	res.end();

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
		if(this.debugFlag == 1 ) console.log("Fn -- Generate Response..");
		try{
			stats = fs.lstatSync(this.folderPath);
			if(stats.isDirectory())
			{
				return this.successResponse();
			}
		}catch(e){
			return this.failureResponse(e);
		}
	},
	// to return the failure response
	failureResponse:function( msg ){
		if(this.debugFlag==1) console.log("Fn -- failureResponse");
		var errorJsonResponse = "";	
		    errorJsonResponse = "{\"folderservice\":{\"resultCode\":1,\"resultMsg\":\"Failure"+msg+"\"}}";
		return errorJsonResponse;
	},
	successResponse:function(){
		if(this.debugFlag==1) console.log("Fn -- successResponse");
		var successJsonResponse="";
		try{
			successJsonResponse = "{\"folderservice\":{\"resultCode\":0,\"resultMsg\":\"success\"";
			filenames = fs.readdirSync(this.folderPath);
			filenames.sort();
			var tabs_obj = [];
			var tabs=[];
			successJsonResponse += ",\"tabs\": [ ";

			//  Reading the Menu(top) Level Folders  
			for( i = 0; i < filenames.length; i++) {
				if(fs.lstatSync(this.folderPath+'/'+filenames[i]).isDirectory()){

					// if its a diretory read the second level folder...	
					successJsonResponse += "{\"menu\":";
					successJsonResponse += "\"" +filenames[i] + "\"";		
					successJsonResponse += ",\"submenus\": [";		
					var seclevel_filenames = fs.readdirSync(this.folderPath+'/'+filenames[i]);
					seclevel_filenames.sort();

					var tmp_obj = "";
					for (var j = 0; j < seclevel_filenames.length; j++){
					 	tmp_obj += "{"+ "\"linkText \": \""+ seclevel_filenames[j]+"\"} ,";
						//console.log( "{"+ "\"linkText \": \""+ seclevel_filenames[j]+"\"} ,");
					}
					tmp_obj = tmp_obj.substring(0, tmp_obj.length - 1);
					successJsonResponse += tmp_obj;
					successJsonResponse += "]";		

					successJsonResponse += "},";
					//if( i!=filenames.length-1) {  successJsonResponse+=","; }
				}
			} // end for 

			successJsonResponse = successJsonResponse.substring(0, successJsonResponse.length - 1);
			successJsonResponse += "]";
			successJsonResponse += "}}";
			return successJsonResponse;
		}catch(err){
			console.log( err);	
			//this.failureResponse(err);
		}
	},   // Reading the sub menus( dropdown) Level..
	arrToObj:function(arr){
		if(this.debugFlag) console.log("Fn -- arrToObj ");
		var rv = {};
  		for (var i = 0; i < arr.length; ++i)
    		rv[i] = arr[i];
    	console.log(rv);
  		return rv;
	}


}; // End DataService.


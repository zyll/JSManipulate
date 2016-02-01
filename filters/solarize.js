import FilterUtils from "./filterutils"
/**
 * Produces a solarization effect on the image.  
 */
export default function SolarizeFilter(){
	this.name = "Solarize";
	this.defaultValues = {
	};
	this.valueRanges = {
	};
	var filterUtils = new FilterUtils();
	this.filter = function(input,values){
		var width = input.width, height = input.height;
	  	var inputData = input.data;
  		var table = [];
  		for(var i = 0; i < 256; i++){
  			var val = (i/255 > 0.5) ? 2*(i/255-0.5) : 2*(0.5-i/255)
  			table[i] = parseInt(255 * val);
  		}
	  	filterUtils.tableFilter(inputData, table, width, height);
	}
}

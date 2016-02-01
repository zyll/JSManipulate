import FilterUtils from "./filterutils"
/**
 * Posterizes the image, i.e. restricts the color values to a set amount of levels.
 */
export default function PosterizeFilter(){
	this.name = "Posterize";
	this.defaultValues = {
		levels : 6
	};
	this.valueRanges = {
		levels : {min:2, max:30 }
	};
	var filterUtils = new FilterUtils();
	this.filter = function(input,values){
		var width = input.width, height = input.height;
	  	var inputData = input.data;
	  	if(values === undefined){ values = this.defaultValues; }
	  	var levels = (values.levels === undefined) ? this.defaultValues.levels : parseInt(values.levels);
	  	if(levels <= 1){
  			return;
  		}
  		var table = [];
  		for(var i = 0; i < 256; i++){
  			table[i] = parseInt(255 * parseInt(i*levels/256) / (levels-1));
  		}
	    filterUtils.tableFilter(inputData,table,width,height);
	}
}

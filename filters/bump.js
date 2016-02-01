import FilterUtils from "./filterutils"
/**
 * Embosses the edges of the image.
 * This filter takes no parameters but can be applied several times for
 * further effect.
 */
export default function BumpFilter(){
	this.name = "Bump";
	this.defaultValues = {
	};
	this.valueRanges = {
	};
	var filterUtils = new FilterUtils();
	this.filter = function(input,values){
		var width = input.width, height = input.height;
	  	var inputData = input.data;
	  	var matrix = [-1,-1, 0,
	  				  -1, 1, 1,
	  				   0, 1, 1];
	  	filterUtils.convolveFilter(inputData,matrix,width,height);
	}
}

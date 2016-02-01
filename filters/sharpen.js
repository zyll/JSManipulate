import FilterUtils from "./filterutils"
/**
 * Sharpens the image slightly. For increased effect, apply the filter multiple times.
 */
export default function SharpenFilter(){
	this.name = "Sharpen";
	this.defaultValues = {
	};
	this.valueRanges = {
	};
	var filterUtils = new FilterUtils();
	this.filter = function(input,values){
		var width = input.width, height = input.height;
	  	var inputData = input.data;
	  	var matrix = [ 0,-0.2, 0,
	  				  -0.2,1.8,-0.2,
	  				   0, -0.2, 0];
	  	filterUtils.convolveFilter(inputData,matrix,width,height);
	}
}

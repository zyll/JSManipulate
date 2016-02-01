import FilterUtils from "./filterutils"
/**
 * Adjusts the contrast of the image.
 */
export default function ContrastFilter(){
	this.name = "Contrast";
	this.defaultValues = {
		amount : 1.0
	};
	this.valueRanges = {
		amount : {min:0.0, max:2.0}
	};
	var filterUtils = new FilterUtils();
	this.filter = function(input,values){
		var width = input.width, height = input.height;
	  	var inputData = input.data;
	  	if(values === undefined){ values = this.defaultValues; }
	  	var amount = (values.amount === undefined) ? this.defaultValues.amount : values.amount;
		if(amount < 0){
			amount = 0.0;
		}
		var table = [];
		
		for(var i = 0; i < 256; i++){
			table[i] = parseInt(255 * (((i/255)-0.5)*amount+0.5));
		}
	    filterUtils.tableFilter(inputData,table,width,height);
	}
}

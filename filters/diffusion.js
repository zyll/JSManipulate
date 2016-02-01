import FilterUtils from "./filterutils"
/**
 * Diffuses the image creating a frosted glass effect.
 */
export default function DiffusionFilter(){
	this.name = "Diffusion";
	this.defaultValues = {
		scale: 4
	}; 
	this.valueRanges = {
		scale: {min: 1, max: 100}
	};
	var filterUtils = new FilterUtils();
	this.filter = function (input, values){
	  	var width = input.width, height = input.height;
	 	var inputData = input.data;
	 	if(values === undefined){ values = this.defaultValues; }
	  	var scale = (values.scale === undefined) ? this.defaultValues.scale : values.scale; 
	  	var out = [];
	  	var outputData = [];
	  	var sinTable = [];
	  	var cosTable = [];
	  	for(var i = 0; i < 256; i++){
	  		var angle = Math.PI*2*i/256;
	  		sinTable[i] = scale*Math.sin(angle);
	  		cosTable[i] = scale*Math.cos(angle);
	  	}
	  	transInverse = function (x,y,out){
			var angle = parseInt(Math.random() * 255);
			var distance = Math.random();
			out[0] = x + distance * sinTable[angle];
			out[1] = y + distance * cosTable[angle];
	  	}
	  	filterUtils.transformFilter(inputData,transInverse,width,height);
  	}
}

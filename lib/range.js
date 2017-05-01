var ranges = new Array;

module.exports = function ( x, i , arr){
	if(arr[i+1] == (parseInt(x))+1 ){
		ranges.push(x);

	} else if (arr[i+1] != (parseInt(x))+1 ){
		ranges.push(x);
		if(ranges.length == 1){
			console.log(ranges.toString());
		} else if (ranges.length > 1){
			console.log(ranges[0].toString() + '-' + ranges.slice(-1)[0].toString() );
		}
		ranges = [];
	}
	return ;
}


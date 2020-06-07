var genPalindroms = function(n) {
	var halfStr = "1";

	var pals = [1,2,3,4,5,6,7,8,9];

	for(var digits = 2; digits < 9; digits++) {
		for(var i = Math.pow(10,-1+Math.floor(digits/2)); i < Math.pow(10,Math.floor(digits/2)); i++) {
			if(digits%2) {
				for(var center = 0; center < 10; center++) {
					var centerStr = center.toString();
					var pal = parseInt(i.toString() + centerStr + i.toString().split("").reverse().join("") ,10);
					pals.push(pal);
				}
			}else{
				var pal = parseInt(i.toString() + i.toString().split("").reverse().join("") ,10);
				pals.push(pal);
			}
		}
	}
	return pals;
}

var isConsSqSum = function(n) {
	var max = 1+Math.ceil(Math.sqrt(n));
	for(var start = 1; start < max; start++) {
		var sum = 0;
		for(var j = start; j < max; j++) {
			sum += j*j;
			if(sum == n && j > start) {
				return true;
			}

			if(sum > n) {
				break;
			}
		}	
	}

	return false;
};

var pals = genPalindroms();
var sum = 0;
for(var i = 0; i < pals.length; i++) {
	var n = pals[i];

	if(isConsSqSum(n)) {
		sum += n;
		console.log(n);
	}
}

console.log(sum);
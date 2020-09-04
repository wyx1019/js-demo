function keisan(){
	var inputX = document.getElementById("x").value;
	var inputN = document.getElementById("n").value;
	var flg = 0;
	var ans = 1;

	if( inputN < 0){
		inputN = -inputN
		flg = 1;
	}	
	
	for (let i = 0; i < inputN; i++ )
		ans *= inputX;
	
	if (flg == 1){
		ans = 1 / ans;
	}
	document.getElementById("show").innerHTML= ans;
};
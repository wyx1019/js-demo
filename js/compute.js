function keisan1(){
	var row= document.getElementById("row").value;
	var col, ans;
	for(col = 1; col < 10; col++){
		ans = row * col;
		document.write( row +"x" + col + "=" + ans +"<br/>");
	}
};

function keisan2(){
	var row, col;
	for (row =1; row <=9; row++){
		for(col = row; col <=9; col++){
			document.write( row +"x" + col + "=" + row * col +"</br>")
		}
	}
}

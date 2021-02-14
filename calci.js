

function display(val){
	document.getElementById('final_output').value += val;
}

function solve(){
    var expr=document.getElementById('final_output').value;
	var soln=eval(expr);
	document.getElementById('final_output').value=soln;
}
			
function c(){
	document.getElementById('final_output').value="";
}
			
function ce(){
	var txt=document.getElementById('final_output').value;
	txt=txt.slice(0,-1);
	document.getElementById('final_output').value=txt;
}
			
function percent() {
	var num=document.getElementById('final_output').value
	num=eval(num/100);
	document.getElementById('final_output').value=num;
}
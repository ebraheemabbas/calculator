
	 var resshowen = "0";

function add_numbera(a) {

	if(resshowen.localeCompare("1")==0){
	clearinput();
	}
		resshowen="0";
  document.getElementById("firstname").value +=a;
}
function op(a) {
	resshowen="0";
	var operationplus="+";
	var operationminus="-";
	var operationmul="*";
	var operationdiv="/";
	var val=document.getElementById("firstname").value;
	var lastchar=val[val.length-1];
	if(lastchar.localeCompare(a)!=0){
		var Minbool=lastchar.localeCompare(operationminus);
		var Plusbool=lastchar.localeCompare(operationplus);
		var Mulbool=lastchar.localeCompare(operationmul);
		var Divbool=lastchar.localeCompare(operationdiv);
		
		if(Minbool==0||Plusbool==0||Mulbool==0||Divbool==0){
			if(a.localeCompare(operationminus)==0&&Minbool!=0){
				  document.getElementById("firstname").value +=a;
			}else{
			if(val.length>2){
			var seclastchar=val[val.length-2];
		var Minbool2=seclastchar.localeCompare(operationminus);
		var Plusbool2=seclastchar.localeCompare(operationplus);
		var Mulbool2=seclastchar.localeCompare(operationmul);
		var Divbool2=seclastchar.localeCompare(operationdiv);
				if(Minbool==0&&(Plusbool2==0||Mulbool2==0||Divbool2==0)){
					return;
				}
				
				}
				val = val.substring(0,val.length-1)+a;
					  document.getElementById("firstname").value =val;
					  }

		}else{
	  document.getElementById("firstname").value +=a;
	}
	}
}
function clearinput() {
	resshowen="0";
  document.getElementById("firstname").value= '';
}
function res1() {
var r=document.getElementById("firstname").value;
  document.getElementById("firstname").value= eval(r);
  resshowen="1"
}



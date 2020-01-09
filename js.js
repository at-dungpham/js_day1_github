var a, b, c, str;

function cau_1(a, b) {
  if (a !== b) {
    return a + b;
  }
  return (a+b) * 3;
}

function cau_2(a) {
  if (a <= 19) {
    return 19 - a;
  }
  return (a - 19) * 3;
}

/*function cau_3_cach1(str){
	for (var i=0;i<=9;i++){
		var repl=parseInt(str.replace("*",i));
		if (repl%3 ==0){
			console.log(repl);
		}
	}
}*/

function cau_3(str) {
  var sum = 0,
    kq = "";
  var repl = str.replace("*", "0");
  for (var i = 0; i < str.length; i++) {
    var repl1 = parseInt(repl.charAt(i));
    sum += repl1;
  }
  for (var i = 0; i <= 9; i++) {
    if ((sum + i) % 3 === 0) {
      kq += str.replace("*", i) + ",";
    }
  }
  return kq.replace(/,\s*$/, "");
}

function cau_4(str) {
  var ar = "";
  var array = cau_3(str).split(",");
  var c = array.length;
  for (var i = 0; i < c; i++) {
    if (array[i] % 2 === 0) {
      ar += array[i] + ",";
    }
  }
  return ar.replace(/,\s*$/, "");
}

var args = arguments[0] || {};
var fid=args.fid||{};
// $.win.title=fid;

$.win.addEventListener("close",function(){
	$.destroy();
}
);

function btnlogin(e){
	var Username=$.Username.value;
	var Password=$.Password.value;
	var xhr=Ti.Network.createHTTPClient();
	xhr.onload=function(e){
		console.log("this.responseText");
		alert("login successfully!!");
		if(Alloy.Globals.logs.title="login")
		 Alloy.Globals.logs.title="logout";
		else 
		 Alloy.Globals.logs.title="login";
		 
		$.win.close();
		
	};
	xhr.open('POST','http://158.182.108.124:1337/user/login');
	xhr.send({
		"username":Username,
		"password":Password
	});
	
};
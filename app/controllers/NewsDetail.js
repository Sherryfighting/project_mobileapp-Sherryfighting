var args = arguments[0] || {};
var fid = args.fid || {};

$.win.title = fid;

Alloy.Collections.webNews.fetch();
Alloy.Collections.Venue.fetch();
Alloy.Collections.events.fetch();
Alloy.Collections.registeredevent.fetch();
$.win.addEventListener("close",function(){
	$.destroy();
}
);

var REG=Alloy.Collections.registeredevent.where({id:fid});
if(REG.length>=1){
	$.registration.title="unreg";
}
else{
	$.registration.title="reg";
}


function tableClick2(e){
if(Alloy.Globals.logs.title=="login in"){
		var eventListController=Alloy.createController('login');
		Alloy.Globals.tabgroup.getActiveTab().open(eventListController.getView());
	}
	else{
		if(REG.length>=1){
			$.dialog.title="Reminding";
			$.dialog.message="Are you sure to unregister this event?";
			$.dialog.show();
		}
		else{
			$.dialog.title="Reminding";
			$.dialog.message="Are you sure to register this event?";
			$.dialog.show();	
		}
	}
	
function filterFunction(collection) {
	return collection.where({
		 id : fid
	});
}

function transformFunction(model) {
	var transform = model.toJSON();

	// if (transform.thumbnail == null)
		// transform.thumbnail = "";
	return transform;
}

//$.win.addEventListener("close", function() {
//	$.destroy();
//})


function tableClick4(e){
var eventListController=Alloy.createController('AddressDetail',{VenueID:e.source.target});
Alloy.Globals.tabgroup.getActiveTab().open(eventListController.getView());
}

function sureClick(e){
if(REG.length>=1){
	if(e.index==0) alert('unregister cancel');
	else{
		var xhr=Ti.Network.createHTTPClient();
		xhr.onload=function(e){
			console.log(this.responseText);
		
		};
		xhr.open('GET','http://158.182.108.124:1337/user/removeRegisteredEvent/'+fid);
		xhr.send({
			"id":fid
			
		});
		alert("Event Unregistered");
	}
}
else{
	if(e.index==0) alert('register cancel');
	else{
		var xhr=Ti.Network.createHTTPClient({
			onload:function(e){
				console.log("here");
				alert("here");
			}			
		});
		xhr.open('GET','http://158.182.108.124:1337/user/addRegisteredEvent/'+fid);
		
}
};

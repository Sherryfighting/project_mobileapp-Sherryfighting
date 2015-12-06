var args = arguments[0] || {};
var fid = args.fid || {};

$.win.title = fid;

Alloy.Collections.webNews.fetch();
$.win.addEventListener("close",function(){
	$.destroy();
}
);

//function filterOrganizer(collection) {
	//return collection.where({
//		organizer:input
//	});
//}

function filterFunction(collection){	
return collection.where({organizer:fid});
};

function tableClick(e){
var eventListController=Alloy.createController('NewsDetail',{fid:e.source.fid});
Alloy.Globals.Organizer.open(eventListController.getView());
};
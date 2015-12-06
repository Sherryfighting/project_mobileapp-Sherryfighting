var args = arguments[0] || {};
var fid = args.fid||{};

$.win.title=fid;

Alloy.Collections.webNews.fetch();

$.win.addEventListener("close",function(){
	$.destroy();
}
);

function filterFunction(collection){
return collection.where({venue:fid});

}
function tableClick6(e){
var eventListController=Alloy.createController('NewsDetail',{fid:e.source.fid});
Alloy.Globals.tabgroup.getActiveTab().open(eventListController.getView());
};
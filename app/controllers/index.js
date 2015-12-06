$.index.open();
Alloy.Collections.webNews.fetch();
Alloy.Collections.Venue.fetch();

Alloy.Globals.tabgroup = $.index;

Alloy.Globals.News= $.NewsTab;
Alloy.Globals.Organizer= $.OrganizerTab;
Alloy.Globals.Facilities= $.FacilitiesTab;
Alloy.Globals.Map= $.MapTab;
Alloy.Globals.AboutUs= $.AboutUsTab;
Alloy.Globals.logs = $.logs;

var lastCampusID;

function btClick(e) {
	$.mapView.region = {
		latitude : 22.339468,
		longitude : 114.181879,
		latitudeDelta : 0.001,
		longitudeDelta : 0.001
	};
};

//function tableClick(e) {
//console.log("Table Clicked"); };

function tableClick1(e) {
	var NewsDetailController = Alloy.createController('NewsDetail', {
		fid : e.row.fid
	});
	Alloy.Globals.News.open(NewsDetailController.getView());
}

function tableClick3(e) {
	var OrganizersdetailController = Alloy.createController('Organizersdetail', {
		fid : e.row.fid
	});
	Alloy.Globals.Organizer.open(OrganizersdetailController.getView());
}

function tableClick5(e) {
	var eventListController = Alloy.createController('VenueDetail', {
		fid : e.row.fid
	});
	Alloy.Globals.Facilities.open(eventListController.getView());
}

function tableClick7(e){
if(Alloy.Globals.logs=="logout"){
		var xhr=Ti.Network.createHTTPClient();
		xhr.onload=function(e){};
		xhr.open('POST','http://158.182.108.124:1337/user/logout');
		xhr.send({});
		Alloy.Globals.logs.title="login";
	}
	else{
		var eventListController=Alloy.createController('login',{fid:e.row.fid});
		Alloy.Globals.AboutUs.open(eventListController.getView());
	}
};
function tableClick8(e){
var eventListController=Alloy.createController('eventList',{fid:e.row.fid});
Alloy.Globals.AboutUs.open(eventListController.getView());
};

function transformFunction(model){
var transform=model.toJSON();
transform.title=transform.VenueID;
transform.subtitle=transform.VenueName;
transform.rightButton= Titanium.UI.iPhone.SystemButton.DISCLOSURE;
return transform;
};

function transformFunction1(model){
var transform=model.toJSON();

if(lastCampusID==transform.CampusID)
	transform.thumbnail="";
else transform.thumbnail=transform.CampusID;

lastCampusID=transform.CampusID;
return transform;
};

function mapClicked(e){
	if(e.clicksource=='rightButton')
	{
		var eventListController=Alloy.createController('venuedetail',{fid:e.annotation.title});
		Alloy.Globals.Map.open(eventListController.getView());
	}
};

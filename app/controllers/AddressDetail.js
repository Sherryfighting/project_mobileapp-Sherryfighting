var args = arguments[0] || {};
var fid=args.VenueID||{};

Alloy.Collections.Venue.fetch();

$.win.addEventListener("close",function(){
	$.destroy();
	}
);
function filterFunction(collection)
{	
	return collection.where({VenueID:fid});
}
function transformFunction(model){
	var transform=model.toJSON();
	transform.title=transform.VenueID;
	transform.subtitle=transform.VenueName;
	return transform;
};
exports.definition = {
	config : {
		"columns" : {
			"name":"text",
			"venue":"text",
			//"date":"2015-10-02",
			//"startTime":"19:30",
			//"endTime":"23:30",
			"organizer":"text",
			"quota":"text",
			"image":"text",
			"id" : "INTEGER PRIMARY KEY",
			"shortDes":"text",
			"fullDes":"text",
			//"title" : "text",
			//"modified" : "text",
			//"thumbnail" : "text"
		},
		"URL" : "http://thirdsail.herokuapp.com/person/json",

		"debug" : 1, //debug mode enabled

		"adapter" : {
			"type" : "sqlrest",
			"collection_name" : "webNews",
			"idAttribute" : "id",
			// optimise the amount of data transfer from remote server to app
			"addModifedToUrl" : true,
			"lastModifiedColumn" : "modified"
		},
		// "parentNode" : "posts"
	},

	extendModel : function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},

	extendCollection : function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here

			// For Backbone v1.1.2, uncomment the following to override the
			// fetch method to account for a breaking change in Backbone.
			//fetch: function(options) {
			//options = options ? _.clone(options) : {};
			//options.reset = true;
			//return Backbone.Collection.prototype.fetch.call(this, options);
			//}
		});

		return Collection;
	}
};


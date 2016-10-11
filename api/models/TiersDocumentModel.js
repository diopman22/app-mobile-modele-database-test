var db = require('./db.js').db;
var Tiers = require('./TiersModel.js').Tiers;
var Document = require('./DocumentModel.js').Document;

var TiersDocument = db.define('tiersDocument',{
	type: String
});

TiersDocument.hasOne('tiers',Tiers,{reverse:"dossier"});
TiersDocument.hasOne('document',Document,{reverse:"document"});

TiersDocument.sync(function (err) {
    !err && console.log("done!");
});

exports.TiersDocument = TiersDocument;
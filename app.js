// dependencies
var _ = require('lomath')
var fs = require('fs')
var tinder = require('tinderjs');
var client = new tinder.TinderClient();

// Ingredients you'll need, and because FB is jackass there is currently no way to obtain them programmatically:
// 1. your FB id: Yes FB is jackass, even getting your user id is hard
// go to this page, and paste in the link to your profile url
// http://findmyfbid.com

// 2. Tinder access token from fb: 
// Get the user to sign in to fb, and go to this page:
// https://www.facebook.com/dialog/oauth?client_id=464891386855067&redirect_uri=https://www.facebook.com/connect/login_success.html&scope=basic_info,email,public_profile,user_about_me,user_activities,user_birthday,user_education_history,user_friends,user_interests,user_likes,user_location,user_photos,user_relationship_details&response_type=token
// Then quicky copy the first redirected link and paste it below
// 

// set env vars
var env = require('node-env-file');
env(__dirname + '/env');

// FIELDS
var FBUserID = process.env.FBUserID
var FBRedirectUrl = process.env.FBRedirectUrl

// console.log(FBUserID, FBRedirectUrl)

// token extractor for FBRedirectUrl
function extractToken(url) {
	return url.replace(/.*access_token=|&expires_in=.*/g, '')
}

// Start using from below
// For API ref, see https://github.com/alkawryk/tinderjs

// Primary method to call
// task = client.getHistory or someshit
// taskcb = callback from task, as task(taskcb)
function DTF(task, taskcb) {
	client.authorize(
		extractToken(FBRedirectUrl),
		FBUserID,
        // callback
        function() {
        	task(taskcb);
        })
}

// path to data dump
var datapath = __dirname + '/data/dump.json'

// A taskcb method: The main parser for a matches-object from result
// save all matches(updated) and override the old file
function parseAllMatches(matchObj) {
    // array of matches, saved
    var data = matchObj.matches;
    if (data) {
    	// console.log(data)
    	fs.writeFile(datapath, JSON.stringify(data))
    }
}

// main method to scrape your past matches
// dumps JSON data to output file
function scrapeMatches() {
	DTF(client.getHistory, function(error, data) {
		parseAllMatches(data)
	})
}

// main method call
scrapeMatches()
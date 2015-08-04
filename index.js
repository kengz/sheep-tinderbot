// dependencies
var tinder = require('tinderjs');
var client = new tinder.TinderClient();

// Ingredients you'll need, and because FB is jackass there is currently no way to obtain them programmatically:
// 1. Tinder access token from fb: 
// Get the user to sign in to fb, and go to this page:
// https://www.facebook.com/dialog/oauth?client_id=464891386855067&redirect_uri=https://www.facebook.com/connect/login_success.html&scope=basic_info,email,public_profile,user_about_me,user_activities,user_birthday,user_education_history,user_friends,user_interests,user_likes,user_location,user_photos,user_relationship_details&response_type=token
// Then quicky copy the first redirected link and paste it below
// 
// 2. your FB id: Yes FB is jackass, even getting your user id is hard
// go to this page, and paste in the link to your profile url
// http://findmyfbid.com

// FIELDS
var redirectUrl = 'https://www.facebook.com/connect/login_success.html#access_token=CAAGm0PX4ZCpsBAERbMY0uT398k6HMNZCaeEQWJZC6XA4UKaZBIh7D2ZCBgvOrRCikTB9In93ZA4zvtv3JFGG8hrOf4AmRFMGQiOH8R0ZAePA1iaRW1whM8UVAqj20VcVT05LA4ZCUxZAEDJaTfLbp5zyzPah1FCGVAHK6T2oTULxF8sHx3YZBEmjNjZAeZB2457ZALFuX439jRt7y11mNn0c9n1mNIgv1iQt01EYZD&expires_in=7076'
var FBuserid = '1148466886'


// token extractor for redirectUrl
function extractToken(url) {
    return url.replace(/.*access_token=|&expires_in=.*/g, '')
}

// Start using from below
// For API ref, see https://github.com/alkawryk/tinderjs
client.authorize(extractToken(redirectUrl), FBuserid, function() {
	// start using this cray from here
    client.getRecommendations(10, function(error, data) {
        console.log(data.results);
    });
});

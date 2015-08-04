# Sherry's-tinderbot
A tinder bot for Sherry. Just for fun.

## Usage
Firstly, I suppose you're familiar with Node, NPM and git.

FB has a shitty API, so developing with it is a pain in the ass. To use/extend this project, see inside `index.js`, and there are **two tokens** you need for each distinct user. Moreover, everytime when the user opens up Tinder elsewhere, the first token is reset, so you have to reobtain it.

You have to obtain these tokens manually from a browser, because FB is jackass and there is currently no way to obtain them programmatically.

#### 1. Tinder access token from FB: 
Get the user to sign in to fb, and go to this page:

https://www.facebook.com/dialog/oauth?client_id=464891386855067&redirect_uri=https://www.facebook.com/connect/login_success.html&scope=basic_info,email,public_profile,user_about_me,user_activities,user_birthday,user_education_history,user_friends,user_interests,user_likes,user_location,user_photos,user_relationship_details&response_type=token

Then quicky copy the first redirected link to `redirectUrl`.

#### 2. your FB id: Kudos to FB, even getting your userid is hard
go to this page, and paste in the link to your profile url
http://findmyfbid.com
then paste the id to `FBuserid`.

Now you're ready to use it. This depends on `tinderjs`, see the [full API docs here](https://github.com/alkawryk/tinderjs).


## Roadmap

I've tried to automate the process of obtaining the tokens with requestJS, selenium, webdriveio, to no avail, and it simply isn't worth the trouble. For now doing them manually is the best.

This is why you're seeing only the very minimal `index.js`. I've removed all the useless test code.

Also you can keep searching around for a better library. Tinder doesn't have an official API, and the dependency of this project is due to a guy who figured out the private API that Tinder uses internally.
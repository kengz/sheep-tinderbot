# Sheep-tinderbot
A tinder bot for sheep. Just for fun.

## Installation
Make sure you have Node, npm and git installed.

Clone this git repo:

```
git clone <the-url-of-this-repo>
```

Next, install the dependencies:

```
npm install
```

Then [setup](#setup) and [use](#use).

## <a name="setup"></a>Setup
FB has a shitty API, so you need to obtain the 2 access tokens from your browser - make sure it's logged in to your FB. There is currently no way to obtain them programmatically.

Also, the first token is reset whenever you opens up your Tinder app elsewhere, so you must reobtain it.


#### 1. Your FB id: Kudos to FB, even getting your userid is hard
go to this page, and paste in the link to your profile url
http://findmyfbid.com
then paste the id into the `env` file.

#### 2. Tinder access token from FB: 
Sign in to your FB, and go to this url:

https://www.facebook.com/dialog/oauth?client_id=464891386855067&redirect_uri=https://www.facebook.com/connect/login_success.html&scope=basic_info,email,public_profile,user_about_me,user_activities,user_birthday,user_education_history,user_friends,user_interests,user_likes,user_location,user_photos,user_relationship_details&response_type=token

Then quicky copy the first (on success) redirected url and paste into `env`.

## <a name="use"></a>Use
Fire up the terminal at the project root directory, do

```
npm start
```

Then check `data/dump.json` for output.


## Roadmap
- search function for the dumped data
- scraper for images


## Developer
This cray depends on `tinderjs`, see the [full API docs here](https://github.com/alkawryk/tinderjs).

I've tried to automate the process of obtaining the tokens with requestJS, selenium, webdriveio, to no avail, and it simply isn't worth the trouble. For now doing them manually is the best.

This is why you're seeing only the very minimal `app.js`. I've removed all the useless test code.


# Gramscraper [![npm version](https://badge.fury.io/js/gramscraper.svg)](https://badge.fury.io/js/gramscraper) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
Gramscraper is a simple middleware to retrieve recent photos from Instagram.

## Registering for an Instagram access token
1. Go to (https://www.instagram.com/developer/)
2. Click Register Your Application
3. Click Register a New Client
4. Specify all the details as much as possible but the most important thing is the "Valid redirect URIs".
5. For development purposes, just specify http://localhost:7000 (Default rails server).
6. Click Register
7. Notice that your CLIENT STATUS is still in "Sandbox Mode". This is ok. All you need for now is to grab your own photos and you do not need to be in "Production Mode" to do that.
8. Once saved, copy the CLIENT ID token.
9. Open your browser and copy this URL but replace "CLIENT-ID" and "REDIRECT-URI".    
* Format:   
`https://api.instagram.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=REDIRECT-URI&response_type=token`    
* Example:    
`https://api.instagram.com/oauth/authorize/?client_id=55555555555555555555&redirect_uri=http://localhost:7000&response_type=token`    
10. Whether or not you actually have localhost:7000 server started, once you open the url, the address will change to something like:   
* Format:   
`http://your-redirect-uri#access_token=ACCESS-TOKEN`    
* Example:    
`https://api.instagram.com/v1/media/username?access_token=1234567890`   
11. Copy the access_token (i.e. 1234567890) value and you're done!


## Installing the Module
Using npm:
```
npm install gramscraper
```
Using yarn:
```
yarn add gramscraper
```

## Basic Usage
```javascript
const gramscraper = require('gramscraper')

const username = 'goproglenn'
const access_token = '1234567890'

function getPhotos() {
  gramscraper.scrape(access_token, username)
    .then(res => {
      res.map( photo => {
        // Display url for standard resolution photo
        console.log( photo.standard_resolution )
        // Display url for low resolution photo
        console.log( photo.low_resolution )
        // Display url for thumbnail
        console.log( photo.thumbnail )
        // Display the photo caption
        console.log( photo.caption )
      })
    })
}
```
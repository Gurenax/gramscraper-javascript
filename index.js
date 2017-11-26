const axios = require('axios')
/*
* Retrieves recent photos from instagram
*   Parameters:
*     access_token - Instagram access token. See instagram api instructions on how to get one.
*     username - Instagram username. Defaults to `self` when not indicated
*/
function scrape(access_token, username='self') {
  const base_url = `https://api.instagram.com/v1/users/${username}/media/recent/?access_token=${access_token}`

  return axios.get(base_url)
    .then(function (response) {
      let instagram = []

      response.data.data.map( (pageItem) => {
        // Post ID, Image Caption, Images
        const instagramItem = {
          last_id: pageItem.id,
          caption: pageItem.caption,
          thumbnail: pageItem.images.thumbnail.url,
          low_resolution: pageItem.images.low_resolution.url,
          standard_resolution: pageItem.images.standard_resolution.url
        }
        // Add instagram item to array
        instagram.push(instagramItem)
      })
      return instagram
    })
    .catch( error => {
      console.log(error);
    });
}

module.exports = {scrape}
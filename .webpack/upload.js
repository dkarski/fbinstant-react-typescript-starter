const request = require('request');
const fs = require('fs');
const open = require('open');
require('dotenv').config({ path: `${__dirname}/../.env`})

const upload = function() {
  return new Promise(function(resolve, reject) {
    console.log(`Uploading archive: archives/${process.env.UUID}.zip`);
    request.post(
      {
        url: `https://graph-video.facebook.com/${process.env.FB_APP_ID}/assets`,
        formData: {
          access_token: process.env.FB_ACCESS_TOKEN,
          type: 'BUNDLE',
          comment: 'Uploaded via node.js script',
          asset: {
            value: fs.createReadStream(`${__dirname}/../archives/${process.env.UUID}.zip`),
            options: {
              filename: `${process.env.UUID}.zip`,
              contentType: 'application/octet-stream',
            },
          },
        },
      },
      function(error, response, body) {
        if (error || !body) reject(error);
        try {
          var jsonResponse = JSON.parse(response.body);
          if (jsonResponse.success) {
            const openUrl = `https://developers.facebook.com/apps/${process.env.FB_APP_ID}/instant-games/hosting/`;

            console.log('Bundle uploaded via the graph API');
            console.log("Don't forget you need to publish the build");
            console.log('Opening developer dashboard...');
            return open(openUrl).then(resolve);
          } else {
            reject(new Error('Unexpected API response: ' + response.body));
          }
        } catch (e) {
          reject(new Error('Upload failed. ' + e.message));
        }
      },
    );
  });
};

upload()
  .then(function() {
    console.log('Success');
    return Promise.resolve('Success');
  })
  .catch(function(error) {
    console.log('Failure. ' + error);
    return Promise.reject('Failure. ' + error);
  });

const {google} = require('googleapis');
const sourceFile = require('./andrew.js');
const googleConfig = {
  // TODO: replace thse with variables 
  clientId: sourceFile.clientKeyId, 
  clientSecret: sourceFile.clientSecret, // e.g. _ASDFA%DFASDFASDFASD#FAD-
  redirect: 'https://acastelluccio.github.io/react-gh-pages/' // this must match your google api settings
};

/**
 * Create the google auth object which gives us access to talk to google's apis.
 */
function createConnection() {
  console.log(googleConfig.clientId)
  return new google.auth.OAuth2(
    googleConfig.clientId,
    googleConfig.clientSecret,
    googleConfig.redirect
  );
}


const defaultScope = [
  'https://www.googleapis.com/auth/plus.me',
  'https://www.googleapis.com/auth/userinfo.email',
];

/**
 * Get a url which will open the google sign-in page and request access to the scope provided (such as calendar events).
 */
function getConnectionUrl(auth) {
  return auth.generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent', // access type and approval prompt will force a new refresh token to be made each time signs in
    scope: defaultScope
  });
}

/**
 * Create the google url to be sent to the client.
 */

module.exports = { 
    getUrl : function () {
        console.log("called Oauth")

  const auth = createConnection(); // this is from previous step
  const url = getConnectionUrl(auth);
  return url;
    }
}

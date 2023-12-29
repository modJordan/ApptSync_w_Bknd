const OktaJwtVerifier = require('@okta/jwt-verifier');

const oktaJwtVerifier = new OktaJwtVerifier({
    issuer: `https://${process.env.OKTA_DOMAIN}/oauth2/default`,
    clientId: process.env.OKTA_CLIENT_ID,
    assertClaims: {
        aud: 'api://default',
    },
});

module.exports = oktaJwtVerifier;

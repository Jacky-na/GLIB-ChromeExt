/*
 * Copyright (C) 2016 TopCoder Inc., All Rights Reserved.
 */

/**
 * Represents the configuration file
 * @version 1.0
 * @author TCSASSEMBLER
 */


var OAUTH_API_KEY = 'MyM7bhB25wdkNKI2OCa6137E1u8';

var TC_ENDPOINT_DEV = 'https://glib-mock.herokuapp.com/';
var TC_ENDPOINT_PROD = 'https://glib-prod.herokuapp.com/';
var EXTENSION_ID = chrome.runtime.id;
var DEVELOPMENT_ID = 'kbdpmophclfhglceikdgbcoambjjgkgb';
var PROD_ID = 'fbdelahfocadoeclphgckagbmjpcnpkd';

var OAUTH_APPS = {
    gitlab: {
        clientId: '2e7ddb0f2135d5f81407d49941a6cb1a83767b200a584e97f9fb92684ce71c89',
        clientSecret: '79d574243aa4a133db7ac16b37a994c8698ee22708d24a1bf2a0a5c16486b293',
        redirectUri: `https://${EXTENSION_ID}.chromiumapp.org/oauth2`,
        scope: 'api',
        authorizeUrl: 'https://gitlab.com/oauth/authorize',
        tokenUrl: 'https://gitlab.com/oauth/token'
    }
};

// Shared constants, do not change
var DEFAULT_GITHUB_DOMAIN = 'github.com';
var DEFAULT_GITLAB_DOMAIN = 'gitlab.com';
var DEFAULT_JIRA_DOMAIN = 'appirio.atlassian.net';
var DOMAIN_KEY_GITHUB = 'glib::github_domain';
var DOMAIN_KEY_GITLAB = 'glib::gitlab_domain';
var DOMAIN_KEY_JIRA = 'glib::jira_domain';

var TC_OAUTH_URL_KEY = 'glib::tc_oauth_url';
var TC_OAUTH_TOKEN_KEY = 'glib::tc_oauth_token';
var TC_OAUTH_CLIENT_ID_KEY = 'glib::tc_oauth_client_id';
var TC_OAUTH_REDIRECT_URI_KEY = 'glib::tc_oauth_redirect_uri';

var DEFAULT_TC_OAUTH_REDIRECT_URI = `https://${EXTENSION_ID}.chromiumapp.org/oauth2`;

var DEFAULT_TC_OAUTH_CLIENT_ID, PROD_TC_OAUTH_CLIENT_ID;

// THe client ids are tied to the callback url for the extension.
if (EXTENSION_ID === DEVELOPMENT_ID) {
  DEFAULT_TC_OAUTH_CLIENT_ID = '7b474a00-0606-4fb3-a3e9-1e1748edbd2d';
  PROD_TC_OAUTH_CLIENT_ID = '7b474a00-0606-4fb3-a3e9-1e1748edbd2d';
} else if ( EXTENSION_ID === PROD_ID) {
  DEFAULT_TC_OAUTH_CLIENT_ID = '99831715-8dff-4473-a794-dfc8e9755ce1';
  PROD_TC_OAUTH_CLIENT_ID = 'ef30d1d6-bc65-4281-ba66-91b85b060df1';
} else {
  console.error('Unknown extension id.  TC auth will fail.');
}

var DEFAULT_TC_OAUTH_URL = 'https://accounts.topcoder-dev.com/oauth';
var PROD_TC_OAUTH_URL = 'https://accounts.topcoder.com/oauth';

var ENVIRONMENT = 'glib::environment';

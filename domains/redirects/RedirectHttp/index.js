"use strict";

const fs = require("fs");

const filesDirectory = "./redirectFiles/";
const defaultURL     = "https://zhp.pl";

module.exports = async function(context, req) {
    let redirects   = [], // Holds all redirects from files (basedomain => redirect object)
        basedomains = []; // Holds redirects basedomains (array of domains)

    // Load redirects from files
    await fs.readdirSync(filesDirectory).forEach(filename => {
        if(filename.endsWith(".json") && !filename.endsWith(".schema.json")) {
            let file = fs.readFileSync(filesDirectory + filename);

            let domain = filename.substring(0, filename.lastIndexOf(".json"));

            redirects[domain] = JSON.parse(file.toString());
            basedomains.push(domain);
        }
    });

    // Get request URL
    let url      = new URL(req.url),
        hostname = url.hostname;

    // Check, if URL is in one of supported basedomains
    let base = endsWithAny(basedomains, hostname);

    if(base === false) {
        // Include requested path to the redirect URL
        let redirect = addPathname(defaultURL, req);

        context.log(`Basedomain ${hostname} not supported. Redirecting to ${redirect}...`);
        context.res = {
            status:  302,
            body:    `Redirecting to ${redirect}...`,
            headers: {
                location: redirect
            }
        };
        return;
    }

    // Extract the subdomain
    let subdomain    = hostname.substring(0, hostname.lastIndexOf(base) - 1), // -1 to include the dot before
        redirectData = redirects[base][subdomain];

    // Check, if redirect for requested subdomain exists
    if(typeof redirectData !== "object") {
        // Include requested path to the redirect URL
        let redirect = addPathname(defaultURL, req);

        context.log(`Object for ${subdomain} not found. Redirecting to ${redirect}...`);
        context.res = {
            status:  302,
            body:    `Redirecting to ${redirect}...`,
            headers: {
                location: redirect
            }
        };
        return;
    }

    // Include requested path to the redirect URL
    let fullRedirect = addPathname(redirectData.target, req);

    context.log(`OK. Redirecting ${hostname} to ${fullRedirect} using ${redirectData.method}...`);

    // Found redirect data for given URL - redirecting
    context.res = {
        status:  redirectData.method,
        body:    `Redirecting to ${fullRedirect}...`,
        headers: {
            location: fullRedirect
        }
    };
};

module.exports.defaultURL = defaultURL;

/**
 * Determines whether a string ends with the characters of any of the strings from the specified array. Returns
 * false if string doesn't end with any of the strings, or the matched string.
 *
 * @param {string[]} suffixes an array of suffixes to check
 * @param {string} string string to check for
 *
 * @returns {(string|boolean)} the suffix that the string ends with, or false.
 */
function endsWithAny(suffixes, string) {
    for(let suffix of suffixes) {
        if(string.endsWith(suffix)) {
            return suffix;
        }
    }

    return false;
}

/**
 * Adds a trailing slash to an url, if already doesn't have it.
 *
 * @param {string} url
 *
 * @returns {string} url with trailing slash added, if needed.
 */
function addTrailingSlash(url) {
    if(!url.endsWith("/")) {
        return url + "/";
    }

    return url;
}

/**
 * If request URL path is not null, returns given URL with added path, or unmodified URL.
 *
 * @param {string} url to be modified.
 * @param {Object} req object to read the incoming URL.
 *
 * @returns {string} url with added path, or unmodified url if path was null.
 */
function addPathname(url, req) {
    let {pathname} = new URL(req.url),
        resultUrl  = url;

    if(req.params !== undefined && req.params.path !== undefined) {
        // Path passed as a parameter from Azure Functions
        resultUrl = addTrailingSlash(url);
        resultUrl += req.params.path;
    } else if(pathname !== "/") {
        // Path got directly from the URL
        resultUrl = addTrailingSlash(url);
        resultUrl += pathname.substring(1);
    }

    return resultUrl;
}
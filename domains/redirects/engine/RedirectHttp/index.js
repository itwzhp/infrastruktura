"use strict";

const fs = require("fs");

const filesDirectory = "./redirectFiles/";

module.exports = async function(context, req) {
    let redirects = [], basedomains = [];

    // Load redirects from files
    await fs.readdirSync(filesDirectory).forEach(filename => {
        if(filename.endsWith(".json")) {
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
        // ToDo: redirect to default URL
    }

    // Extract the subdomain
    let subdomain    = hostname.substring(0, hostname.lastIndexOf(base) - 1), // -1 to include the dot before
        redirectData = redirects[base][subdomain];

    if(typeof redirectData !== "object") {
        // ToDo: redirect to default URL
    }

    // ToDo: build full address (including path)
    // Found redirect data for given URL - redirecting
    context.res = {
        status:  redirectData.method,
        body: `Redirecting to ${redirectData.target}...`,
        headers: {
            "Location": redirectData.target
        }
    };
};

/**
 * Determines whether a string ends with the characters of any of the strings from the specified array. Returns
 * false if string doesn't end with any of the strings, or the matched string.
 *
 * @param {string[]} suffixes
 * @param {string} string
 *
 * @returns {(string|boolean)} The suffix that the string ends with, or false.
 */
function endsWithAny(suffixes, string) {
    for(let suffix of suffixes) {
        if(string.endsWith(suffix)) {
            return suffix;
        }
    }

    return false;
}

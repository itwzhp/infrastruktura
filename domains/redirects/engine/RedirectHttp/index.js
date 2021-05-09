"use strict";

const fs = require("fs");

const filesDirectory = "./redirectFiles/";

module.exports = async function(context, req) {
    let redirects = [];

    // Load redirects from files
    await fs.readdirSync(filesDirectory).forEach(filename => {
        if(filename.endsWith(".json")) {
            let file = fs.readFileSync(filesDirectory + filename);

            let domain = filename.substring(0, filename.lastIndexOf(".json"));

            redirects[domain] = JSON.parse(file.toString());
        }
    });

    let url      = new URL(req.url),
        hostname = url.hostname;

    context.res = {
        body: hostname
    };
};

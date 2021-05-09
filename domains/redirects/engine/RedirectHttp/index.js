module.exports = async function(context, req) {
    let url      = new URL(req.url),
        hostname = url.hostname;

    context.res = {
        body: hostname
    };
};

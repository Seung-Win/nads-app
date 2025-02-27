const { errorHandler } = require("./lib/helpers.js")
const { uploadProcessedData } = require("./lib/firebase.js")

async function handler(req, method) {
    try{
        if (method === "GET"){
            const path = req.path;

            if (path === "/test-upload"){
                await uploadProcessedData();
                return "Success";
            }
        }

        return "Unknown request";
    } catch(error) {
        errorHandler(error, "mainIndexHandler");
    }
}

module.exports = { handler };
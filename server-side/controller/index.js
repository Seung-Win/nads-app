const { errorHandler } = require("./lib/helpers.js")
const { uploadProcessedData, getMerchData, getEventData } = require("./lib/firebase.js")

async function handler(req, method) {
    try{
        if (method === "GET"){
            const path = req.path;

            if (path === "/test-upload"){
                await uploadProcessedData();
                return "Success";
            }

            if (path === "/getMerch"){
                const data = await getMerchData();
                return JSON.stringify(data);
            }

            if (path === "/getEvents"){
                const data = await getEventData();
                return JSON.stringify(data);
            }
        }

        return "Unknown request";
    } catch(error) {
        errorHandler(error, "mainIndexHandler");
    }
}

module.exports = { handler };
const app = require("./index");
const connect = require("./config");
require('dotenv').config()
const PORT=8000 || process.env.PORT

app.listen(PORT, async () => {
    try {
        await connect();
        console.log(`listining on port ${PORT}`);
    } catch (err) {
        console.log("err connect mongo: ", err);
    }
})
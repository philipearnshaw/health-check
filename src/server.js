const app = require("./app");
const {logger} = require('./utils/logger');

const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
    logger.log('info', `Server up on port ${PORT}`);
});
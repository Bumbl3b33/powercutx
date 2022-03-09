/*imports */
const Logger = require("./logger");
const logger = new Logger();

logger.on("signalToListen", ({ eventId, url }) => {
  console.log("Doing something hmmm...");
  console.log(eventId, url);
});

logger.log({ eventId: 5, url: "https://sus" });

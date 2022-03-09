/*imports */
// const fs = require("fs");
const EventEmitter = require("events");
const myEmitter = new EventEmitter();

/* sync read of files in current dir */
// const files = fs.readdirSync("./");
// console.log(files);

/* async read of files in current dir */
// fs.readdir("./", (err, files) => {
//   if (err) return console.log("trollDepsair", err);
//   else return console.log("EZ Here are the files:", files);
// });

myEmitter.on("signalToListen", ({ eventId, url }) => {
  console.log("Doing something hmmm...");
  console.log(eventId, url);
});

/* Event emitter with event args */
const argParams = {
  eventId: 1,
  url: "http://mywebsite.com/api/getOutages",
};
myEmitter.emit("signalToListen", argParams);

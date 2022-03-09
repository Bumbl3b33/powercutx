/*imports */
const EventEmitter = require("events");

class customLogger extends EventEmitter {
  /*Log an event */
  log = (args) => {
    this.emit("signalToListen", args);
  };
}

module.exports - customLogger;

/*imports */
const EventEmitter = require("events");

class Logger extends EventEmitter {
  /*Log an event */
  log = (args) => {
    this.emit("signalToListen", args);
  };
}

module.exports = Logger;

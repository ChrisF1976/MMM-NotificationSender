Module.register("MMM-NotificationSender", {
  // Default configuration options. These can be overwritten in config.js.
  defaults: {
    // Notification names to send. Other modules can listen to these names.
    startNotification: "START_NOTIFICATION",
    stopNotification: "STOP_NOTIFICATION",
    // Text payloads for the notifications.
    startText: "This is a start notification.",
    stopText: "This is a stop notification."
  },

  // Called when the module is started
  start: function() {
    Log.info("Starting module: " + this.name);
  },

  // Override the getDom method to create your custom UI.
  getDom: function() {
    // Create a wrapper element to contain the buttons.
    var wrapper = document.createElement("div");
    wrapper.style.textAlign = "center";

    // Create the Start button
    var startBtn = document.createElement("button");
    startBtn.innerHTML = "NEXT_PDF";
    startBtn.style.marginRight = "10px";
    startBtn.addEventListener("click", this.sendStartNotification.bind(this));
    wrapper.appendChild(startBtn);

    // Create the Stop button
    var stopBtn = document.createElement("button");
    stopBtn.innerHTML = "NEXT_PAGE";
    stopBtn.addEventListener("click", this.sendStopNotification.bind(this));
    wrapper.appendChild(stopBtn);

    return wrapper;
  },

  // Function to send the start notification
  sendStartNotification: function() {
    // Log to console and MagicMirror logs to check the button click event.
    console.log("Start button pressed. Sending start notification...");
    Log.info(
      "Sending start notification: " +
        this.config.startNotification +
        " with payload: " +
        JSON.stringify({text: this.config.startText })
    );

    // Send the notification with the configured name and payload.
    this.sendNotification(this.config.startNotification, this.config.startText });
  },

  // Function to send the stop notification
  sendStopNotification: function() {
    // Log to console and MagicMirror logs to check the button click event.
    console.log("Stop button pressed. Sending stop notification...");
    Log.info(
      "Sending stop notification: " +
        this.config.stopNotification +
        " with payload: " +
        JSON.stringify({ text: this.config.stopText })
    );

    // Send the notification with the configured name and payload.
    this.sendNotification(this.config.stopNotification, { text: this.config.stopText });
  }
});

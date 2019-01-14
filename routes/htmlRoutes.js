// === HTML ROUTES ===

module.exports = function(app) {

// GET route to serve up home page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

// GET route to serve up about us/contact page
app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/about.html"));
  });


// GET route to serve up play page
app.get("/game", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/game.html"));
  });


};



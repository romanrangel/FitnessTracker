const router = require("express").Router();
const path = require("path");

// We need a route for the homepage
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
});

// we need a route for the exercise page
app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/exercise.html"));
});

// we need a route for the stats page
app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/stats.html"));
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});

// api/workouts route to display workouts    GET
// /api/workouts/:id    update
// /api/workouts/range going to show the last 7 days   GET
// /api/workouts this is where the user can create workouts POST
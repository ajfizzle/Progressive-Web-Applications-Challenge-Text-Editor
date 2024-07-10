const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 10000;

const root = path.resolve(__dirname, "..", "client", "dist");
app.use(express.static(root));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/htmlRoutes")(app);

console.log(path.join(__dirname, "..", "client", "dist", "index.html"));

// Fallback route to serve index.html
app.get("*", (req, res) => {
  res.sendFile("index.html", { root });
});

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));

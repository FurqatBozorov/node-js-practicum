const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const shopRoutes = require("./routes/shop");
const productRoutes = require("./routes/add-product");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(shopRoutes);
app.use("/admin", productRoutes.routes);

const PORT = 3000;
app.listen(PORT, () => console.log("server is runnig on port:", PORT));

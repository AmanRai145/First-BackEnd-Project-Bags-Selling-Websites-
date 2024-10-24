const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
const expressSession = require("express-session");
const flash = require("connect-flash");
const ownersRouter = require("./routes/ownersRouters")
const usersRouter = require("./routes/usersRouters")
const productsRouter = require("./routes/productsRouters")
const db = require("./config/mongoose-connection");
const indexRouter = require("./routes/index"); // abhi tak ye create nhi kiya hai 

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
    expressSession({
        resave: false,
        saveUninitialized: false,
        secret: process.env.EXPRESS_SESSION_SECRET,
    })
);
app.use(flash());

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.use("/", indexRouter); // empty hai indexrouter abhi tak kuchh likha nhi hai
app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

app.listen(3000); 
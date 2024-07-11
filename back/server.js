const express = require('express');
const cookieParser = require("cookie-parser");
const staffRoutes = require("./routes/staff.routes");
const userRoutes = require("./routes/user.routes");
require('dotenv').config({ path: './config/.env' });
require("./config/db");
const { checkUser, requireUser } = require("./middleware/auth.middleware");
const cors = require('cors');

const app = express();

const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
}
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// jwt
app.use(checkUser);
app.use("/api/staff", requireUser);

// Routes
app.use("/api/staff", staffRoutes);
app.use("/api/user", userRoutes);

// Serveur
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})
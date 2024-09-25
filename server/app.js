const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./utils/db.js");
const errorMiddleware = require("./middlewares/error-middleware.js");

// Import Routes
const authRoutes = require("./routers/auth-router.js");
const contactRoutes = require("./routers/contact-router.js");

// Models
const User = require("./models/User.js");
const Child = require("./models/Child.js");
const School = require("./models/School.js");
const Bus = require("./models/Bus.js");
const Driver = require("./models/Driver.js");
const Geofence = require("./models/Geofence.js");
const Notification = require("./models/Notification.js");
const RealTimeLocation = require("./models/RealTimeLocation.js");
// const Contact = require("./models/Contact.js");

const app = express();

//  CORS
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET , POST , PATCH , PUT , DELETE",
  credentials: true,
};

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());

// Use Routes
app.use("/api/auth", authRoutes);
app.use("/api/form", contactRoutes);

app.use(errorMiddleware);

//Database connection
connectDB();

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on PORT : ${PORT}`);
});

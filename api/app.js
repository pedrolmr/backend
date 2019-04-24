const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const AuthRouter = require("../auth/routes/authRouter");
const UsersRouter = require("../api/users/routes/usersRoutes");
const CoveragesRouter = require("../api/coverages/routes/coveragesRoutes");
const DoctorsRouter = require("../api/doctors/routes/doctorsRoutes");
const HospitalsRouter = require("../api/hospitals/routes/hospitalsRoutes");
const InsurersRouter = require("../api/insurers/routes/insurersRoutes");
const ProceduresRouter = require("../api/procedures/routes/proceduresRoutes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use("/api/auth", AuthRouter);
app.use("/api/users", UsersRouter);
app.use("/api/coverages", CoveragesRouter);
app.use("/api/doctors", DoctorsRouter);
app.use("/api/hospitals", HospitalsRouter);
app.use("/api/insurers", InsurersRouter);
app.use("/api/procedures", ProceduresRouter);

app.get("/", (req, res) => {
  res.status(200).json({ api: "running" });
});

module.exports = app; 

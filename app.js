import express from "express";
import http from "http";
import path from "path";
import { fileURLToPath } from "url";
import urlRoutes from "./routes/urlRoutes.route.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use("/", urlRoutes);

http.createServer(app).listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

import path from "path";
import { fileURLToPath } from "url";
import { saveUrl, getUrl } from "../models/urlModel.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function showMainPage(req, res) {
  res.sendFile(path.join(__dirname, "../public", "main.html"));
}

export function handlePostUrl(req, res) {
  const { defaulturl, customurl } = req.body;
  saveUrl(customurl, defaulturl);
  res.json({ zx: `http://localhost:3000/${customurl}` });
}

export function showExtraPage(req, res) {
  const f = {
    name: "keshav",
    age: "20",
  };
  res.render("extra_file", { f });
}

export function handleRedirect(req, res) {
  const original = getUrl(req.params.id);
  res.redirect(original);
}

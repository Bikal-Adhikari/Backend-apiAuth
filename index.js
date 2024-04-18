import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

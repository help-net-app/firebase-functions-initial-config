import * as functions from "firebase-functions";
import * as express from "express";

const app = express();

app.get("/", (req, res) =>
  res.status(200).send("Hello from firebase functions")
);

exports.app = functions.https.onRequest(app);

// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", { structuredData: true });
//   console.log(functions.config().project_id);
//   console.log(functions.config().private_key.replace(/\\n/g, "\n"))
//   //console.log(functions.config().firebase);
//   response.send("Hello from Firebase!");
// });

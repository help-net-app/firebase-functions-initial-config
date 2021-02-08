import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

admin.initializeApp({
  credential: admin.credential.cert({
    privateKey: functions.config().private_key.replace(/\\n/g, "\n"),
    projectId: functions.config().project_id,
    clientEmail: functions.config().client_email,
  }),
  databaseURL: "https://helpnet-34bbf.firebaseio.com",
});

const db = admin.firestore();

export { admin, db };

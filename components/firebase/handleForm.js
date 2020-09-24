import mime from "mime-types";

import firebase from "./firebaseConfig";

const handleForm = async (values, { setSubmitting, resetForm }) => {
  try {
    if (values.type == "quote") {
      const docRef = await firebase.firestore().collection("quotes").add({
        character: values.character,
        game: values.game,
        quote: values.quote,
      });
      console.log("Document written with ID: ", docRef.id);
      alert("Document written with ID: " + docRef.id);
    } else if (values.type == "image") {
      // Get image type
      const imageType = mime.extension(values.file.type);

      // Get counter
      const imageCounter = firebase
        .firestore()
        .collection("imageCounter")
        .doc(values.game);
      const imageCounterObj = await imageCounter.get();
      let imageCounterdoc = {};
      // Check if doc exist in firestore
      if (imageCounterObj.exists) {
        imageCounterdoc = imageCounterObj.data();
      }
      // Check if counter exist in doc
      if (imageCounterdoc[imageType] == null) {
        imageCounterdoc[imageType] = 1;
      } else {
        imageCounterdoc[imageType] = imageCounterdoc[imageType] + 1;
      }
      console.log(imageCounterdoc);

      // Put image
      const storageRef = firebase.storage().ref();
      const fileRef = storageRef
        .child("images")
        .child(values.game)
        .child(imageType)
        .child(
          imageCounterdoc[imageType] + "." + mime.extension(values.file.type)
        );
      const fileRes = await fileRef.put(values.file);

      // Increment counter
      const increment = firebase.firestore.FieldValue.increment(1);
      imageCounter.set({ [imageType]: increment }, { merge: true });

      console.log("File uploaded!!" + fileRes);
      alert("File uploaded!! " + fileRes.ref);
    } else {
      throw "Invalid Form Type";
    }
    resetForm();
  } catch (error) {
    console.error("Error adding document: ", error);
  } finally {
    setSubmitting(false);
  }
};

export default handleForm;

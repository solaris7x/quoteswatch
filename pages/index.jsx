import Head from "next/head";

import Nav from "../components/Nav";
import Body from "../components/Body";
import About from "../components/About";

import firebase from "../components/firebase/firebaseConfig";

function Index({ quoteMap, image }) {
  return (
    <div>
      <Head>
        <title>QuotesWatch</title>
      </Head>
      <div className="text-lg grid md:grid-cols-2">
        <Nav />
        <Body quoteMap={quoteMap} imageURL={image} />
      </div>
      <About />
    </div>
  );
}

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

Index.getInitialProps = async (ctx) => {
  try {
    const quotes = firebase.firestore().collection("quotes");
    const key = quotes.doc().id;

    let quotedoc = await quotes
      .where(firebase.firestore.FieldPath.documentId(), ">=", key)
      .limit(1)
      .get();
    // console.log(quotedoc.docs[0].data());
    // console.log(quotedoc.empty);
    if (quotedoc.empty) {
      quotedoc = await quotes
        .where(firebase.firestore.FieldPath.documentId(), "<=", key)
        .limit(1)
        .get();
    }
    const quoteMap = quotedoc.docs[0].data();

    //Get counter
    const imageCounterObj = await firebase
      .firestore()
      .collection("imageCounter")
      .doc(quoteMap.game)
      .get();
    const imageCounter = imageCounterObj.data();
    const imageCounterExts = Object.keys(imageCounter);
    // console.log(imageCounterExts);
    const imageCounterExt =
      imageCounterExts[getRndInteger(0, imageCounterExts.length - 1)];
    // console.log(imageCounter[imageCounterExt]);
    console.log(
      getRndInteger(1, imageCounter[imageCounterExt]) + "." + imageCounterExt
    );
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef
      .child("images")
      .child(quoteMap.game)
      .child(imageCounterExt)
      .child(
        getRndInteger(1, imageCounter[imageCounterExt]) + "." + imageCounterExt
      );

    const image = await fileRef.getDownloadURL();
    // const image = "/destiny2/cayde/cayde-5.png";

    return { quoteMap, image };
  } catch (error) {
    console.error(error);
  }
};

export default Index;

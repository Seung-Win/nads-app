const { initializeApp } = require("firebase/app");
const { errorHandler } = require("./helpers");
const { getFirestore, doc, setDoc } = require("firebase/firestore")

const{
    FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN,
    FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_ID,
    FIREBASE_MESSAGE_SENDER_ID,
    FIREBASE_APP_ID,
    FIREBASE_MEASEUREMENT_ID,
} = process.env;

const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_PROJECT_ID,
    messagingSenderId: FIREBASE_MESSAGE_SENDER_ID,
    appId: FIREBASE_APP_ID,
    measurementId: FIREBASE_MEASEUREMENT_ID
};

let app;
let firestoreDb;

const initializeFirebaseApp = () => {
    try{
        app=initializeApp(firebaseConfig);
        firestoreDb = getFirestore(app);
        return app;
    }catch(error){
        errorHandler(error, "firebase-initializeFirebaseApp");
    }
};

const uploadProcessedData = async () => {
    const dataToUpload = {
        key1: "test",
        key2: 123,
        key3: new Date(),
    };
    try{
        const document = doc(firestoreDb, "testing", "some-unique-ids");
        let dataUpdated = await setDoc(document, dataToUpload);
        return dataUpdated;
    }catch(error){
        errorHandler(error, "firebase-uploadProcessedData");
    }
};

const getFirebaseApp = () => app;

module.exports = {
    initializeFirebaseApp,
    getFirebaseApp,
    uploadProcessedData,
};
const { initializeApp } = require("firebase/app");
const { errorHandler } = require("./helpers");
const { getFirestore, addDoc, collection, getDocs, query } = require("firebase/firestore")

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
        image: "test",
        title: "Hoodie",
        price: "PHP 850",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        materials: "Synthetic Fiber, 100% vegan",
        release: "22/02/25",
        code: "nucksHoodie0225",
    };
    try{
        const dataUpdated = await addDoc(collection(firestoreDb,"merch"), dataToUpload);
        return dataUpdated;
    }catch(error){
        errorHandler(error, "firebase-uploadProcessedData");
    }
};

const getMerchData = async (from, to) =>{
    try {
        const collectionRef = collection(firestoreDb, "merch");
        const finalData = [];
        const q = query(collectionRef);

        const docSnap = await getDocs(q);

        docSnap.forEach((doc)=>{
            finalData.push(doc.data());
        });

        return finalData;
    } catch (error) {
        errorHandler(error, "firebase-getData");
    }
}

const getEventData = async (from, to) =>{
    try {
        const collectionRef = collection(firestoreDb, "events");
        const finalData = [];
        const q = query(collectionRef);

        const docSnap = await getDocs(q);

        docSnap.forEach((doc)=>{
            finalData.push(doc.data());
        });

        return finalData;
    } catch (error) {
        errorHandler(error, "firebase-getData");
    }
}

const getFirebaseApp = () => app;

module.exports = {
    initializeFirebaseApp,
    getFirebaseApp,
    uploadProcessedData,
    getMerchData,
    getEventData,
};
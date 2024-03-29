import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyDNghL49VFJK5rxfn1fG5obRVB-r6xKkGY",
    authDomain: "repliq-react-task.firebaseapp.com",
    projectId: "repliq-react-task",
    storageBucket: "repliq-react-task.appspot.com",
    messagingSenderId: "1030981686554",
    appId: "1:1030981686554:web:6a3d1471fc5c38e9c588a3"
};


const app = initializeApp(firebaseConfig);
export default app
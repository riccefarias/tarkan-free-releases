

// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.4.3/firebase-app.js');
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.4.3/firebase-messaging.js');


// ====== editar aqui ======

var firebaseConfig = {
    apiKey: "AIzaSyCOLYzLg7c_u54qcQ1MYE9ARSvBjx8N6kk",
    authDomain: "tarkan-366b8.firebaseapp.com",
    projectId: "tarkan-366b8",
    storageBucket: "tarkan-366b8.appspot.com",
    messagingSenderId: "1052991243105",
    appId: "1:1052991243105:web:80257151907fce5703bb20",
    measurementId: "G-LR8EBRYBZJ"
}



// === não mecher depois daqui ====

// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig)

// eslint-disable-next-line no-undef
const messaging  = firebase.messaging()
messaging.onBackgroundMessage((msg) => {
    console.log("tesing sevice worker",msg)
    // Customize notification here
});


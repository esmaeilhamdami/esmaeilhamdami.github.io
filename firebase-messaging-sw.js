importScripts('https://www.gstatic.com/firebasejs/11.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
      apiKey: "AIzaSyD_e6AFrzFLauJ_Zv1NMlF1xE0byIWe3ds",
      authDomain: "vurall-app.firebaseapp.com",
      projectId: "vurall-app",
      storageBucket: "vurall-app.firebasestorage.app",
      messagingSenderId: "416792177745",
      appId: "1:416792177745:web:3a66805cc6f4d5f7a61c70",
      measurementId: "G-7HJCTG2XK1"
});

const messaging = firebase.messaging();

// Optional: show notification when app is in background
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    //icon: '/icons/Icon-192.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
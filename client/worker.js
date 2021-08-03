console.log('Service Worker Loaded...');

self.addEventListener('push', e =>{
    const data = e.data.json();
    console.log("Push Recieved...");
    self.registration.showNotification(data.title, {
        body: 'Notified by TRaversy Media!',
        icon: 'http://image.ibb.co/frYOFd/inlogo.png'
    });
})
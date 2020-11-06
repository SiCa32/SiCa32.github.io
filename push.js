var webPush = require('web-push');

const vapidKeys = {
   "publicKey": "BHigCpkc--WkZOl1dmfaU6wnoL2J1mrj4gxysQs3-skIpVOySoqz26G685YtFb6nICsvEXRXCOuMHMcIcv_CmHc",
   "privateKey": "XXqMgumziorECJVbXdieeUtLF9P1YoyfcohtziQJkpA"
};


webPush.setVapidDetails(
   'mailto:example@yourdomain.org',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)
var pushSubscription = {
   "endpoint": "https://fcm.googleapis.com/fcm/send/cAYbIoQFlQ8:APA91bGhZJ7sFWVTJ0nXCu1vixlLP693_kJ0zCNqGg6lwH-afPhviYzboLpdkXH6t9YNICSmakItuHTDh5BNuLfIdWZWCzbfMLgSjd0ZqNL_OPnpMw4tyhB5nD_a5zh5q93ADWR3WOIo",
   "keys": {
       "p256dh": "BJ4GYOREnYY0mKaTYLCjQcw8vNgapeoGYqJz/0OExxLIvk1duvGMVwfsgOVgWTiAcn0QnPW2HQ2qCm9e7njol2Y=",
       "auth": "QKz5XptjsoBRd/uebrrT8Q=="
   }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';

var options = {
   gcmAPIKey: '391922451515',
   TTL: 60
};
webPush.sendNotification(
   pushSubscription,
   payload,
   options
);

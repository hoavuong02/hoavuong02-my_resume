'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "0be468699a2548c4f8264777526f9136",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ed2b0979d9fd960fe9cfcc94c3652b04",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "74d70dde560b1383a80955d36b0b7365",
".git/logs/refs/heads/master": "74d70dde560b1383a80955d36b0b7365",
".git/logs/refs/remotes/origin/master": "218d296b56f14cc895471f6d9ea0c281",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/ae9c909892f3e4e920bc71d00474743ad34ec0": "9df1fd0f3a4f0ce9072e350a929d4630",
".git/objects/09/97810f9b2e13085f186fe2d5e709f2ecf6c3c6": "f35f025b5ecbe67a68d5f635e203fa21",
".git/objects/0a/5d5fe830bc2604bf1d8f31ec1a52a5839517f2": "2d98040ff5f2368255d87dd25a859f68",
".git/objects/0f/a13e4b9f87b4895226cb8aee2be5b497027cf3": "ab7eacce391d37a8a3a8aa3d8c2c185f",
".git/objects/0f/f73facb7acf3ec773e17358adc081914dea805": "7a5ddaa26b44c61559da5f11cbc7fbf8",
".git/objects/21/21cd9c45b27372e422f287ec40aec8bbf99abf": "caf5643a91e0bc207f3b1397cef34ef3",
".git/objects/29/98ffe499240ceb49ef8ef3f8258483b7df47dc": "d72b61a4ab456b4189ba9a35beef536a",
".git/objects/2e/2e337f73047fd95855eeced76eab1487d58fb7": "9a3bf9b6e4119958c80e30d703a0a1a3",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3e/793310bc0d74754d9b62c8083ae7d6797c4b8f": "30556ddfc0182f493e0723dd95f5a6f2",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/41/9480d8ab604a95fca4cb6ec61994d889269bc4": "b8329afd837b30477f8af2df1862704b",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/86b30ecbe509828e6851bd5e3feca9c31d2d6e": "b60d39547c17f6d83d1cfcd5baffba6a",
".git/objects/50/17eca20e91c89072f7682a558cffc0efc955a2": "b75697118750eadcd498e28fe8ba5239",
".git/objects/50/e1c9143f5748a9c0dca1e6715742717fc68a8a": "c77147d0470cf28a6bdd81ba5aedf11a",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5c/0f45cf38c5796581376b6be03b5fe9409d1903": "0be60df2d2a28ca7597cb7dad65ee970",
".git/objects/5c/8be81104b4b7c9a707f6778696076d7ca9532a": "6c1b1aa8effdc4bb8abb48b490b2cede",
".git/objects/61/c27ca2b1bbd84ec509dffded248ad1ba53bdc6": "5a72a6f8ff3d1dc0c4f1023369973dc5",
".git/objects/67/14f1c1e7bf5f915dc359e8ca5cef471ae4ba61": "01d1575310aad2e9fb53b1d165a7bb44",
".git/objects/67/67c746483803b37ddc82e42f213689995e11ca": "4a700b699543540dc956b3830474b6f4",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/74/8dad12755afee93c19b2951b6f0f221b892db2": "079ae0bfa67b5f0d6ebf2bbc9728911e",
".git/objects/7f/4e9f32ab4c1ddfd8ac8f2814c4a097eea9d4d7": "252b59591861d835a5a658cd3003c6ae",
".git/objects/80/101815c537d8dccde188d9627a965a9819a146": "346c5deb2a33fcbecfe7b3359808d229",
".git/objects/81/ab8e191e9feea0a2b2d4d1f2784be0e1544981": "6ac3e6f3713ba83ac0b415ccce899b4b",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/92/22d0eaef3a74cb9eb955285847a06e9618c406": "3a4c259eadd85288f5146f0f28885203",
".git/objects/94/c85797b429a2f8f167869f652fef44893ea8d3": "80e802a62f9879d82092c55d2ddda836",
".git/objects/96/7f100eca0c7d3036ccd0bf72b245824aa25d51": "5fd011ad94498e96f899f9e307e6aad1",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/98/831adf05d455dc2c091ecc12bc1e072b04d2c0": "cfe7cd0b026bfc792ae23b6fa61009c2",
".git/objects/a0/ebb4c41831eeaa0f27e822d5ab1301a0297965": "f1c1ff4eb79b6b434a64378639a2491f",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b6/0c8116aec81e0288986fb8141fa244443cf82e": "21aa29b0b2af7c5ee54769b971e2e61c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/78a4d5063a8191c8698c122f809a8319b7c098": "6c006c5aeccb6c8a83c437c1070807b6",
".git/objects/c1/5ee5026158e71a5547a19d0355caec9472f339": "c47da6fe014eca604cb30ee2b9dd6d48",
".git/objects/c1/a972ab5c9528e0e41b13e62a2f8a5ef643861c": "24c2437745bc5e5b2f721f0e5ceb6bb6",
".git/objects/cc/916506b4ca6b4c1c2e3e32d0be93e2374f4eb5": "ed3f4952db9e5bef38b5ed50b0208b7a",
".git/objects/cd/1709db3a29c19a43edbd8f05d7ea7cd53598f4": "2b2247294637c5e2a52f1f36698f0ccb",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/2367429b01d2b19293550e6ec4dbf49d9fb51d": "8f9002b1bde5f4503db7a02794c7020c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/df/87208b00aaa57fc04a820f6ac97c24e5661db9": "15cc9eb0599875dd0a2836e42e9b5aa0",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b4fe131e532220ba0d38b9900cb48837204fb3": "5e64c4ccdf07b73954af7a5f173be9a9",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f9/6902824cf93fbe0e05a1e070a534baff686c93": "ca9a6f936a55b7532a79ab3e5968aaf9",
".git/objects/f9/70cbe23e79a3bd38701c2e160d18095ec1cb54": "cbccd52793a92382d259281270c10823",
".git/objects/fe/7db58fda5c4d860968ccd65939f1aa3ab2a0f2": "4a23011c673d6b2ed04d901c5b47aaef",
".git/refs/heads/master": "eb79f5415da3cc7e4fd8ccb696ef5759",
".git/refs/remotes/origin/master": "eb79f5415da3cc7e4fd8ccb696ef5759",
"assets/AssetManifest.bin": "3f899cf50037aca7370b5703af0209d3",
"assets/AssetManifest.bin.json": "fb9eae12fee2e0aae5b7bc829c364f49",
"assets/AssetManifest.json": "d607a059f13f0255661235466d15c065",
"assets/assets/android_icon.png": "038ea15b40a395099451862327ebcfc1",
"assets/assets/applovin.png": "7385c6981c8376145b638ddecad36dfb",
"assets/assets/dart.png": "1a089616e2be1ac7c5188c00225772c8",
"assets/assets/facebook.svg": "c198191a25362862a479b09fec117c21",
"assets/assets/firebase.png": "e6ba467265c6799f61c2dbd982565b16",
"assets/assets/flutter.png": "abe34b0551ded954f6759cada7807e3e",
"assets/assets/github.svg": "1f33e75d7b7df995b1609f8573ac8c9b",
"assets/assets/google-admob.png": "f4401e9b7d33665ed49f14c4d35f0781",
"assets/assets/java.png": "d369626edf5a05c55c5ec80bff641241",
"assets/assets/kotlin.png": "005c8240c2e34254dd88c94c0366593a",
"assets/assets/my_flutter_avatar.png": "a6fc0bb5fb8f7c50d06b283332eaa57c",
"assets/assets/projects/1.png": "80288f420784fd9da813db004edec77a",
"assets/assets/projects/2.png": "2ba12792a4e7ad86053c717358212b65",
"assets/assets/projects/3.png": "a0699fd7f07b96e62e5c262648179155",
"assets/assets/projects/4.png": "4b06b5190429d6f1ab203e3e76ac515b",
"assets/assets/projects/5.png": "56ca9edb84f05337fdd44876ce2797ac",
"assets/assets/projects/up_1.png": "37ca0df7e62e98a217a0536f1e430d5f",
"assets/assets/projects/up_2.png": "15738183b6e5b3121d84c3bf19908f86",
"assets/assets/projects/up_3.png": "b04cb83a0e6c2758fabcc8f318680c81",
"assets/assets/projects/up_4.png": "5332e642d52f7cc91fe2a36489f850de",
"assets/assets/projects/up_5.png": "604f3e03e3840ef1f64998ff812f9af4",
"assets/assets/skype.svg": "696463f3cd6254bfd505d20a5cad0a3b",
"assets/assets/telegram.svg": "b91cc43ec2a72c3e999aff767e2e0c76",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9429359b297c6803061f9a02a931743a",
"assets/NOTICES": "14c803bc062b66a3580dcbdefb64d673",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "d7450094216b35eac25f73b269e82dfb",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7b3a3145182a6ab31b65c23aee778a29",
"/": "7b3a3145182a6ab31b65c23aee778a29",
"main.dart.js": "ede294993da50ab76eba95606fc817a4",
"manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50",
"version.json": "9b818ca9511483c901bed1545384376c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a78f18e0c56ca8f36a80e956234eaea1",
"assets/AssetManifest.bin.json": "749677c35cf741e3778ee5b6a4d4dc63",
"assets/AssetManifest.json": "591cd1d022120387bb3d9b71dcbce1d2",
"assets/assets/fonts/niloofar.ttf": "01235be1aff150037e7b20f93d20a6a5",
"assets/assets/fonts/Vazir-Bold.ttf": "8cea4a72681429a50b77de1d8aa609f3",
"assets/assets/fonts/Vazir-Light.ttf": "00f48b2a2bde26034df6e71ef3efadfe",
"assets/assets/fonts/Vazir-Medium.ttf": "4a3887b6bfe4ed0fc41834d6e56b71ae",
"assets/assets/fonts/Vazir.ttf": "398b39dd0060814801cd1cbfe43fe0b5",
"assets/assets/fonts/YekanBakh-Bold.ttf": "1f8444f47ce40a041f91eb4872978e1d",
"assets/assets/fonts/YekanBakh-Bold.woff": "c6add5628686cea18a1bf1986eca83e8",
"assets/assets/fonts/YekanBakh-Light.woff": "321ec5f1f3f421af12a1706948094250",
"assets/assets/fonts/YekanBakh-Regular.ttf": "c258d82a649d47605cabed02c727e78a",
"assets/assets/fonts/YekanBakh-Regular.woff": "d5a611a9f5482e4b378337bb7b9ee87d",
"assets/assets/fonts/YekanBakh-SemiBold.woff": "1150f085f5985681beef5cdc845d3220",
"assets/assets/icon/icon.png": "dba57ea46fc6e80cb1c1aadf9c9a1789",
"assets/assets/images/1024.png": "4a2acc2cc1c478a843b9085b748bfa9a",
"assets/assets/images/banner.jpg": "83c2331efa944421d881e2147f78e0de",
"assets/assets/images/food.jpg": "b0a3040807d9be00beec3b21f065b60d",
"assets/assets/images/melat.png": "baa1c6d903d34468bc6bfeb6db584f52",
"assets/assets/images/meli.png": "dd2085ae72bd307848f6c3e67141657e",
"assets/assets/images/no_pic.png": "6c6ce83652fc03edbcaf331a6afbc5c3",
"assets/assets/images/playstore.png": "99cf7fc42d5d325f520f177f0f733598",
"assets/assets/images/profile_place_holder.png": "eb2b82c57dda81c9aa7546a27b8399c1",
"assets/assets/images/vurall_logo.png": "fa9a06d39665046ac38116f800f9523c",
"assets/assets/language/fa.json": "b0f29787d7af530426d47ecde70a29ea",
"assets/FontManifest.json": "8bea23007e5b741e397e1c45ce986713",
"assets/fonts/MaterialIcons-Regular.otf": "5e1d42dcbd4bad12efa7ca9c7a967de8",
"assets/NOTICES": "976c3a6455e0d58c3c3903ea1dfc33b7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "7c9a8577d45c8bdf6264c76e96e6a0e3",
"firebase-messaging-sw.js": "d85faca906de269529547dfb7bdacd7b",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "8946201e87013a823493e8bd0543c74d",
"icons/Icon-192.png": "1c1db349b2481acdb7b7d54be06deda1",
"icons/Icon-512.png": "70a9270ca9a357b8d4354f83a842b66e",
"icons/Icon-maskable-192.png": "1c1db349b2481acdb7b7d54be06deda1",
"icons/Icon-maskable-512.png": "70a9270ca9a357b8d4354f83a842b66e",
"index.html": "282a9c3416e4e50d7fff4c8fbcfe5894",
"/": "282a9c3416e4e50d7fff4c8fbcfe5894",
"main.dart.js": "83b14cace1e0eb91b377f31873d15f2a",
"manifest.json": "887ca55de7e4cf47901887ca7c32b3e2",
"styles/loader.css": "425b0f9daff3a85e7432b5585e81c96d",
"version.json": "33b3b6efa5a730bcf139591718f1f4a6"};
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

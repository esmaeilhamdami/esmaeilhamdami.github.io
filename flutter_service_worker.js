'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "99db02dd31fececee89f251b79e60b96",
"assets/AssetManifest.bin.json": "566a10e8063a0298413dbae2c7a4c3f8",
"assets/AssetManifest.json": "43994daaa7bb681a3dd81a71dd6d24b9",
"assets/assets/fonts/niloofar.ttf": "01235be1aff150037e7b20f93d20a6a5",
"assets/assets/fonts/Vazir.ttf": "398b39dd0060814801cd1cbfe43fe0b5",
"assets/assets/fonts/YekanBakh-Bold.ttf": "1f8444f47ce40a041f91eb4872978e1d",
"assets/assets/fonts/YekanBakh-Bold.woff": "c6add5628686cea18a1bf1986eca83e8",
"assets/assets/fonts/YekanBakh-Light.woff": "321ec5f1f3f421af12a1706948094250",
"assets/assets/fonts/YekanBakh-Regular.ttf": "c258d82a649d47605cabed02c727e78a",
"assets/assets/fonts/YekanBakh-Regular.woff": "d5a611a9f5482e4b378337bb7b9ee87d",
"assets/assets/fonts/YekanBakh-SemiBold.woff": "1150f085f5985681beef5cdc845d3220",
"assets/assets/images/1024.png": "4a2acc2cc1c478a843b9085b748bfa9a",
"assets/assets/images/banner.jpg": "83c2331efa944421d881e2147f78e0de",
"assets/assets/images/food.jpg": "b0a3040807d9be00beec3b21f065b60d",
"assets/assets/images/melat.png": "baa1c6d903d34468bc6bfeb6db584f52",
"assets/assets/images/meli.png": "dd2085ae72bd307848f6c3e67141657e",
"assets/assets/images/no_pic.png": "6c6ce83652fc03edbcaf331a6afbc5c3",
"assets/assets/images/playstore.png": "99cf7fc42d5d325f520f177f0f733598",
"assets/assets/images/profile_place_holder.png": "eb2b82c57dda81c9aa7546a27b8399c1",
"assets/assets/images/vurall_logo.png": "fa9a06d39665046ac38116f800f9523c",
"assets/assets/language/fa.json": "970b70a1b66e1255761949f3e1f78092",
"assets/FontManifest.json": "f404f1af6a94134fd2dc73e1943c69c4",
"assets/fonts/MaterialIcons-Regular.otf": "56b176de3d92cadda384d4f074764f3c",
"assets/NOTICES": "92fb0d5b38d2f16b723d4814158152c7",
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
"favicon.png": "ef8465a018d90889b9f53cb83bc1064d",
"firebase-messaging-sw.js": "4e74ef268aa3fabd186539db7b0db490",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "33e56e26eb7d6aa16b259f00bd329205",
"icons/Icon-192.png": "790b9d32c639bab5f7c3b5d560b643f8",
"icons/Icon-512.png": "00ad2873ccc0780f53636eac19857e91",
"icons/Icon-maskable-192.png": "790b9d32c639bab5f7c3b5d560b643f8",
"icons/Icon-maskable-512.png": "00ad2873ccc0780f53636eac19857e91",
"index.html": "d3ed2691623078721b1752e6bbe26842",
"/": "d3ed2691623078721b1752e6bbe26842",
"main.dart.js": "8eb05ae8d35f0f5d656326119c9b268f",
"manifest.json": "c0e35b000500edd98a986b9dd4c38773",
"styles/loader.css": "425b0f9daff3a85e7432b5585e81c96d",
"version.json": "bd8cd33f3ce3bec9bac6b5ee6fe53cd2"};
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

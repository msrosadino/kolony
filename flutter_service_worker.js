'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "619b295cf2eca8c4a680f9d06535d4d9",
"index.html": "00d70cb7325624aae9fd8403a7e7a59a",
"/": "00d70cb7325624aae9fd8403a7e7a59a",
"main.dart.js": "62c76530b89302e683e657bb0d3c9abb",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e561a044f40708318236c55f0085db95",
"assets/AssetManifest.json": "b0ac25f43b941999c3581200b9e6d096",
"assets/NOTICES": "a42f7e40d76883e14a79d5be935dd523",
"assets/env": "8bf30d05bcb1bed97bfa19f98fe8c38c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "75d50a7ef9871f15f4e01d15039da2be",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/google-logo.png": "806d533e783d03b9848fa7b20c6ae8ce",
"assets/assets/images/image_unavailable.png": "8426d867e001a4637f8be1d023e559b1",
"assets/assets/images/kolony.svg": "199259c0c9350cdfa4feb41622f05513",
"assets/assets/images/profile.png": "9acfe78b8e1cfbf4c1b1d1f31745b96b",
"assets/assets/images/google.png": "c8b0ecc46108cb9e26323a4e0ff3538c",
"assets/assets/icons/menu/workers.svg": "4df92855413d42cb748f621bd0571336",
"assets/assets/icons/menu/networking.svg": "6285356d251f57ecd75e721a203ea332",
"assets/assets/icons/menu/settings.svg": "0f738e82396610d649fff3937d532acb",
"assets/assets/icons/menu/chat.svg": "5762294c61727a005607c2da981e2071",
"assets/assets/icons/material/campaign_black_24dp.svg": "51b6057ef879bb09de4e232d55b025e3",
"assets/assets/icons/material/share_black_24dp.svg": "c9fbf7cb00dea1aca7b5e5521c2953c9",
"assets/assets/icons/material/groups_black_24dp.svg": "559b99d3ef86c2fb498aaa92deacf093",
"assets/assets/icons/material/list_black_24dp.svg": "6856335fd70e037546268a98ba404828",
"assets/assets/icons/material/comment_black_24dp.svg": "4e800cf1e80a307d0b90f9fe16e185ae",
"assets/assets/icons/material/add_reaction_black_24dp.svg": "510e9fb619f108ff3a5c200ffaf2c23a",
"assets/assets/icons/material/forum_black_24dp.svg": "1565a88bc0afeb90e6949c50dae3316a",
"assets/assets/icons/material/movie_black_24dp.svg": "fa85e88de72b146b15649001dadcd67d",
"assets/assets/icons/material/post_add_black_24dp.svg": "0230f6baa84bcc0b2380dc2cf96f4ed0",
"assets/assets/icons/material/hive_black_24dp.svg": "47699d7e2e8aaf47c3ded0f6bf80f439",
"assets/assets/icons/material/filter_list_black_24dp.svg": "9bee6b17d23522cc241dd9754c8f0eb2",
"assets/assets/icons/material/expand_more_black_24dp.svg": "a8805b8cbedfb1219147341ae1944242",
"assets/assets/icons/material/poll_black_24dp.svg": "da084f0befc932419f9b7da47f198a11",
"assets/assets/icons/material/refresh_black_24dp.svg": "cedb06c845bde04af630244912fb6a35",
"assets/assets/icons/material/add_a_photo_black_24dp.svg": "9fa6c111fa3569a65ee941f0a235a6f5",
"assets/assets/icons/material/local_offer_black_24dp.svg": "07f80887ba68f0ae9981324e41b7d236",
"assets/assets/icons/material/save_black_24dp.svg": "695312f79efb9918db34301aabf28067",
"assets/assets/icons/material/settings_black_24dp.svg": "7edcbe9dec595ac812bb3a1bd7ac0112",
"assets/assets/icons/material/note_add_black_24dp.svg": "2025bbd162a7c97030978a01074a3ec9",
"assets/assets/icons/animated/angry.gif": "0f58aff45ba49def19babe4f709d0ed1",
"assets/assets/icons/animated/sad.png": "595053cd06551435c620c99fc08747e2",
"assets/assets/icons/animated/laugh.png": "2c2953c7b4854270527d8bf0bf9138f9",
"assets/assets/icons/animated/love.gif": "26673ea0fd31e5ce9c311b77f1cd60a2",
"assets/assets/icons/animated/wow.gif": "7e23284320ab99a40c9753b505694ada",
"assets/assets/icons/animated/like.png": "2e2d8a9ca16614e1da69f51dfff2b913",
"assets/assets/icons/animated/angry.png": "bfb5d0f84a93a8649bf1a89a89eb503f",
"assets/assets/icons/animated/sad.gif": "6009383be431f52abe34cd5c3380589a",
"assets/assets/icons/animated/laugh.gif": "37ac07d01a9c670048e5bfcfa7b0efbf",
"assets/assets/icons/animated/love.png": "24062ce35e0a48fb4d2d96bbb5af4e74",
"assets/assets/icons/animated/wow.png": "a0687899898efbd2b7e3f44526c54858",
"assets/assets/icons/animated/like.gif": "a01ec6a27efaa15c8ac138f8f82ee933",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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

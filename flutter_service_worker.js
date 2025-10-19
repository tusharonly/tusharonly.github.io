'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "c630ff9a00c8bceb3dc96451970785eb",
"version.json": "707a01ddcc10ab0f634057b5d16300dd",
"favicon.ico": "fc47993f2e6c1b0d9793bbc315f0fb8e",
"index.html": "d98e806c84519839db640639b9040f42",
"/": "d98e806c84519839db640639b9040f42",
"CNAME": "99367a3f9fa3d5afdfb77dee7fa834f4",
"main.dart.js": "224eaec9dbe8a24918af257086bf11f7",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"icons/apple-touch-icon.png": "5900f948f4aa4a5c11af807e5604256e",
"icons/icon-192.png": "557a7131e6dba990c2f66216fc1ba60f",
"icons/icon-maskable-192.png": "cb24e852dd2cb983e47f0beedcd7155c",
"icons/icon-maskable-512.png": "729dd8475f6f4325007896703c80490e",
"icons/icon-512.png": "1cc5eeb713950f8c85b612e3c8441776",
"manifest.json": "205059a45db9b6ea941a202175fcbc15",
".git/config": "537040029a923cb078722ea2134fd51c",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/3d/6f5e6d8472ca42a6475b9b38eb6541b2d88549": "607b28b9afe8a920e5417f422100d72b",
".git/objects/33/4515f3985c52b126e4d644707fb4008cd5d19a": "e5acc852d6c7339ca7ec7bf00be8fba8",
".git/objects/a4/522b2d6550102a2b1f38074f7a19896f67422a": "6cff5a8fbdc5ccafb0e811c7a8c23168",
".git/objects/da/0d5aa44a8c93eda469f7a99ed8feac32d5b19d": "25d25e93b491abda0b2b909e7485f4d1",
".git/objects/d8/8128adaad90d2fd7cdabe7b36eaaaed0d3a25b": "3d15963af0d77c1cd40702fb7c18fa93",
".git/objects/fd/91dc02c547ada0c68444daf1a9258139c2084e": "99ea279ed5ebba045b889b24801e999f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/cf/0185ff511004f46ae29a05fd210f1c850cfcf2": "69e63edb857b9d1edfac5ab4abcb9e1c",
".git/objects/ca/ff0516ea8f29150216440bd7ea3441d7426f41": "cb022e5e3f717a1092b6c9bf9cc41d4c",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/fe/c1e17ee69481cd5a691614d567a927c3c5aada": "9b68c822db2de58c834b01ea5afc58b1",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ed/94776be2c62d0deca9654a6ed674e97ecc0b08": "08713de7f80d6f34ebcad4db66d94b7a",
".git/objects/ed/e4a00c50d14d8d5849a2817c3fd7f8789ed091": "ae35307473b171f716e949b57b07c71b",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/11/e103b8b249a53c5648de8ec74a6fbe61e88519": "17b379d06af5e3dc2d9e6e7e879d4e87",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/72/3c8813cb1f90c50eb8cd3d34488bb66a012849": "f1c78af2e4f197e5bd9b3ac73246cdc0",
".git/objects/2a/0710794f5a7802618c3ed6723f55619489476b": "8769240a97167702fff995722c0516dc",
".git/objects/38/1e736c9b34e4e21fa6566aac2257d0752ccfec": "15b71c64eb0081d4974b5a553573b2fb",
".git/objects/00/4e82918051930747d5a00d4d2b17fb11c47d25": "db2aa91e76091dcb123fc30c902930b5",
".git/objects/6e/4750e7b43c896f4e5c42dcade9f9dc777ac80c": "c9dbdb23738edec8f3d97499d30841b9",
".git/objects/5d/01fdbb2e8ea6a87924580321040408a64d39bc": "6d6325ff3b347c51eaaa1d9ad9f9a577",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/01/8c0e34bbbde0128f68ebbe9b2e978dd047f76b": "b776d5beb541f865d107b42d95f19b0b",
".git/objects/52/e745cbed34a93f1360dbdfdb67c1ced3c6cceb": "2158c44560845bb686e0054f3534b849",
".git/objects/90/c2a9164b465aa518600b20c597560fed8585fd": "141c30495bfcb4c4769c58f044a9499c",
".git/objects/90/c8ff99235575650462ff4a93f396f9fec3dfce": "0498a66fc1b6ddd5b5860d7de806d019",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/0db4c477facc8837a950005c2dc677d9d67fbf": "2be8bd394c189a743bed7f97df78cedb",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/d5/cb9cd0ea763c3cb5d3a26c45bebc5968362531": "1a5239c9c3e1a7c8b2eac8287e2ac620",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/f1/169d476cd41937f999e132cf7adabcbabaefd9": "0969c5dff49e23d009fa3e420dd276f0",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/f8/40a19246984dedc1a2e55754260124b982a3bc": "e2d28e96c0ab3e54e00d7da665808759",
".git/objects/f8/21cab4ffc17a0832ab30adfaac19f05caea45d": "e5280ffac5bbc007be8d10aec5338a5e",
".git/objects/2c/b6baaedeb63ac7bfe36757b510134905de7ab5": "59ff20a9cc30fd7e75488ff17fb8f986",
".git/objects/79/30ce117c8cfeb5bd5c81285517b84a76fb1241": "82d7fd27b62c279400892a8d98d1c600",
".git/objects/1b/b91c4b3d69a24590c35586ee9a39b3b57ca969": "b5b396ca6046c937da14a85934739fa6",
".git/objects/1b/b2e5e103e331307454e55852abbfc6a3a5af5a": "f68640bd6ce57384575cfd243db580ad",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/12/9b11ef15e2c9363836c22e33b1e0169e563be6": "bd97c67a5bcefab65f699aef224880de",
".git/objects/85/eb45cab384ad4365453c20bf337957f18328b4": "d19d47a9838bbd4a6dde11c05f870b0a",
".git/objects/49/0cf4c42a856dea4e81c0a6bb6fb9331b0b1aec": "ad984becc7153539ddd7960e756ee2eb",
".git/objects/2b/4608bbb14381e1f4d26b574f03bf46f0c0ec8d": "173fbd63538f2d61063bcf8fa129390d",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5709a533564116d84f3334566eb2b265",
".git/logs/refs/heads/main": "403fce0df90bac2216218db4cf136c84",
".git/logs/refs/remotes/origin/main": "f37600508ed2fd6704a763b971dda034",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "55b3f2e672147ffeaa6f236ea90d9a36",
".git/refs/remotes/origin/main": "55b3f2e672147ffeaa6f236ea90d9a36",
".git/index": "7e765c0d58961e3364317fac4b242162",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "4266e2723aee56be4a64d7e8dddcfc1b",
"assets/NOTICES": "001eca04c46ace1de5a720288923000e",
"assets/FontManifest.json": "fd495f2745fe7225cecefd6aab168283",
"assets/AssetManifest.bin.json": "f3a43293a5d9c60afe32fb11fe5084f7",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "4644e1e7f782b2b8b16c4b4f3dc4abf2",
"assets/fonts/GeistMono-ExtraLight.ttf": "e7f9a2f530a0f2ad5c3bc22300d1eda7",
"assets/fonts/GeistMono-SemiBold.ttf": "6c7bbbe15663efc041660748f76d5066",
"assets/fonts/GeistMono-Light.ttf": "4e2a23483809f30c255742770cc2e9d4",
"assets/fonts/GeistMono-Medium.ttf": "65338e9aa9047e38c2b84322bdf53d31",
"assets/fonts/GeistMono-Black.ttf": "518f4334de2610b407a70589efb9078d",
"assets/fonts/GeistMono-ExtraBold.ttf": "dfdbafc34608ce331ead0789a8102d9c",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/fonts/GeistMono-Regular.ttf": "d7346858b7c741e8ba4dcecea1f99cdf",
"assets/fonts/GeistMono-Bold.ttf": "4327d7e6147141a0945c4143a6d227ae",
"assets/fonts/GeistMono-Thin.ttf": "b8b2257e819738246ae0a8aa0654370f",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
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

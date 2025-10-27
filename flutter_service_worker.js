'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "0de668d60218fc35baa835c00798b78c",
"version.json": "707a01ddcc10ab0f634057b5d16300dd",
"favicon.ico": "fc47993f2e6c1b0d9793bbc315f0fb8e",
"index.html": "3a81708caea68a11ccfbc42e2d2d21c7",
"/": "3a81708caea68a11ccfbc42e2d2d21c7",
"CNAME": "99367a3f9fa3d5afdfb77dee7fa834f4",
"main.dart.js": "b64edd809fd198d9e4dec12519c7b637",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"icons/apple-touch-icon.png": "5900f948f4aa4a5c11af807e5604256e",
"icons/icon-192.png": "557a7131e6dba990c2f66216fc1ba60f",
"icons/icon-maskable-192.png": "cb24e852dd2cb983e47f0beedcd7155c",
"icons/icon-maskable-512.png": "729dd8475f6f4325007896703c80490e",
"icons/icon-512.png": "1cc5eeb713950f8c85b612e3c8441776",
"manifest.json": "e03c2359d282231e8d44782f835000db",
".git/config": "537040029a923cb078722ea2134fd51c",
".git/objects/61/a562b9401f6d36ddca5d1e08e4cb84c436e96f": "566582446d93a8d74fc30803a4175fb4",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/04/407870139d9c737d0beddde77ab1144c1c3ec4": "536827d0157e34ea415b988c78929a35",
".git/objects/3c/ca5cbd35a84ce0658b4515067bf28925c35121": "0c10a4080fae3e4a33cac4b60075b380",
".git/objects/3c/89fd2fc595bd886f2fbd174afcef3d2b63b197": "61a83aa4f902c7e03664e93fa866b101",
".git/objects/3d/6f5e6d8472ca42a6475b9b38eb6541b2d88549": "607b28b9afe8a920e5417f422100d72b",
".git/objects/0b/e935f00854e23405587235a5c087d43218118b": "c0ed7f9b1164bcae71ca697cc153954a",
".git/objects/33/4515f3985c52b126e4d644707fb4008cd5d19a": "e5acc852d6c7339ca7ec7bf00be8fba8",
".git/objects/9c/d3de3d10c2c6c95ae51904bd86894a2fa4808b": "f97ae7261fbc767f8998e902253e743e",
".git/objects/a4/522b2d6550102a2b1f38074f7a19896f67422a": "6cff5a8fbdc5ccafb0e811c7a8c23168",
".git/objects/a3/563f021cd79c08c3593d132d69c8c0eb95878f": "caf0fdbeb9c47a874438f63711e9e6c2",
".git/objects/a3/dcd0dba3c30703ea816319aaee26f1e531d843": "51c34e55e0596054068694fa25d59473",
".git/objects/d9/e5773868255af8282606358f3f047ab8bea586": "a1da60113f9f71ef64e808c2c9fcbaa0",
".git/objects/da/0d5aa44a8c93eda469f7a99ed8feac32d5b19d": "25d25e93b491abda0b2b909e7485f4d1",
".git/objects/a5/1aa4b8a51cf980c8705311e133f5f8d5c511cd": "bf48c89b07086c771a249ff8974d96d8",
".git/objects/bd/82295412dbb9b35e67f581ba86416d9be27855": "a77ac7a8a5863544c2b14d06fd3bb009",
".git/objects/bd/aae37722d78b89246af16a5776cce90a7569ef": "ac52694aefac1e7edb622a58af0e2ed1",
".git/objects/ae/45ffb365f078eee501b358fc369b36d293fa11": "7a76e70d4437ed70da23e22a4708e40c",
".git/objects/d8/8128adaad90d2fd7cdabe7b36eaaaed0d3a25b": "3d15963af0d77c1cd40702fb7c18fa93",
".git/objects/e5/94a9998f7657f730edb641aaa731135ddaee9a": "6f4be74c818911bc7d38d64295daa970",
".git/objects/f3/2b2164c6018299ac6faf90298ab92909b3c95d": "029f3eb98a73912cb870800bd3ad6031",
".git/objects/ee/f0ab7c7fa2f24206e559badf5e6964ad6cca81": "5ec535d887f34f2808f5140a47275a6c",
".git/objects/fd/91dc02c547ada0c68444daf1a9258139c2084e": "99ea279ed5ebba045b889b24801e999f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/a6be26cd2ab7c368af4885d62c79cf519e8aad": "1c959d10787cfab1b32ea713288c8dcf",
".git/objects/f2/c1a93608899d0210522e685bd3875a650bba4d": "c6b530a108d0c52f50d7eeea25f04062",
".git/objects/cf/0185ff511004f46ae29a05fd210f1c850cfcf2": "69e63edb857b9d1edfac5ab4abcb9e1c",
".git/objects/ca/ff0516ea8f29150216440bd7ea3441d7426f41": "cb022e5e3f717a1092b6c9bf9cc41d4c",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/fe/ea6a4003872c253c50ac322d70eac5a660ef42": "c28c3e737c0dd7616b977c0fd090f485",
".git/objects/fe/49180add4d6070e86619bb12f2bc7510e2f0ae": "0c1d35aecd1f93785c48a1f309562b27",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/fe/81b05602f95f56c13fa6124c717a0b5cf0fa2e": "78b53e191f07311a6d779d3745750196",
".git/objects/fe/c1e17ee69481cd5a691614d567a927c3c5aada": "9b68c822db2de58c834b01ea5afc58b1",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ed/94776be2c62d0deca9654a6ed674e97ecc0b08": "08713de7f80d6f34ebcad4db66d94b7a",
".git/objects/ed/e4a00c50d14d8d5849a2817c3fd7f8789ed091": "ae35307473b171f716e949b57b07c71b",
".git/objects/4e/3a1c5ba27a521df6529c8f27994643d6c4a2d7": "9937f630b18c92d1519597a06c1b3d8b",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/18/15a8671b243d96288385ea681aec97a62610c8": "07a96521a2873b269e08bb1ff57300e3",
".git/objects/27/4db98f32b7112ecc80092da43a1ef48578c1fb": "99954f16d7144a62392fe0bfd4251ae1",
".git/objects/11/e103b8b249a53c5648de8ec74a6fbe61e88519": "17b379d06af5e3dc2d9e6e7e879d4e87",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/7c/819a633cc604e4f3dcb21d5b01ab47a60f12ea": "306eac4ec875388ecf6a26778938ec0e",
".git/objects/1a/a7b5ec1c431b0a8e6f301c866892bab51784e4": "2f03cc78ff153e08bdfea8c51c15ebc7",
".git/objects/7b/9edf2cebcf421df5883141b03f3db47df7cc31": "ea19dcbb7bf93b790c11d4dfa2503404",
".git/objects/26/41d45301397d74800bcdb943a352f9acb25e76": "157e55c214e37b4c7cbd46d9c03eb49f",
".git/objects/26/0f1484911884ba5ecc7a0254d95027157b9ea6": "d3a2a5bcbcd1459045ca2cf12678b33b",
".git/objects/21/2711f8e28d8a3e2ef9030f928fe020f8b871d1": "fb7b4afe8cb5caa80901f194e6ced79c",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/72/3c8813cb1f90c50eb8cd3d34488bb66a012849": "f1c78af2e4f197e5bd9b3ac73246cdc0",
".git/objects/2a/0710794f5a7802618c3ed6723f55619489476b": "8769240a97167702fff995722c0516dc",
".git/objects/9f/f719e592b79aab6511f5b49b2ddb18ee0c437e": "07ddfec9369ab45ac241eed469666932",
".git/objects/38/1e736c9b34e4e21fa6566aac2257d0752ccfec": "15b71c64eb0081d4974b5a553573b2fb",
".git/objects/00/4e82918051930747d5a00d4d2b17fb11c47d25": "db2aa91e76091dcb123fc30c902930b5",
".git/objects/6e/4750e7b43c896f4e5c42dcade9f9dc777ac80c": "c9dbdb23738edec8f3d97499d30841b9",
".git/objects/5d/01fdbb2e8ea6a87924580321040408a64d39bc": "6d6325ff3b347c51eaaa1d9ad9f9a577",
".git/objects/62/2b6423458b1bbc83e3d4114efdc19d638e49ab": "7b24a6d1f6384ac89b7106df9dcaa511",
".git/objects/62/17cb04c924c1167516de703abe8afd38782b06": "5801f2d53937c0a0497b96518f0bcbc4",
".git/objects/62/5786da6f37982a916fe83c9dba8667b6dc7155": "10d3011204232f7ea3d952e79cadb550",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/3f/2ba3d31ae9b3072406797752aba7a713d427e9": "f51c3c4903df10d7348b876727cf4633",
".git/objects/08/123fa6dd816d751e0267f4bccd7b1ccee52520": "86afb3b547b4770a5634ff9f9dd50159",
".git/objects/08/903fa33599ac3057f0abdb7e0ba316dd9ea5c4": "2fad0a2bb4e5d5514b1e57bf70526b46",
".git/objects/08/77ec09fb7706265f8474b3eda26c0f5595d411": "6d6602ed6bd7403bd86308e709f30de8",
".git/objects/01/8c0e34bbbde0128f68ebbe9b2e978dd047f76b": "b776d5beb541f865d107b42d95f19b0b",
".git/objects/39/39af148ac5e638d561e78bd15615d458c1f232": "e63fd5159559c1347100507c0f8793d3",
".git/objects/52/e745cbed34a93f1360dbdfdb67c1ced3c6cceb": "2158c44560845bb686e0054f3534b849",
".git/objects/97/07d422055a015f601a3565245cd0f9c6827621": "37ba00c2de6b5f4113cab07834bf9113",
".git/objects/97/3d47ff17cace7afb9afc6eb93f3f0f9e7c4490": "0507bd78796ed26055375949ccb8897e",
".git/objects/63/89057eb21d4ee19729e1c04b900ac9dcfb1f4b": "d749407c84e6d3e4c8ca565986270ee4",
".git/objects/64/d2b91eac646e59a86d13e465c90b94c1f78b16": "6f7a92c22b41f4913d3f35bfe84ec354",
".git/objects/90/c2a9164b465aa518600b20c597560fed8585fd": "141c30495bfcb4c4769c58f044a9499c",
".git/objects/90/c8ff99235575650462ff4a93f396f9fec3dfce": "0498a66fc1b6ddd5b5860d7de806d019",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/0db4c477facc8837a950005c2dc677d9d67fbf": "2be8bd394c189a743bed7f97df78cedb",
".git/objects/a7/66876a4dc5fd3aa9ac539d75e97530727b9afe": "f9606998115743c7c98f81ae31f05d2d",
".git/objects/dd/60689c2540db19144e3448b063ceb9fa3d9274": "30c246769d217231c9756c988e799bd7",
".git/objects/dc/b5cd3c8b559f3c4862c912bf9fee3631e147a9": "cc9bc18da195601ecef3335db863e3a9",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/d5/cb9cd0ea763c3cb5d3a26c45bebc5968362531": "1a5239c9c3e1a7c8b2eac8287e2ac620",
".git/objects/d2/866441a37be92053cfff8f79d99545f7000ba6": "0624204a19d4085ac1fba1192dc5dd0c",
".git/objects/de/4d613ae6275cf30e6ce7899340c5514e9fbc6f": "9fe71d597b0bdb0566be37311fa9fde8",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/cc/2eb153989aa62a83d6ad2350cf1a3ac61d4646": "f04ae90fd09cf87ae70eac43975b5172",
".git/objects/f9/ddf4cc688874f248c9fe8819a1066d52684b1b": "eb6c869390bf4e77d94f2e6c35a0ce99",
".git/objects/f0/efc78b1d75af22d55da5246d3ff641cc986b8d": "3df33c03b99ba59e310b6bf3f14f6bae",
".git/objects/c2/625de4ee5df40c65a31f2574235b6310fd3ce8": "dbbe9d63d240430aa8fecbc7399734ae",
".git/objects/f1/169d476cd41937f999e132cf7adabcbabaefd9": "0969c5dff49e23d009fa3e420dd276f0",
".git/objects/cb/3b20e4c8585dcd2c855340c9b787045a385bfe": "5cb94c3f1a56bb049f398ee6c64b8c39",
".git/objects/cb/9031b5e72d2fa83dbcb820d7cd0e66ed9428fa": "a042bd96417f6876dd2b3315312643ca",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/f8/40a19246984dedc1a2e55754260124b982a3bc": "e2d28e96c0ab3e54e00d7da665808759",
".git/objects/f8/21cab4ffc17a0832ab30adfaac19f05caea45d": "e5280ffac5bbc007be8d10aec5338a5e",
".git/objects/2c/b6baaedeb63ac7bfe36757b510134905de7ab5": "59ff20a9cc30fd7e75488ff17fb8f986",
".git/objects/79/30ce117c8cfeb5bd5c81285517b84a76fb1241": "82d7fd27b62c279400892a8d98d1c600",
".git/objects/1b/b91c4b3d69a24590c35586ee9a39b3b57ca969": "b5b396ca6046c937da14a85934739fa6",
".git/objects/1b/b2e5e103e331307454e55852abbfc6a3a5af5a": "f68640bd6ce57384575cfd243db580ad",
".git/objects/1b/1c14bf7cc030bd258b3cb7eabf1a8323639108": "2ef0bbb913b5b783e83280c072a6e101",
".git/objects/77/bf6d0addde666068f123343de7f81422302d9e": "5141db65dc3579f78e9a3b6256530de8",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/4f/e5e28ddba84c3030a69266199ac486a30a2126": "30393056c2f7323cac441443a7892ab8",
".git/objects/8d/6192f0834ccfcd5a3300d98d36af8f553557e5": "f670f58d381d6de1c3c7e5f03212b9a3",
".git/objects/12/1d0c187eecbe2fd7b1291c712ca663bb319fde": "a9ef3ec41c35be5d51f88f140624c0e1",
".git/objects/12/9b11ef15e2c9363836c22e33b1e0169e563be6": "bd97c67a5bcefab65f699aef224880de",
".git/objects/85/eb45cab384ad4365453c20bf337957f18328b4": "d19d47a9838bbd4a6dde11c05f870b0a",
".git/objects/1d/8ef6ee104e2f77bb9fdf5c36e2aa98f27ea466": "6a0de2a21edd308fdfce0e5fb5e71f0a",
".git/objects/71/c2342124650c268747e189d09edba989e7b74f": "e4bc1b08ecdf257277ec58bd078150f2",
".git/objects/49/0cf4c42a856dea4e81c0a6bb6fb9331b0b1aec": "ad984becc7153539ddd7960e756ee2eb",
".git/objects/49/d125f356508673fd9f5f4007e9a7ac55b12d51": "a71870329cb1327eecb8045eb1ef6b60",
".git/objects/40/2e7abff5670f805a3849564c547f178d52a942": "0e6401d95ed1e3754fcce6824f0e3e45",
".git/objects/2b/4608bbb14381e1f4d26b574f03bf46f0c0ec8d": "173fbd63538f2d61063bcf8fa129390d",
".git/objects/78/69de2371db6748b18c9ab8b6c0867c3dac9b23": "3268d4651230ff8cb42fc5a4fffcc23b",
".git/objects/7f/1c417b62d5d6d92b09205d65cf199592d1ec22": "336baa52ba94e7cbfc9c36deca7f5717",
".git/objects/7f/5b37f76643bc1d39b5490d2380ab9c766eb8fc": "2214cd46dc1f4226e9cdfee6ebafdf9b",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "db94ba93e27205dfb4a5942131801b48",
".git/logs/refs/heads/main": "64f6a3ed3f81ba67a1cc860ff35c582b",
".git/logs/refs/remotes/origin/main": "5a6db35bdf1804d878c8e76ac2549509",
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
".git/refs/heads/main": "e3ea373f69c90b4cc7e482ddbe1ae54d",
".git/refs/remotes/origin/main": "e3ea373f69c90b4cc7e482ddbe1ae54d",
".git/index": "0e878590c1a66b9f769484d7a4c923b7",
".git/COMMIT_EDITMSG": "3e67d973c1b346406a652bb5e45d976c",
"assets/AssetManifest.json": "82cbdb03bfc299f511a9217964f4fa28",
"assets/NOTICES": "3c140a24e380c7e4c70e575bbbcbfa8c",
"assets/FontManifest.json": "e432279dfa4833633e0809d029223e8f",
"assets/AssetManifest.bin.json": "892279118643721d05299e5bd767fb8f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "cf4748e223926f378c7b29a827db944e",
"assets/fonts/MaterialIcons-Regular.otf": "3b7672105300615d132b94f021f7b1a5",
"assets/fonts/GeistMono-Regular.ttf": "d7346858b7c741e8ba4dcecea1f99cdf",
"assets/assets/gif/cat_pixel.gif": "673a8c6c39a0d4f2dd0c9d611c3c040b",
"assets/assets/gif/cat_typing.gif": "c51f5ad5cc105c0b2cc6b278a04e4a82",
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

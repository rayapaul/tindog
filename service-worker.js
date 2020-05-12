const static = "site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/index.js",
  "/images/bizinsider.png",
  "/images/dog-img.jpg",
  "/images/iphone6.png",
  "/images/lady-img.jpg",
  "/images/mashable.png",
  "/images/TechCrunch.png",
  "/images/tnw.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(static).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })
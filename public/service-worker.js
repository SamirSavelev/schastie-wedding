// public/service-worker.js
self.addEventListener("install", (event) => {
  console.log("Service Worker: Install");

  event.waitUntil(
    caches.open("image-cache").then((cache) => {
      // Добавляем изображения из массива imageAssets
      cache.addAll([
        "/assets/backgrounds/1.jpg",
        "/assets/blog/articles/article-1.webp",
        "/assets/blog/articles/article-2.webp",
        "/assets/blog/articles/article-3.webp",
        "/assets/blog/articles/article-4.webp",
        "/assets/blog/articles/article-5.webp",
        "/assets/blog/articles/article-6.webp",
        "/assets/blog/articles/article-org-hero.webp",
        "/assets/blog/header.jpg",
        "/assets/book/cover-1.png",
        "/assets/book/cover-2.png",
        "/assets/book/cover-3.png",
        "/assets/book/cover-4.png",
        "/assets/book/cover-5.jpg",
        "/assets/book/cover-6.png",
        "/assets/book/spread-1.png",
        "/assets/book/spread-2.png",
        "/assets/book/spread-3.png",
        "/assets/book/spread-4.png",
        "/assets/book/spread-5.png",
        "/assets/book/spread-6.png",
        "/assets/book/spread-7.png",
        "/assets/hero/01.jpg",
        "/assets/hero/02.jpg",
        "/assets/hero/1.jpg",
        "/assets/hero/10.jpg",
        "/assets/hero/11.jpg",
        "/assets/hero/12.jpg",
        "/assets/hero/13.jpg",
        "/assets/hero/14.jpg",
        "/assets/hero/15.jpg",
        "/assets/hero/16.jpg",
        "/assets/hero/17.jpg",
        "/assets/hero/18.jpg",
        "/assets/hero/19.jpg",
        "/assets/hero/2.jpg",
        "/assets/hero/21.jpg",
        "/assets/hero/26.jpg",
        "/assets/hero/3.jpg",
        "/assets/hero/4.jpg",
        "/assets/hero/5.jpg",
        "/assets/hero/6.jpg",
        "/assets/hero/7.jpg",
        "/assets/hero/8.jpg",
        "/assets/hero/9.jpg",
        "/assets/home/why-us-hero.jpg",
        "/assets/portfolio/-269.jpg.webp",
        "/assets/portfolio/0209.jpg.webp",
        "/assets/portfolio/123A5147.jpg.webp",
        "/assets/portfolio/header.jpg",
        "/assets/portfolio/home/1.jpg",
        "/assets/portfolio/home/2.jpg",
        "/assets/portfolio/home/3.jpg",
        "/assets/reviews/home/1.jpeg",
        "/assets/reviews/home/2.jpeg",
        "/assets/reviews/home/3.jpeg",
        "/assets/reviews/home/4.jpeg",
        "/assets/reviews/home/5.jpeg",
        "/assets/services/chat.webp",
        "/assets/services/header.jpg",
        "/assets/team/elena.png",
        "/assets/team/lyudmila.png",
        "/assets/we/header.jpg",
        "/assets/logo.png",
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.url.includes("assets")) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request).then((response) => {
          return caches.open("image-cache").then((cache) => {
            cache.put(event.request, response.clone());
            return response;
          });
        });
      })
    );
  }
});

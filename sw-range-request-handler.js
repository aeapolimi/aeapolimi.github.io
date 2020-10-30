// Add Range Request support to fetching videos from cache
// Funziona con gastby-plugin-offline con workbox v.4 se aggiornato vedi 
// https://dev.to/glukmann/how-to-get-videos-to-work-in-safari-with-gatsby-and-service-workers-4edc
workbox.routing.registerRoute(
    /.*\.mp4/,
    new workbox.strategies.CacheFirst({
      plugins: [
        new workbox.cacheableResponse.Plugin({ statuses: [200] }),
        new workbox.rangeRequests.Plugin(),
      ],
    }),
    'GET',
  );
  
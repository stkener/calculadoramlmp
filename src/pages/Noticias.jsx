
{/*import { useEffect, useState } from "react";

export default function Noticias() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const feeds = [
      "https://www.clarin.com/rss/economia/",      
      "https://www.perfil.com/feed/economia/",
      "https://news.google.com/rss/search?q=site:infobae.com+economia&hl=es-419&gl=AR&ceid=AR:es-419",
      "https://news.google.com/rss/search?q=site:lanacion.com.ar+economia&hl=es-419&gl=AR&ceid=AR:es-419",
      "https://news.google.com/rss/search?q=site:ambito.com+economia&hl=es-419&gl=AR&ceid=AR:es-419"
      
    ];

    Promise.all(
      feeds.map((url) =>
        fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
            url
          )}`
        ).then((res) => res.json())
      )
    )
      .then((results) => {
        //AGREGADO
        console.log(
          results.map((r, i) => ({
            feed: feeds[i],
            cantidad: r.items?.length
          }))
        );
        const allNews = results.flatMap((data) => data.items || []);

        // eliminar duplicados por link
        const uniqueNews = [
          ...new Map(allNews.map((item) => [item.link, item])).values(),
        ];

        // ordenar por fecha
        const sorted = uniqueNews.sort(
          (a, b) => new Date(b.pubDate) - new Date(a.pubDate)
        );

        setNews(sorted.slice(0, 15));
      })
      .catch((err) => console.error("Error cargando noticias:", err));
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 text-white">
      <h1 className="text-3xl font-bold mb-10">Noticias</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((item, index) => {
          const image =
            item.thumbnail ||
            item.enclosure?.link ||
            "/news-placeholder.jpg";

          return (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-zinc-900 rounded-xl overflow-hidden border border-zinc-700 hover:border-orange-500 transition"
            >
              <img
                src={image}
                alt={item.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h2 className="text-xl font-semibold hover:text-orange-400 transition">
                  {item.title}
                </h2>

                <div className="flex justify-between text-sm text-gray-400 mt-3">
                  <span>{item.source || item.author || "Google News"}</span>
                  <span>
                    {new Date(item.pubDate).toLocaleDateString("es-AR")}
                  </span>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}*/}

import { useEffect, useState } from "react";

export default function Noticias() {

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getImage = (item) => {

    if (item.thumbnail) return item.thumbnail;

    if (item.enclosure?.link) return item.enclosure.link;

    if (item.media?.content?.url) return item.media.content.url;

    if (item.media?.thumbnail?.url) return item.media.thumbnail.url;

    if (item.description) {
      const match = item.description.match(/<img.*?src="(.*?)"/);
      if (match && match[1]) return match[1];
    }

    return "/news-placeholder.jpg";
  };

  useEffect(() => {

    const feeds = [
      "https://www.clarin.com/rss/economia/",
      "https://www.perfil.com/feed/economia/",
      "https://www.ambito.com/rss/pages/economia.xml",
      "https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/section/economia/portada",
      "https://www.elobservador.com.uy/rss/pages/economia.xml"
    ];

    Promise.all(
      feeds.map(url =>
        fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}`
        )
          .then(res => res.json())
          .catch(() => ({ items: [] }))
      )
    )
    .then(results => {

      const allNews = results.flatMap(data => data.items || []);

      const uniqueNews = [
        ...new Map(allNews.map(item => [item.link, item])).values()
      ];

      const sorted = uniqueNews.sort(
        (a, b) => new Date(b.pubDate) - new Date(a.pubDate)
      );

      setNews(sorted.slice(0, 15));
      setLoading(false);

    })
    .catch(err => {
      console.error(err);
      setError(true);
      setLoading(false);
    });

  }, []);

  if (loading)
    return (
      <div className="text-white p-10">
        Cargando noticias...
      </div>
    );

  if (error)
    return (
      <div className="text-red-400 p-10">
        Error cargando noticias.
      </div>
    );

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 text-white">

      <h1 className="text-3xl font-bold mb-10">
        Noticias
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {news.map((item, index) => {

          const image = getImage(item);

          return (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-zinc-900 rounded-xl overflow-hidden border border-zinc-700 hover:border-orange-500 transition"
            >

              <img
                src={image}
                alt={item.title}
                className="w-full h-56 object-cover"
                onError={(e) => {
                  e.target.src = "/news-placeholder.jpg";
                }}
              />

              <div className="p-6">

                <h2 className="text-xl font-semibold hover:text-orange-400 transition">
                  {item.title}
                </h2>

                <div className="flex justify-between text-sm text-gray-400 mt-3">

                  <span>
                    {item.source || item.author || "Noticias"}
                  </span>

                  <span>
                    {new Date(item.pubDate).toLocaleDateString("es-AR")}
                  </span>

                </div>

              </div>

            </a>
          );

        })}

      </div>

    </div>
  );
}
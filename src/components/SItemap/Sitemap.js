import React from 'react';

function Sitemap(props) {
  return (
<>
    {`<?xml version="1.0" encoding="UTF-8"?>
		<!--	created with www.mysitemapgenerator.com	-->
		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://rob-saunders.co.uk/</loc>
      <lastmod>2023-12-29T22:05:44+01:00</lastmod>
      <priority>0.6</priority>
    </url>
    <url>
      <loc>https://rob-saunders.co.uk/squarespace-web-designer-uk</loc>
      <lastmod>2023-12-29T22:05:44+01:00</lastmod>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>https://rob-saunders.co.uk/budget-web-design</loc>
      <lastmod>2023-12-29T22:05:44+01:00</lastmod>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>https://rob-saunders.co.uk/projects</loc>
      <lastmod>2023-12-29T22:05:44+01:00</lastmod>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>https://rob-saunders.co.uk/contact</loc>
      <lastmod>2023-12-29T22:05:44+01:00</lastmod>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>https://rob-saunders.co.uk/privacy-policy</loc>
      <lastmod>2023-12-29T22:05:44+01:00</lastmod>
      <priority>1.0</priority>
    </url>`}

    {
      props.urls.map(e => {
        return (
          <>
            {`<url>
                <loc>https://rob-saunders.co.uk/budget-web-design-${e.toLowerCase()}</loc>
                <lastmod>2023-12-29T22:05:44+01:00</lastmod>
                <priority>1.0</priority>
            </url>`}
          </>
        )
      })
    }
    {`</urlset>`}

</>

  );
};

export default Sitemap;
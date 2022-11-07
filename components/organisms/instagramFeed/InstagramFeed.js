import Link from "next/link";

export default function InstagramFeed({ instagramPosts }) {
  return (
    <>
      <h2>
        <a href="https://www.instagram.com/yourinstagramhandle/">
          Follow Us on Instagram
        </a>
        .
      </h2>

      <ul>
        {instagramPosts.map(({ node }, i) => {
          return (
            <li>
              <a
                href={`https://www.instagram.com/p/${node.shortcode}`}
                key={i}
                aria-label="view image on Instagram"
              >
                <img
                  src={node.thumbnail_src}
                  alt={node.edge_media_to_caption.edges[0].node.text
                    .replace(/(#\w+)+/g, "")
                    .trim()}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

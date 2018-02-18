import React from 'react';
import Link from 'gatsby-link';

import GalleryImage from '../components/GalleryImage';

export default ({ data }) => {
  const { contentfulGallery: gallery } = data;
  // console.log('gallery data', gallery);

  return (
    <div className="eloisa_fn_content">
      <div className="container">
        <div className="eloisa_fn_title portfolio">
          <h3>
            <span>{gallery.title}</span>
          </h3>
        </div>

        <div className="eloisa_fn_breadcrumbs portfolio">
          <p>
            <Link to="/">Home</Link> / <span>Gallery</span>
          </p>
        </div>

        <div className="eloisa_fn_proofing_category">
          <ul>
            <li>
              <span className="label">Location:</span>
              <span className="value">{gallery.location}</span>
            </li>
            <li>
              <span className="label">Date:</span>
              <span className="value">{gallery.date}</span>
            </li>
            <li>
              <span className="label">Images:</span>
              <span className="value">{gallery.images.length}</span>
            </li>
            <li>
              <span className="label">
                <a className="download" href="#">
                  Download Images
                </a>
              </span>
            </li>
          </ul>
        </div>

        <div className="space70" />
        <div className="elosia_fn_section">
          <div className="eloisa_fn_portfolio_list_wrap" data-column="3">
            <ul className="masonry2 gallery_zoom">
              {gallery.images.map((item, index) => (
                <GalleryImage key={index} item={item} />
              ))}
            </ul>
          </div>
          <div className="space70" />
        </div>
      </div>
    </div>
  );
};

export const query = graphql`
  query GalleryQuery($slug: String!) {
    contentfulGallery(slug: { eq: $slug }) {
      title
      id
      slug
      category
      location
      date(formatString: "M.DD.YYYY")
      description {
        childMarkdownRemark {
          html
        }
      }
      cover {
        title
        sizes(maxWidth: 1800) {
          ...GatsbyContentfulSizes_noBase64
        }
      }
      images {
        title
        description
        sizes(maxWidth: 1800) {
          ...GatsbyContentfulSizes_noBase64
        }
      }
    }
  }
`;

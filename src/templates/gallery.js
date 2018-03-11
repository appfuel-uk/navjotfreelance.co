/* global jQuery:true */
import React from 'react';
import Link from 'gatsby-link';

import GalleryImage from '../components/GalleryImage';

export default class Gallery extends React.Component {
  componentDidMount() {
    /* eslint-disable */

    jQuery('.masonry2').isotope({
      itemSelector: '.item',
      masonry: {},
    });

    jQuery('.open-popup-link').magnificPopup({
      type: 'inline',
      midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });

    jQuery('.gallery').each(function() {
      // the containers for all your galleries
      jQuery(this).magnificPopup({
        delegate: 'a', // the selector for gallery item
        type: 'image',
        gallery: {
          enabled: true,
        },
      });
    });
    jQuery('.gallery_zoom').each(function() {
      // the containers for all your galleries
      jQuery(this).magnificPopup({
        delegate: 'a.zoom', // the selector for gallery item
        type: 'image',
        gallery: {
          enabled: true,
        },
        removalDelay: 300,
        mainClass: 'mfp-fade',
      });
    });

    /* eslint-enable */
  }

  componentDidUpdate() {
    console.log('update');
  }

  render() {
    const { contentfulPortfolio: gallery } = this.props.data;
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

          {/* <div className="eloisa_fn_proofing_category">
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
    </div> */}

          <div className="space70" />
          <div className="elosia_fn_section">
            <div className="eloisa_fn_portfolio_list_wrap" data-column="3">
              {gallery.images && (
                <ul className="masonry2 gallery_zoom">
                  {gallery.images.map((item, index) => (
                    <GalleryImage key={index} item={item} />
                  ))}
                </ul>
              )}
            </div>
            <div className="space70" />
          </div>
        </div>
      </div>
    );
  }
}

export const query = graphql`
  query GalleryQuery($slug: String!) {
    contentfulPortfolio(slug: { eq: $slug }) {
      title
      id
      slug
      description {
        childMarkdownRemark {
          html
        }
      }
      cover {
        title
        sizes(maxWidth: 690) {
          ...GatsbyContentfulSizes
        }
      }
      images {
        title
        description
        sizes(maxWidth: 690) {
          ...GatsbyContentfulSizes
        }
      }
    }
  }
`;

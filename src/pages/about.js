import React from 'react';

import { HTMLContent } from '../components/Content';

export default ({ data }) => {
  const { contentfulAbout: about } = data;
  // console.log('about', about);
  return (
    <div className="eloisa_fn_content">
      <div className="eloisa_fn_page_splitscreen portfolio_page">
        <div className="eloisa_fn_page_splitleft">
          <div className="splitscreen_title">
            <div className="in">
              <div className="title_holder">
                <h1>About Me</h1>
                <p>All about me, my story</p>
              </div>
            </div>
          </div>
          <div className="splitscreen_title_back about">
            <div
              className="bg"
              style={{ backgroundImage: `url(${about.coverImage.sizes.src})` }}
            />
            <div className="eloisa_fn_split_overlay" />
          </div>
        </div>
        <div className="eloisa_fn_page_splitright">
          <div className="in">
            <div className="container">
              <div className="eloisa_fn_about_page_title split">
                <h3>{about.title}</h3>
              </div>
              <div className="space60" />
              <div className="eloisa_fn_portfolio_text">
                <HTMLContent content={about.bio.childMarkdownRemark.html} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const query = graphql`
  query AboutQuery {
    contentfulAbout {
      title
      slug
      id
      coverImage {
        title
        sizes(maxWidth: 1800) {
          ...GatsbyContentfulSizes_noBase64
        }
      }
      bio {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

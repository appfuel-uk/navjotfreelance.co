/* global $:true */
import React from 'react';

import { HTMLContent } from '../components/Content';

export default class About extends React.Component {
  componentDidMount() {
    /* eslint-disable */
    const H = $(window).height();
    const W = $(window).width();
    const navH = $('.eloisa_fn_header_in').outerHeight();
    const splitLeft = $('.eloisa_fn_page_splitleft');
    const splitRight = $('.eloisa_fn_page_splitright');
    const split = $('.eloisa_fn_page_splitscreen');

    splitLeft.css({ height: H - navH });
    splitRight.css({ height: H - navH });
    split.css({ minHeight: H - navH });

    if (W > 768) {
      splitRight.css({ height: H - navH });
    } else {
      splitRight.css({ height: 'auto' });
    }
    /* eslint-enable */
  }

  render() {
    const { contentfulAbout: about } = this.props.data;
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
                style={{
                  backgroundImage: `url(${about.coverImage.sizes.src})`,
                }}
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
  }
}

export const query = graphql`
  query AboutQuery {
    contentfulAbout {
      title
      slug
      id
      coverImage {
        title
        sizes(maxWidth: 700) {
          ...GatsbyContentfulSizes
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

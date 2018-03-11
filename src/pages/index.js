import React from 'react';
import Script from 'react-load-script';

import Gallery from '../components/Gallery';
import { HTMLContent } from '../components/Content';

export default class IndexPage extends React.Component {
  handleScriptLoad() {
    if (typeof window !== `undefined` && window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
    window.netlifyIdentity.init();
  }

  render() {
    const { data } = this.props;
    const { edges: gallery } = data.allContentfulPortfolio;
    const { contentfulHome: home } = data;
    // console.log('gallery', gallery);

    return (
      <div className="eloisa_fn_content">
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={() => this.handleScriptLoad()}
        />
        <div className="eloisa_fn_content_in">
          <div className="space70" />
          <div className="space50" />
          <div className="elosia_fn_section">
            <div className="eloisa_fn_about_wrap">
              <div className="eloisa_fn_about_title">
                <h3>{home.title}</h3>
              </div>
              <div className="eloisa_fn_about_description">
                <HTMLContent
                  content={home.introText.childMarkdownRemark.html}
                />
              </div>
            </div>
          </div>
          <div className="space70" />
          <div className="space50" />
          <Gallery gallery={gallery} />
        </div>
      </div>
    );
  }
}

export const query = graphql`
  query HomeQuery {
    allContentfulPortfolio {
      edges {
        node {
          title
          id
          slug
          cover {
            title
            sizes(maxWidth: 530) {
              ...GatsbyContentfulSizes
            }
          }
        }
      }
    }
    contentfulHome {
      title
      slug
      id
      introText {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import config from '../config/index';
import SharePopup from '../components/SharePopup';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './index.css';

const Container = styled.div``;

const IndexLayout = ({ children, data }) => {
  const { contentfulHome: home, contentfulContact: contact } = data;
  // console.log('data', home, contact);
  return (
    <div className="eloisa_fn_wrapper_all" data-nav-skin="">
      <Helmet
        title={config.siteName}
        meta={[{ name: 'description', content: config.description }]}
      />
      <SharePopup contact={contact} />
      <Header home={home} />
      <Container>{children()}</Container>
      <Footer />
    </div>
  );
};

IndexLayout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default IndexLayout;

export const query = graphql`
  query LayoutQuery {
    contentfulHome {
      title
      slug
      id
      quote {
        childMarkdownRemark {
          html
        }
      }
    }
    contentfulContact {
      id
      twitter
      instagram
      linkedin
      medium
      behance
    }
  }
`;

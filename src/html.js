import React from 'react';

let stylesStr;
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`); // eslint-disable-line
  } catch (e) {
    console.log(e); // eslint-disable-line
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css;
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      );
    }
    return (
      <html lang="en" {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Anonymous+Pro:400,400i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"
            rel="stylesheet"
          />
          <link rel="stylesheet" type="text/css" href="/css/plugins.css" />
          <link rel="stylesheet" type="text/css" href="/css/style.css" />
          {this.props.headComponents}
          {css}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key="body"
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}

          <script type="text/javascript" src="/js/jquery.js" />
          <script type="text/javascript" src="/js/plugins.js" />
          <script type="text/javascript" src="/js/init.js" />
        </body>
      </html>
    );
  }
};

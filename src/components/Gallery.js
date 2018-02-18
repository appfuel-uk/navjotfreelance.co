import React from 'react';
import Link from 'gatsby-link';

import GalleryRow from './GalleryRow';

export default ({ gallery }) => (
  <div className="elosia_fn_section">
    <div className="eloisa_fn_portfolio_list">
      <ul>
        {gallery.map(({ node }) => <GalleryRow key={node.id} item={node} />)}
      </ul>
      <div className="eloisa_fn_discover_portfolio">
        <div className="eloisa_fn_discover_portfolio_in">
          <span>
            <Link to="/about/">Discover My Portfolio</Link>
          </span>
        </div>
      </div>
    </div>
  </div>
);

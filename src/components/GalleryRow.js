import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

export default ({ item }) => {
  if (!item.cover) {
    return null;
  }
  return (
    <li>
      <div className="img_wrap">
        <Img
          sizes={item.cover.sizes}
          alt={item.cover.title}
          title={item.cover.title}
          backgroundColor="#f1f1f1"
        />
        <div className="img_span">
          <Link to={`/gallery/${item.slug}`}>
            <span className="title">
              Look Inside
              <span className="line" />
            </span>
          </Link>
        </div>
      </div>
    </li>
  );
};

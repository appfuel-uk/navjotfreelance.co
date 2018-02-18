import React from 'react';
import Img from 'gatsby-image';

export default ({ item }) => (
  <li className="item">
    <div className="eloisa_list_wrap_in">
      <div className="item_id">
        <span>{item.title}</span>
        <span className="checked">
          <img className="svg" src="/img/svg/checked2.svg" alt="#" />
        </span>
      </div>
      <a href={item.sizes.src}>
        <Img
          sizes={item.sizes}
          alt={item.title}
          title={item.title}
          backgroundColor="#f1f1f1"
        />
      </a>
      <div className="eloisa_fn_overlay_list">
        <div className="eloisa_fn_popup_icon">
          <div className="eloisa_fn_popup_icon_in">
            <a className="zoom" href={item.sizes.src}>
              <img className="svg" src="/img/svg/zoom.svg" alt="#" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </li>
);

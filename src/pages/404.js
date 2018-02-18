import React from 'react';

const NotFoundPage = () => (
  <div className="eloisa_fn_content">
    <div className="eloisa_fn_page_extra_wrap">
      <div className="eloisa_fn_page_extra_wrap_bg">
        <div className="overlay_image" />
        <div className="overlay_bg" />
      </div>
      <div className="eloisa_fn_page_extra_content">
        <div className="eloisa_fn_page_extra_content_in">
          <div className="extra_svg">
            <img className="svg" src="/img/svg/warning.svg" alt="#" />
          </div>
          <div className="page_not_found">
            <span>404 Page not Found!</span>
          </div>
          <div className="definition">
            <span>
              Sorry, but you are looking for something that is not here.
            </span>
          </div>
          <div className="contact_center">
            <div
              className="eloisa_fn_button_effect"
              data-position="center"
              data-text-color="#000"
              data-border-color="fff"
              data-bg-color="#fff"
            >
              <a className="go_home" href="index.html">
                <span>Go Home</span>
              </a>
              <a href="contact_page.html">
                <span>Contact</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default NotFoundPage;

import React from 'react';
import Link from 'gatsby-link';
import { HTMLContent } from '../components/Content';

const Header = ({ home }) => (
  <header className="eloisa_fn_header">
    <div className="eloisa_fn_header_in">
      <div className="eloisa_fn_header_in_relative">
        <div className="eloisa_fn_logo">
          <Link className="logo_dark" to="/">
            <img src="/img/logo/logo.png" alt="#" />
          </Link>
          <Link className="logo_light" to="/">
            <img src="/img/logo/logo-light.png" alt="#" />
          </Link>
        </div>
        <div className="eloisa_fn_nav_menu_wrap">
          <div className="menu_wrap">
            <ul className="nav__hor">
              <li>
                <Link to="/">Homepage</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/contact/">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="eloisa_fn_header_icons_bar">
            <a className="share" href="#">
              <img className="svg" src="/img/svg/share.svg" alt="#" />
            </a>
          </div>
          <div className="eloisa_fn_trigger">
            <a href="#">
              <span className="a" />
              <span className="b" />
              <span className="c" />
            </a>
          </div>
          <div className="eloisa_fn_hamburger">
            <div className="hamburger hamburger--collapse-r">
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="eloisa_fn_mobile_menu">
      <div className="mobile_menu_wrap">
        <div className="eloisa_fn_header_icons_bar mobile">
          <a className="share" href="#">
            <img className="svg" src="/img/svg/share.svg" alt="#" />
          </a>
        </div>
        <ul className="nav">
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/contact/">Contact</Link>
          </li>
        </ul>
      </div>
    </div>

    <div className="eloisa_fn_overlay_window" />
    <div className="eloisa_fn_widget_menu_wrap">
      <div className="eloisa_fn_widget_menu_in scrollable">
        <span className="eloisa_fn_widget_menu_closer">
          <a href="#" />
          <span />
          <span />
        </span>
        <div className="eloisa_fn_widget_menu_text">
          <HTMLContent content={home.quote.childMarkdownRemark.html} />
        </div>
        <div className="eloisa_fn_widget_menu_sign">
          <img src="/img/sign/sign-half-dark.png" alt="#" />
        </div>
        <div className="eloisa_fn_second_menu">
          <div className="mobile_menu_wrap">
            <ul className="nav">
              <li>
                <Link to="/">Homepage</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/contact/">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* https://github.com/gatsbyjs/gatsby/blob/master/examples/gatsbygram/scrape.js?utm_source=hashnode.com */}
        <div className="eloisa_fn_instagram_stream widget_menu">
          <div className="instagram_stream_wrap">
            <div className="title_instagram">
              <div className="title_instagram_in">
                <span>Instagram Stream</span>
              </div>
            </div>
            <ul>
              <li>
                <div className="eloisa_fn_instagram_in">
                  <a href="#">
                    <img src="/img/instagram/1.jpg" alt="#" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;

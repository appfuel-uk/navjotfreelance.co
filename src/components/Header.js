import React from 'react';
import Link from 'gatsby-link';
import { HTMLContent } from '../components/Content';

export default class Header extends React.Component {
  componentDidMount() {
    const W = jQuery(window).width();
    const mmenu = jQuery('.eloisa_fn_mobile_menu');
    const trigger = jQuery('.eloisa_fn_hamburger .hamburger');

    if (W > 1040) {
      mmenu.slideUp();
      trigger.removeClass('is-active');
    }

    // const hamburger = jQuery('.hamburger');
    // const mobileMenu = jQuery('.eloisa_fn_mobile_menu');
    // const header = jQuery('.eloisa_fn_header');
    // const mobMenu = jQuery('.eloisa_fn_mobile_menu .mobile_menu_wrap');

    // hamburger.on('click', function() {
    //   const element = jQuery(this);

    //   if (element.hasClass('is-active')) {
    //     element.removeClass('is-active');
    //     mobileMenu.slideUp();
    //     header.removeClass('opened');
    //   } else {
    //     element.addClass('is-active');
    //     mobileMenu.slideDown();
    //     header.addClass('opened');
    //     mobMenu.addClass('color');
    //   }
    //   return false;
    // });
  }

  render() {
    const { home } = this.props;
    return (
      <header className="eloisa_fn_header">
        <div className="eloisa_fn_header_in">
          <div className="eloisa_fn_header_in_relative">
            <div className="eloisa_fn_logo">
              <Link className="logo_dark" to="/">
                <span style={{ fontSize: '28px' }}>NS</span>
                {/* <img src="/img/logo/logo2.png" alt="#" /> */}
              </Link>
              <Link className="logo_light" to="/">
                <span style={{ fontSize: '28px' }}>NS</span>
                {/* <img src="/img/logo/logo2.png" alt="#" /> */}
              </Link>
            </div>
            <div className="eloisa_fn_nav_menu_wrap">
              <div className="menu_wrap">
                <ul className="nav__hor">
                  <li>
                    <Link to="/">Home</Link>
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
                <Link to="/">Home</Link>
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
          </div>
        </div>
      </header>
    );
  }
}

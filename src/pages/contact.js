import React from 'react';

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
    const { contentfulContact: contact } = this.props.data;
    // console.log('data', contact);
    return (
      <div className="eloisa_fn_content">
        <div className="eloisa_fn_page_splitscreen contact">
          <div className="eloisa_fn_page_splitleft">
            <div className="splitscreen_title">
              <div className="in">
                <div className="eloisa_fn_address_wrap">
                  <div className="eloisa_fn_address_wrap_in">
                    <div className="address_info">
                      <p className="address">Address: {contact.address}</p>
                      <p className="phone">Phone: +{contact.telephone}</p>
                      <p className="email">
                        Email: <a href="#">{contact.email}</a>
                      </p>
                    </div>
                    <div className="address_social_icons">
                      <ul>
                        <li>
                          <a href={contact.twitter}>
                            <i className="xcon-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href={contact.instagram}>
                            <i className="xcon-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href={contact.linkedin}>
                            <i className="xcon-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a href={contact.medium}>
                            <span
                              style={{
                                fontWeight: 'bold',
                                textDecoration: 'none',
                                fontSize: '15px',
                                paddingLeft: '2px',
                              }}
                            >
                              M
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href={contact.behance}>
                            <i className="xcon-behance" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="splitscreen_title_back">
              <div className="bg" />
              <div className="eloisa_fn_split_overlay" />
            </div>
          </div>
          <div className="eloisa_fn_page_splitright contact">
            <div className="in">
              <div className="eloisa_fn_main_contact_wrap">
                <div className="container">
                  <div className="eloisa_fn_title contact">
                    <h3>
                      <span>Contact Us</span>
                    </h3>
                  </div>
                  <div className="eloisa_fn_input_wrap">
                    <form
                      action="/"
                      method="post"
                      className="contact_form"
                      id="contact_form"
                    >
                      <div
                        className="returnmessage"
                        data-success="Your message has been received, We will contact you soon."
                      />
                      <div className="empty_notice">
                        <span>Please Fill Required Fields</span>
                      </div>
                      <div className="first_row">
                        <ul>
                          <li>
                            <div className="item">
                              <input
                                id="name"
                                type="text"
                                placeholder="Your Name"
                              />
                            </div>
                          </li>
                          <li>
                            <div className="item">
                              <input
                                id="email"
                                type="text"
                                placeholder="Your Email"
                              />
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="subject">
                        <input id="subject" type="text" placeholder="Subject" />
                      </div>
                      <div className="message">
                        <textarea id="message" placeholder="Message" />
                      </div>
                      <div
                        className="eloisa_fn_button_effect"
                        data-position="left"
                        data-text-color=""
                        data-border-color=""
                        data-bg-color=""
                      >
                        <a id="send_message" href="#">
                          <span>Send</span>
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <footer className="eloisa_fn_footer" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export const query = graphql`
  query ContactQuery {
    contentfulContact {
      id
      address
      telephone
      email
      twitter
      instagram
      linkedin
      medium
      behance
    }
  }
`;

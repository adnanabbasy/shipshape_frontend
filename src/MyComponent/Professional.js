import React from 'react'

const Professional = () => {
  return (
    <div className='container-fluid main--profile'>
        <div className='row'>
          <div className='col-md-6'>
              <div className='professonal-tabs'>
                  <ul className="nav nav-tabs" id="myTabs" role="tablist">
                    <li className="nav-item" role="presentation">
                      <a className="nav-link active" id="about-tab" data-bs-toggle="tab" href="#about" role="tab" aria-controls="about" aria-selected="true">about</a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link" id="services-tab" data-bs-toggle="tab" href="#services" role="tab" aria-controls="services" aria-selected="false">services</a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link" id="photos-tab" data-bs-toggle="tab" href="#photos" role="tab" aria-controls="photos" aria-selected="false">photos</a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link" id="reviews-tab" data-bs-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">reviews</a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link" id="contact-tab" data-bs-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">contact</a>
                    </li>
                  </ul>
                  <div className='profil-user'>
                    <div className="custom-media">
                      <div className="media">
                        <div className="media-left">
                          <img src="../../images/safety.png" className="media-object" alt="" />
                        </div>
                            <div className="media-body">
                              <h6>BoatRx<sub>PRO</sub></h6>
                                  <div className="review-star">
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i> <span>5</span>
                                      <span className="review-count">(1)</span>
                                  </div>
                                  <div className="h-scroll">
                                        <div className="tech_lst">
                                          <div className="tech-icon">
                                            <i><img src="../../images/icons/search-icon15.png" alt=""/></i>
                                            <i><img src="../../images/icons/search-icon11.png" alt=""/></i>
                                            <i><img src="../../images/icons/icon5.png" alt=""/></i>
                                            <i><img src="../../images/icons/search-icon15.png" alt=""/></i>
                                            <i><img src="../../images/icons/search-icon11.png" alt=""/></i>
                                            <i><img src="../../images/icons/icon5.png" alt=""/></i>
                                          </div>
                                      </div>
                                  </div>
                            </div>
                        </div>
                      </div>
                  </div>
                  <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="about" role="tabpanel" aria-labelledby="about-tab">
                      <div className='profile_bagde'>
                          <p>BoatRx</p>
                      </div>
                      <ul className='profile_text'>
                        <li>
                          <p>Installer and Distributor of Battery Powered Air Conditioning Systems</p>
                        </li>
                        <li>
                          <p><i className="fa fa-map-marker" aria-hidden="true"></i> 256 Marginal St, Boston, MA, 02128 </p>
                        </li>
                        <li>
                        <p><a href="https://boatrx.com/" target="_new"> <i className="fa fa-globe" aria-hidden="true"></i> https://boatrx.com/</a>
                            </p>
                        </li>
                        <li>
                          <div className='photos'>
                            <h3>No photo available</h3>
                            <ul className='pic-gallery'><li></li></ul>
                          </div>
                        </li>
                        <li>
                          <div className='reviews'>
                            <h3>Review</h3>
                            <div className='review_bx'>
                              <p>BoatRx came in to do my refrigeration. Generally they work on higher end boats but they made an exception when I needed them the most. Treated me like he would the serious yachts he works on. His compassion and skill have no end.
                             </p>
                             <div className='d-time'>
                                <div className='date_pub'>
                                  <p>07-02-2022</p>
                                </div>
                                <div className='arthur_name'>
                                  <p>Pauline</p>
                                    <div className="review-star">
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i> 
                                    </div>
                                </div>  
                             </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className='bottom_link_share'>
                        <a href="/"><img src="../../images/icons/icon7.png" alt="" /> Contact</a>
                        <a href="/"><img src="../../images/icons/icon8-hover.png" alt="" /> Review</a>
                        <a href="/"><img src="../../images/icons/icon9.png" alt="" /> Share</a>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="services" role="tabpanel" aria-labelledby="services-tab">
                      <ul className='services_pro'>
                          <h5>Electrical</h5>
                          <li>Charge ControllersVictron</li>
                          <li>Batteries</li>  
                      </ul>
                      <ul className='services_pro'>
                          <h5>Power genration</h5>
                          <li>solor</li>
                        </ul>
                        <ul className='services_pro'>
                          <h5>Interior</h5>
                          <li>Air ConditioningWebasto</li>
                          <li>StoveDometic</li>
                          <li>Refrigeration</li>
                        </ul>
                      <div className='bottom_link_share'>
                        <a href="/"><img src="../../images/icons/icon7.png" alt="" /> Contact</a>
                        <a href="/"><img src="../../images/icons/icon8-hover.png" alt="" /> Review</a>
                        <a href="/"><img src="../../images/icons/icon9.png" alt="" /> Share</a>
                      </div>    
                    </div>
                    <div className="tab-pane fade" id="photos" role="tabpanel" aria-labelledby="photos-tab">
                      <h1>photos Content</h1>
                      <p>This is the content for the photos tab.</p>
                    </div>
                    <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                      <h1>photos Content</h1>
                      <p>This is the content for the photos tab.review</p>
                    </div>
                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                    <div className='banner-form login tabs'>
                        <form>
                            <input placeholder='Name *' type='text' />
                            <input placeholder='Email *' type='text' />
                            <input placeholder='Phone(e.g 4040-9367-12) *' type='text' />
                            <input placeholder='Boat details *' type='text' />
                            <input placeholder='Location *' type='text' />
                            <input placeholder='Preferred reply day (e.g Monday) *' type='text' />
                            <input placeholder='Preferred reply time (e.g 5pm) *' type='text' />
                            <input placeholder='Service Category * *' type='text' />
                            <input placeholder='Message *' type='text' />
                            <div className='forgot'>
                                <button type='submit'>Send</button>
                            </div>
                        </form>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
    
          <div className='col-md-6'>
          <div className="main-iframe inner">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184551.90977327293!2d-79.54286233854499!3d43.7183709578687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2s!4v1692009965988!5m2!1sen!2s" width="100%" height={"100%"} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
          </div>
        </div>
    </div>
  )
}

export default Professional

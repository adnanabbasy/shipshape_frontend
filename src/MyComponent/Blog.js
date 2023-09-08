import React from 'react'

const Blog = () => {
  return (
    <div className='main-blog'>
        <div className="container-fluid">
    <div className="row">
        <div className="col-sm-9">
            <div className="row">
                <div className="col-12 mt-5 pb-3 text-center">
                    <h6 className='text-start'><strong>Latest Blogs</strong></h6>
                </div>
                <div className="col-sm-12">
                    <div className="latest-blog border-bottom-1">
                        <ul>
                            <li>
                                <a to="#">
                                    <img src="../../images/blue-boats.jpeg" alt="" />
                                    <h6>Top 7 +1 issues in the youth entering the Marine Industry</h6>
                                </a>
                            </li>
                            <li>
                                <a to="#">
                                    <img src="../../images/img_3725.jpeg" alt="" />
                                    <h6>Top 7 +1 issues in the youth entering the Marine Industry</h6>
                                </a>
                            </li>
                            <li>
                                <a to="#">
                                    <img src="../../images/img_3718.jpeg" alt="" />
                                    <h6>Top 7 +1 issues in the youth entering the Marine Industry</h6>
                                </a>
                            </li>
                            <li>
                                <a to="#">
                                    <img src="../../images/img_3722-scaled.jpeg" alt="" />
                                    <h6>Top 7 +1 issues in the youth entering the Marine Industry</h6>
                                </a>
                            </li>
                            <li>
                                <a to="#">
                                    <img src="../../images/img_3723.jpeg" alt="" />
                                    <h6>Top 7 +1 issues in the youth entering the Marine Industry</h6>
                                </a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
            <section className='main-category'>
             <div className="row">
                <div className="col-12 mt-3 pb-3 text-center">
                        <h6 className='text-start'><strong>Browse by Category</strong></h6>
                    </div>
                    <div className="col">
                        <div className="category-box">
                            <a to="#">
                                <img src="../../images/icons/launching-icon1.png" alt="" />
                                <h5>Engine</h5>
                                <p><strong>18</strong> Blog Listed</p>
                            </a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="category-box">
                            <a to="#">
                                <img src="../../images/icons/safety.png" alt="" />
                                <h5>Industry</h5>
                                <p><strong>18</strong> Blog Listed</p>
                            </a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="category-box">
                            <a to="#">
                                <img src="../../images/icons/safety.png" alt="" />
                                <h5>Gallery</h5>
                                <p><strong>18</strong> Blog Listed</p>
                            </a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="category-box">
                            <a to="#">
                                <img src="../../images/icons/podcast-cat-icon.png" alt="" />
                                <h5>Podcast</h5>
                                <p><strong>18</strong> Blog Listed</p>
                            </a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="category-box">
                            <a to="#">
                                <img src="../../images/icons/safety.png" alt="" />
                                <h5>Videos</h5>
                                <p><strong>18</strong> Blog Listed</p>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div className="col-sm-3 mt-5 pb-3">
        <h6 className='text-start'><strong>Most Viewed</strong></h6>
            <div className="viewed-box">
                <a to="javascript:;">
                    <img src="../../images/the-new-space-race-05.jpeg" alt="" />
                    <div className="info-box">
                        <p>29-Sec-2022</p>
                        <h4>
                            Top 9 Sea Monsters
                            <span>Industry</span>
                        </h4>
                    </div>
                </a>
            </div>
            
            <div className="viewed-box">
                <a to="javascript:;">
                    <img src="../../images/boat1.jpeg" alt="" />
                    <div className="info-box">
                        <p>29-Sec-2022</p>
                        <h4>
                            Top 9 Sea Monsters
                            <span>Industry</span>
                        </h4>
                    </div>
                </a>
            </div>
           
            <div className="viewed-box">
                <a to="javascript:;">
                    <img src="../../images/the-world-is-your-oyester.jpeg" alt=""/>
                    <div className="info-box">
                        <p>29-Sec-2022</p>
                        <h4>
                            Top 9 Sea Monsters
                            <span>Industry</span>
                        </h4>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Blog

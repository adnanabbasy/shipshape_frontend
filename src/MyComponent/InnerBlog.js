import React from 'react'

function InnerBlog() {
  return (
    
    <div className='main-blog mt-4 mb-5'>
             <ul className='soacial-float'>
                <li><a href="/"><i className="fa-brands fa-facebook-f"></i></a></li>
                <li><a href="/"><i className="fa-brands fa-linkedin-in"></i></a></li>
                <li><a href="/"><i className="fa-solid fa-share"></i></a></li>
            </ul>
    
        <div className="container-fluid">
    <div className="row">
        <div className="col-sm-9">
            <div className="row">
                <div className='detail_blog'>
                    <img className='main_blog_im w-100 border-bottom mb-5' src="../../images/blue-boats.jpeg" alt="" />

                    <p className='mt-3 mb-3'>One of the most pressing issues in the marine industry today is how to attract and retain young talent. Workforce 
                        development seminars are a common fixture of marine industry events,  reflecting a growing concern about the industry’s
                         ability to engage with the next generation. However, in my experience, many people in the industry publicly express their 
                         belief in opportunities for young people, while privately seeking unskilled labor with little chance of career advancement.
                    </p>
                    <p>
                    For many in the marine industry, success is measured by the number of schools that adopt maritime programs. In the past, I have advocated for raising awareness of the industry as a core issue. However, I have come to question why there is such a lack of awareness. One possible reason is the absence of real role models in the marine industry. Apart from family-owned boatyards and shipyards, it is challenging to identify any service providers that are truly excelling in the industry and inspiring the next generation of professionals.
                    </p>

                    <div className='below_list mt-5 pt-3'>
                        <h5 className='mb-4'>Below is a list of the reasons that I have heard along my journey:</h5>
                        <h5 className='mt-4'>1. Lack of awareness:</h5>
                        <p className='mt-2 mb-2'>
                        Many young people are not even aware that the marine industry offers a diverse range of career paths beyond being a fisherman or boat captain. This lack of awareness can be attributed to a range of factors, including a lack of information and outreach by the industry itself, as well as limited exposure to marine-related activities in urban areas. As time has gone on, the marine industry has increasingly moved away from city centers to more industrial areas. This trend has contributed to a decline in public exposure to marine activities and opportunities. For example, people living in cities may not have access to boats or marinas, limiting their exposure to the marine industry. Furthermore, educators and other influencers may not be fully aware of the opportunities available in the industry, further exacerbating the issue.
                        </p>
                        <h5 className='mt-4'>2. Perceived lack of excitement:</h5>
                        <p className='mt-3 mb-3'>
                        Many young people view the industry as being associated with hard work and long hours, which may not be seen as attractive or glamorous compared to other industries that offer more flexible working hours or a better work-life balance. This perception can be further compounded by a lack of public recognition or prestige associated with the marine industry, making it less appealing to the youth. Moreover, the marine industry is seen as being less innovative and technologically advanced than other industries, such as tech or healthcare, which are perceived as more exciting and dynamic. This perception can be a barrier to attracting young people with strong technical and innovative skills to the marine industry.
                        </p>
                        <p className='mt-3 mb-3'>
                        We need to shift the narrative and highlight the exciting and rewarding aspects of working in the industry. For instance, the marine industry offers unique opportunities for adventure, travel, and exploration that few other industries can match. Moreover, the industry is increasingly embracing new technologies and innovative practices to enhance efficiency and sustainability, which could appeal to young people with an interest in cutting-edge technology.
                        </p>
                    </div>
                </div>
                
            </div>
            
        </div>
        <div className="col-sm-3">
        <h4 className='text-start'><strong>Related Post</strong></h4>
            <div className="viewed-box">
                <a to="javascript:;">
                    <img src="https://shipshape.pro/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-28-at-9.05.55-PM.jpeg" alt="" />
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
                    <img src="https://beta.shipshape.pro/wp-content/uploads/2022/03/THE-NEW-SPACE-RACE-05.jpg" alt="" />
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
                    <img src="https://beta.shipshape.pro/wp-content/uploads/2022/01/Boat.jpg" alt=""/>
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

export default InnerBlog

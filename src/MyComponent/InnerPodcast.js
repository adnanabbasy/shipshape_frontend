import React from 'react'
import DiscoverProfessional from './DiscoverProfessional'

const InnerPodcast = () => {
    
  return (
    // <div className='container'>
    //     <div className="audio-player">
    //         <div className='media-right'><img className="album-cover" src="../images/audio.jpeg" alt="Album Cover" /></div>
    //         <div className='media-left'>
    //             <h6>Podcast</h6>
    //                 <h5>The Power of Relationships: How Ed Ewer is Transforming Yachting Recruitment</h5>
    //             <audio className='ship_shape_audio' id="audio" controls>
    //                 <source src="https://shipshape.pro/wp-content/uploads/2023/04/the-power-of-relationships-how-ed-ewer-is-transforming-yachting-recruitment.mp3" type="audio/mpeg"/>
    //             </audio>
    //             <a to="/"> Subscribe</a>
    //             <a to="/">Share</a>
    //         </div>
    //     </div>
    // </div>
    <div className='main-blog mt-4 mb-5'>
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-9">
                    <div className='detail-podcasts'>
                        <div className="row">
                            <div className="audio-player">
                                <div className='media-right'><img className="album-cover" src="../images/audio.jpeg" alt="Album Cover" /></div>
                                    <div className='media-left'>
                                        <h6>Podcast</h6>
                                            <h5>The Power of Relationships: How Ed Ewer is Transforming Yachting Recruitment</h5>
                                        <audio className='ship_shape_audio' id="audio" controls>
                                            <source src="https://shipshape.pro/wp-content/uploads/2023/04/the-power-of-relationships-how-ed-ewer-is-transforming-yachting-recruitment.mp3" type="audio/mpeg"/>
                                        </audio>
                                        <div className='share_podcast'>
                                        <a to="/"> Subscribe</a>
                                        <a to="/">Share</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="podcast_meta">
                                <aside>
                                    <p>
                                        <a href="https://shipshape.pro/podcast-download/10376/the-power-of-relationships-how-ed-ewer-is-transforming-yachting-recruitment.mp3?ref=download"
                                            title="The Power of Relationships: How Ed Ewer is Transforming Yachting Recruitment "
                                            className="podcast-meta-download">
                                            Download file
                                        </a>
                                        |
                                        <a href="https://shipshape.pro/podcast-download/10376/the-power-of-relationships-how-ed-ewer-is-transforming-yachting-recruitment.mp3?ref=new_window"
                                            target="_blank"
                                            title="The Power of Relationships: How Ed Ewer is Transforming Yachting Recruitment "
                                            className="podcast-meta-new-window">
                                            Play in new window
                                        </a>
                                        | <span className="podcast-meta-duration">Duration: 37:50</span> | <span className="podcast-meta-date">Recorded on April 1, 2023</span>
                                    </p>
                                </aside>
                            </div>
                            <p className='mt-3 mb-3'>Ed Ewer is a business leader who is passionate about making a difference in the yachting industry. As the CEO of SYR, a leading shoreside yachting recruiter, Ewer brings ten years of high-level recruitment experience and an unrivaled network to his clients.</p>
                    </div>
                </div>
                <div className="col-sm-3">
                <h4 className='text-start'><strong>Related Post</strong></h4>
                    <div className="viewed-box">
                        <h6>No related posts are available</h6>
                    </div>
                </div>
            </div>
            <DiscoverProfessional />      
        </div>
    </div>
  )
}

export default InnerPodcast

import React from 'react';
import nat8 from '../../assets/img/nat-8.jpg'
import nat9 from '../../assets/img/nat-9.jpg'
import videoMp4 from '../../assets/img/video.mp4'
import videoWebm from '../../assets/img/video.webm';

const SectionStories = props => (
    <section className='section-stories'>

        <div className='bg-video'>
            <video className='bg-video__content' autoPlay muted loop>
                <source src={videoMp4} type='video/mp4'></source>
                <source src={videoWebm} type='video/webm'></source>
                Your browser do not support!
            </video>
        </div>
        <div className='u-center-text u-margin-bottom-small'>
            <h2 className='heading-secondary'>
                We make people genuinely happy
            </h2>
        </div>

        <div className='row'>
            <div className='story'>
                <figure className='story__shape'>
                    <img src={nat8} className='story__image'></img>
                    <figcaption className='story__caption'>
                        Mary Smith
                    </figcaption>
                </figure>
                <div className='story__text'>
                    <h3 className='heading-tertiary u-margin-bottom-small'>
                        I have the best week ever with my family
                    </h3>
                    <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    </p>
                </div>
            </div>
        </div>

        <div className='row'>
            <div className='story'>
                <figure className='story__shape'>
                    <img src={nat9} className='story__image'></img>
                    <figcaption className='story__caption'>
                        Jack Wilson
                    </figcaption>
                </figure>
                <div className='story__text'>
                    <h3 className='heading-tertiary u-margin-bottom-small'>
                        WOW! My life is completely different now
                    </h3>
                    <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    </p>
                </div>
            </div>
        </div>

        <div className='u-center-text u-margin-bottom-huge'>
        <a href='#' className='btn-text'>Read all stories &rarr;</a> 
        </div>

    </section>
)

export default SectionStories;
import React from 'react'
import nat1 from '../../assets/img/nat-1-large.jpg';
import nat2 from '../../assets/img/nat-2-large.jpg';
import nat3 from '../../assets/img/nat-3-large.jpg';

const Main = props => (
    <main>
        <section className='section-about'>
            <div className='u-center-text u-margin-bottom-big'>
                <h2 className='heading-secondary'>
                    Exciting tours for adventurous people
                </h2>
            </div>

            <div className='row'>
                <div className='col-1-of-2'>
                    <h3 className='heading-tertiary u-margin-bottom-small'>You are going to fall in love with nature</h3>
                    <p className='paragraph'>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                    </p>

                    <h3 className='heading-tertiary u-margin-bottom-small'>Live adventures like you never have before</h3>
                    <p className='paragraph'>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    <a href='#' className='btn-text'>Learn More &rarr;</a> 

                </div>
                <div className='col-1-of-2'> 
                    <div className='composition'>
                        <img src={nat1} alt='Photo 1' className='composition__photo composition__photo--p1'></img>
                        <img src={nat2} alt='Photo 2' className='composition__photo composition__photo--p2'></img>
                        <img src={nat3} alt='Photo 3' className='composition__photo composition__photo--p3'></img>
                    </div>
                </div>
            </div>
        </section>
    </main>
)

export default Main
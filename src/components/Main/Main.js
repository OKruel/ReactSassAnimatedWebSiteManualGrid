import React from 'react'

import natSmall1 from '../../assets/img/nat-1.jpg';
import natSmall2 from '../../assets/img/nat-2.jpg';
import natSmall3 from '../../assets/img/nat-3.jpg';

import natLarge1 from '../../assets/img/nat-1-large.jpg';
import natLarge2 from '../../assets/img/nat-2-large.jpg';
import natLarge3 from '../../assets/img/nat-3-large.jpg';

const Main = props => (
    <main className='main'>
        <section className='section-about'>
            <div className='u-center-text u-margin-bottom-medium'>
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
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco."
                    </p>

                    <h3 className='heading-tertiary u-margin-bottom-small'>Live adventures like you never have before</h3>
                    <p className='paragraph'>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    </p>

                    <a href='#' className='btn-text'>Learn More &rarr;</a>

                </div>
                <div className='col-1-of-2'>
                    <div className='composition'>

                        <img srcSet={`${natSmall1} 300w, ${natLarge1} 1000w`}
                            sizes='(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px'
                            className='composition__photo composition__photo--p1'
                            alt='Nat 1'
                        ></img>
                        <img srcSet={`${natSmall2} 300w, ${natLarge2} 1000w`}
                            sizes='(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px'
                            className='composition__photo composition__photo--p2'
                            alt='Nat 2'
                        ></img>
                        <img srcSet={`${natSmall3} 300w, ${natLarge3} 1000w`}
                            sizes='(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px' 
                            className='composition__photo composition__photo--p3' 
                            alt='Nat 3'
                        ></img>

                        {/* <img src={natLarge1} alt='Nat 1' className='composition__photo composition__photo--p1'></img>
                        <img src={natLarge2} alt='Nat 2' className='composition__photo composition__photo--p2'></img>
                        <img src={natLarge3} alt='Nat 3' className='composition__photo composition__photo--p3'></img> */}
                    </div>
                </div>
            </div>
        </section>
    </main>
)

export default Main
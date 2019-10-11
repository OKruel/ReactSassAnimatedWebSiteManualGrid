import React from 'react';
import nat8 from '../../assets/img/nat-8.jpg'
import nat9 from '../../assets/img/nat-9.jpg'

const PopUp = props => (
    <div className='popup' id='popup'>
        <div className='popup__content'>
            <div className='popup__left'>
                <img className='popup__image' src={nat8} alt='first'></img>
                <img className='popup__image' src={nat9} alt='second'></img>
            </div>
            <div className='popup__right'>
                <a href='#section-tours' className='popup__close'>&times;</a>
                <h2 className='heading-secondary u-margin-bottom-small popup__head'>Start booking now!</h2>
                <h3 className='heading-tertiary u-margin-bottom-small popup__head'>Important &ndash; Please read this terms before booking</h3>
                <p className='popup__text'>Integer a tortor dolor. Etiam viverra lorem mauris, eget ullamcorper erat sodales a. Nunc mi felis, mollis nec ante eget, ultricies aliquet purus. Duis ut justo et risus porta posuere. Mauris vel sapien nec ligula commodo lobortis at eget sapien. Suspendisse sodales nec tortor vel interdum. Quisque et facilisis dui, eget sagittis mauris. Sed mollis non dolor ac hendrerit.</p>
                <a href='#' className='btn btn--green'>Book now</a>
            </div>

        </div>
    </div>
)

export default PopUp;
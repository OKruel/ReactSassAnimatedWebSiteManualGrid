import React from 'react';

const SectionBook = props => (
    <section className='section-book'>
        <div className='row'>
            <div className='book'>
                <div className='book__form'>
                    <form action='#' className='form'>
                        <div className='u-margin-bottom-medium'>
                            <h2 className='heading-secondary'>
                                Start booking NOW!
                            </h2>
                        </div>
                        <div className='form__group'>
                            <input id='name' type='text'
                                className='form__input' placeholder='Full name' required>
                            </input>
                            <label for='name' className='form__label'>Full name</label>
                        </div>

                        <div className='form__group'>
                            <input id='email' type='email'
                                className='form__input' placeholder='Email' required>
                            </input>
                            <label for='email' className='form__label'>E-mail</label>
                        </div>

                        <div className='form__group'>
                            <div className='form__radio-group' >
                                <input id='small' type='radio' className='form__radio-input' name='size' />
                                <label for='small' className='form__radio-label'>
                                    <span className='form__radio-button'></span>
                                    Small tour group
                                </label>
                            </div>

                            <div className='form__radio-group' >
                                <input id='large' type='radio' className='form__radio-input' name='size' />
                                <label for='large' className='form__radio-label'>
                                    <span className='form__radio-button'></span>
                                    Large tour group
                                </label>
                            </div>
                        </div>
                        
                        <div className='form__group'>
                            <button className='btn btn--green'>Next step &rarr;</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
)

export default SectionBook;
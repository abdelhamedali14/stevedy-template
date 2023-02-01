
import React from 'react'
import "./footer.scss"
export const Footer = () => {
    return (
        <>
            <div className="footer-wrapper py-5 flex-wrap ">
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col-lg-3 col-md-6">
                            <div className="study">
                                <h2>Study</h2>
                                <p>Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.
                                    Vivamus eget diam at mi sollicitudin
                                </p>

                            </div>

                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="services pt-3">
                                <h6>Nos services</h6>
                                <p>Avis clients Mentions légales Plan du site
                                    Blog d’Idéematic Le dictionnaire du digital
                                    ‹ Notre boutique /›</p>
                            </div>



                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="signUp-with-mail pt-3">
                                <h6 className='pb-2'>Sign up for Special Offers! </h6>
                                <div action="#" class="subscribe-form position-relative">
                                    <input id="subscribeArea" type="search" class="form-control rounded-pill px-3 /"
                                        placeholder="mail" />
                                    <input type="submit" value="Subscribe" id="subscribeBtn"
                                        class=" rounded-pill position-absolute " />
                                </div>


                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

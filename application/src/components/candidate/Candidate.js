import React, { useEffect, useState } from 'react';

const Candidate = () => {
    const [candidate, setCandidate] = useState({
        name: "Thiago Chaves Santos"
    });

    useEffect(() => {
        const apiUrl = "";
    }, []);

    return (
        <section className="about-sec mt-180 mt-sm-120  mb-30">
            <div className="row">
                <div className="col-lg-12">
                    <div className="mdl-card mdl-shadow--2dp">
                        <div className="row">
                            <div className="col-md-5 col-xs-12 mb-30">
                                <div className="candidate-img mb-35"></div>
                                <ul className="social-icons">
                                    <li>
                                        <a className="facebook-link" href="#">
                                            <i id="tt1" className="zmdi zmdi-facebook"></i>
                                            <div className="mdl-tooltip" data-mdl-for="tt1">
                                                facebook
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="twitter-link" href="#">
                                            <i id="tt2" className="zmdi zmdi-twitter"></i>
                                            <div className="mdl-tooltip" data-mdl-for="tt2">
                                                twitter
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="linkedin-link" href="#">
                                            <i id="tt3" className="zmdi zmdi-linkedin"></i>
                                            <div className="mdl-tooltip" data-mdl-for="tt3">
                                                linkedin
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dribbble-link" href="#">
                                            <i id="tt4" className="zmdi zmdi-dribbble"></i>
                                            <div className="mdl-tooltip" data-mdl-for="tt4">
                                                dribbble
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="instagram-link" href="#">
                                            <i id="tt5" className="zmdi zmdi-instagram"></i>
                                            <div className="mdl-tooltip" data-mdl-for="tt5">
                                                instagram
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-7 col-xs-12">
                                <div className="info-wrap">
                                    <h1>{ candidate.name }</h1>
                                    <h5 className="mt-20 font-grey">Software Developer</h5>
                                    <div className="mt-30">
                                        <a id="download_cv"
                                           className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect  bg-green font-white mr-10"
                                           href="#">download cv</a>
                                        <a className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect bg-blue font-white"
                                           href="#contact_sec" data-scroll>contact</a>
                                    </div>
                                </div>
                                <ul className="profile-wrap mt-50">
                                    <li>
                                        <div className="profile-title">age</div>
                                        <div className="profile-desc">24</div>
                                    </li>
                                    <li>
                                        <div className="profile-title">address</div>
                                        <div className="profile-desc">
                                            Glenlake St. Mays Landing, NJ 08330
                                        </div>
                                    </li>
                                    <li>
                                        <div className="profile-title">email</div>
                                        <div className="profile-desc">
                                            thiagocsfoz@gmail.com
                                        </div>
                                    </li>
                                    <li>
                                        <div className="profile-title">phone</div>
                                        <div className="profile-desc">
                                            +1 234 56 78 90
                                        </div>
                                    </li>
                                    <li>
                                        <div className="profile-title">freelance</div>
                                        <div className="profile-desc relative">Available
                                            <i id="datepickopn"
                                               className="zmdi zmdi-calendar-check font-green pl-5"></i>
                                            <div id='datepicker1' className='datepicker'></div>
                                        </div>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Candidate;

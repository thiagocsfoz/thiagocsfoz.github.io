
const Education = () => {
    return (
        <section id="education_sec" className="education-sec sec-pad-top-sm">
            <h2 className="mb-30">education</h2>
            <div className="timeline-wrap overflow-hide mb-30">
                <ul className="timeline">
                    <li>
                        <div className="timeline-badge bg-blue no-icon"></div>
                        <div className="timeline-panel mdl-card mdl-shadow--2dp pt-30 pb-30 border-top-blue">
                            <div className="timeline-heading">
                                <h4 className="mb-10">master of computer science</h4>
                                <span className="duration mb-5">2014 - 2016</span>
                                <span className="institution">stakford university</span>
                            </div>
                        </div>
                    </li>

                    <li className="timeline-inverted">
                        <div className="timeline-badge bg-green no-icon"></div>
                        <div className="timeline-panel mdl-card mdl-shadow--2dp  pt-30 pb-30 border-top-green">
                            <div className="timeline-heading">
                                <h4 className="mb-10">Master Of Art</h4>
                                <span className="duration mb-5">2012 - 2014</span>
                                <span className="institution">Cedarglen University</span>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="timeline-badge bg-yellow no-icon"></div>
                        <div className="timeline-panel mdl-card mdl-shadow--2dp pt-30 pb-30 border-top-yellow">
                            <div className="timeline-heading">
                                <h4 className="mb-10">Bachelor Of Culture</h4>
                                <span className="duration mb-5">2009 - 2012</span>
                                <span className="institution">Crowmont Design School</span>
                            </div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-badge bg-red no-icon"></div>
                        <div className="timeline-panel mdl-card mdl-shadow--2dp  pt-30 pb-30 border-top-red">
                            <div className="timeline-heading">
                                <h4 className="mb-10">Graphic Design Diploma</h4>
                                <span className="duration mb-5">2008 - 2009</span>
                                <span className="institution">Shorepath Collegiate Institute</span>
                            </div>
                        </div>
                    </li>
                    <li className="clearfix no-float"></li>
                </ul>
            </div>
        </section>
    );
}

export default Education;
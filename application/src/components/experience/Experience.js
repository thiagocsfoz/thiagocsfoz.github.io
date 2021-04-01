
const Experience = () => {
    return (
        <section id="experience_sec" className="experience-sec sec-pad-top-sm">
            <h2 className="mb-30">experience</h2>
            <div className="timeline-wrap  overflow-hide mb-30">
                <ul className="timeline">
                    <li>
                        <div className="timeline-badge">
                            <i className="zmdi zmdi-case font-blue"></i>
                        </div>
                        <div className="timeline-panel mdl-card mdl-shadow--2dp pt-30 pb-30 border-top-blue">
                            <div className="timeline-heading">
                                <h4 className="mb-10">UI/UX Designer</h4>
                                <span className="duration mb-5">Mar 2014 - present</span>
                                <span className="institution">Fakebook</span>
                            </div>
                            <div className="timeline-body">
                                <p className="mt-25">Invitamus me testatur sed quod non dum animae tuae lacrimis ut
                                    libertatem deum rogus aegritudinis causet. Dicens hoc contra serpentibus isto.</p>
                            </div>
                        </div>
                    </li>

                    <li className="timeline-inverted">
                        <div className="timeline-badge">
                            <i className="zmdi zmdi-format-color-text font-green"></i>
                        </div>
                        <div className="timeline-panel mdl-card mdl-shadow--2dp  pt-30 pb-30 border-top-green">
                            <div className="timeline-heading">
                                <h4 className="mb-10">Art Director</h4>
                                <span className="duration mb-5">Jul 2013 — Mar 2014</span>
                                <span className="institution">hencework</span>
                            </div>
                            <div className="timeline-body">
                                <p className="mt-25">Invitamus me testatur sed quod non dum animae tuae lacrimis ut
                                    libertatem deum rogus aegritudinis causet. Dicens hoc contra serpentibus isto.</p>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="timeline-badge">
                            <i className="zmdi zmdi-city-alt font-yellow"></i>
                        </div>
                        <div className="timeline-panel mdl-card mdl-shadow--2dp pt-30 pb-30 border-top-yellow">
                            <div className="timeline-heading">
                                <h4 className="mb-10">Graphic Designer</h4>
                                <span className="duration mb-5">Jan 2013 – Jul 2013</span>
                                <span className="institution">Sagmeester</span>
                            </div>
                            <div className="timeline-body">
                                <p className="mt-25">Invitamus me testatur sed quod non dum animae tuae lacrimis ut
                                    libertatem deum rogus aegritudinis causet. Dicens hoc contra serpentibus isto.</p>
                            </div>
                        </div>
                    </li>
                    <li className="clearfix no-float"></li>
                </ul>
            </div>
        </section>
    );
}

export default Experience;
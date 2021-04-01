
const Skills = () => {
    return (
        <section id="skills_sec" className="skills-sec sec-pad-top-sm">
            <div className="row">
                <div className="col-sm-6 mb-30">
                    <h2 className="mb-30">technical skills</h2>
                    <div className="mdl-card mdl-shadow--2dp">
                        <div className="mb-30">
                            <span className="progress-cat">Photoshop CS</span>
                            <div className="progress-bar-graph">
                                <div className="progress-bar-wrap">
                                    <div className="bar-wrap blue-bar">
                                        <span data-width="60"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-30">
                            <span className="progress-cat">Illustrator CS</span>
                            <div className="progress-bar-graph">
                                <div className="progress-bar-wrap">
                                    <div className="bar-wrap green-bar">
                                        <span data-width="90"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-30">
                            <span className="progress-cat">Sketch</span>
                            <div className="progress-bar-graph">
                                <div className="progress-bar-wrap">
                                    <div className="bar-wrap yellow-bar">
                                        <span data-width="50"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-30">
                    <h2 className="mb-30">soft skills</h2>
                    <div className="mdl-card mdl-shadow--2dp">
                        <div className="mb-30">
                            <span className="progress-cat">Communication</span>
                            <div className="progress-bar-graph">
                                <div className="progress-bar-wrap">
                                    <div className="bar-wrap blue-bar">
                                        <span data-width="80"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-30">
                            <span className="progress-cat">Language</span>
                            <div className="progress-bar-graph">
                                <div className="progress-bar-wrap">
                                    <div className="bar-wrap green-bar">
                                        <span data-width="95"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-30">
                            <span className="progress-cat">General Knowledge</span>
                            <div className="progress-bar-graph">
                                <div className="progress-bar-wrap">
                                    <div className="bar-wrap yellow-bar">
                                        <span data-width="90"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
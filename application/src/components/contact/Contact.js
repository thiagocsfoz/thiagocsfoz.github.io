import React from 'react';

const Contact = () => {
    return (
        <section id="contact_sec" className="contact-sec sec-pad-top-sm">
            <h2 className="mb-35">contact</h2>
            <div className="row">
                <div id="form_card_height" className="col-sm-7 mb-30">
                    <div className="mdl-card mdl-shadow--2dp" data-ng-controller="ContactController">
                        <h4 className="mb-10 font-unsetcase">Hey <span
                            data-ng-bind="formData.inputName||'There'">There</span>, happy to hear from you.</h4>
                        <form data-ng-submit="submit(contactform, $event)" name="contactform" method="post"
                              className=" form-horizontal mb-30" role="form">
                            <div className="form-group"
                                 data-ng-class="{ 'has-error': contactform.inputName.$invalid && submitted }">
                                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                    <input autoComplete="off" data-ng-model="formData.inputName"
                                           className="mdl-textfield__input" type="text" id="inputName" name="inputName"
                                           required/>
                                    <label className="mdl-textfield__label" htmlFor="inputName">name*</label>
                                </div>
                            </div>
                            <div className="form-group"
                                 data-ng-class="{ 'has-error': contactform.inputEmail.$invalid && submitted }">
                                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                    <input autoComplete="off" data-ng-model="formData.inputEmail"
                                           className="mdl-textfield__input" type="email" id="inputEmail"
                                           name="inputEmail" required/>
                                    <label className="mdl-textfield__label" htmlFor="inputEmail">email*</label>
                                </div>
                            </div>
                            <div className="form-group"
                                 data-ng-class="{ 'has-error': contactform.inputMessage.$invalid && submitted }">
                                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
													<textarea
                                                        data-ng-model="formData.inputMessage"
                                                        className="mdl-textfield__input" rows="3" id="inputMessage"
                                                        name="inputMessage" required></textarea>
                                    <label className="mdl-textfield__label" htmlFor="inputMessage">message*</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="align-center">
                                    <button type="submit"
                                            className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect  bg-blue font-white"
                                            data-ng-disabled="submitButtonDisabled">
                                        submit
                                    </button>
                                </div>
                            </div>
                        </form>
                        <p className="block result" data-ng-class="result"></p>
                    </div>
                </div>
                <div className="col-sm-5 mb-30">
                    <div className="mdl-card mdl-shadow--2dp pa-0">
                        <div id="map_canvas"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
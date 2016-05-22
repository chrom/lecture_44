import { View } from 'backbone';
import template from 'lodash/template';
import viewTemplate from './registrationForm.html';
import styles from './registrationForm.css';
import styleHelper from '../../helper/style';

const BackboneView = View.extend({
    template  : template(viewTemplate),

    initialize: function () {

    },

    events: {
        'click #submit_registration': 'validationF',
        'focus #registration_modal input': 'removeErrorValidation'
    },

    removeErrorValidation: function () {
        event.target.classList.remove(styles['validation-error']);
    },

    validationF: function (e) {

        function checkValidate(e) {
            e.preventDefault();
            const emailField = document.querySelector('#email');
            const passwordField = document.querySelector('#password');
            const confirmPasswordField = document.querySelector('#confirmPassword');
            let validFlag = true;
            const re = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
            const rePass = /.\d+./;

            if (!re.test(emailField.value)) {
                addRemoveClass(emailField);
            }
            if (passwordField.value.length < 6 || !rePass.test(passwordField.value)) {
                addRemoveClass(passwordField);
            }
            if (confirmPasswordField.value.length < 6 || !rePass.test(confirmPasswordField.value)) {
                addRemoveClass(confirmPasswordField);
            }
            if (passwordField.value !== confirmPasswordField.value) {
                addRemoveClass(passwordField);
                addRemoveClass(confirmPasswordField);
            }

            function addRemoveClass(block) {
                block.classList.toggle(styles['validation-error']);
                validFlag = false;
            }

            return validFlag;

        }
        checkValidate(e);

        const checkAsyncValidate = (e) => {
            const url = 'http://tasks.smartjs.academy/validate/email';
            const passwordField = document.querySelector('#password')
            const urlUser = 'http://tasks.smartjs.academy/users';
            const emailField = document.querySelector('#email');
            let emailData = {
                email: emailField.value
            };
            var xhr = new XMLHttpRequest();
            xhr.open('POST', url);
            xhr.setRequestHeader("Content-Type","application/json");
            xhr.send(JSON.stringify(emailData));
            if ($('.error-register-msg').size() > 0) {
                $('.error-register-msg').remove();
            }
            xhr.onreadystatechange = () => {
                if (xhr.readyState !== xhr.DONE) return;
                if (xhr.status !== 200) {
                    let errorSpan = document.createElement('span');
                    errorSpan.className = 'error-register-msg';
                    errorSpan.textContent = 'Already registered';
                    emailField.parentNode.appendChild(errorSpan);
                }
                else {
                    let registerData = {
                        email: emailField.value,
                        password : passwordField.value
                    };
                    var xhrRegister = new XMLHttpRequest();
                    xhrRegister.open('POST', urlUser);
                    xhrRegister.setRequestHeader("Content-Type","application/json");
                    xhrRegister.send(JSON.stringify(registerData));
                    xhrRegister.onreadystatechange = () => {
                        if (xhrRegister.readyState !== xhrRegister.DONE) return;
                        if (xhrRegister.status === 200) {
                            this.remove();
                            alert('User has been registered');
                        }
                    }
                }
            }
        }
        checkAsyncValidate();

    },

    render: function () {
        const html = template(viewTemplate)({
            // items: this.collection.models,
        });
        this.$el.append(html);
        styleHelper(this.el, styles);
        return this.$el;
    },
});

export default BackboneView;
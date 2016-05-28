import RegistrationView from '../views/form/registrationForm';

export function openRegistrationPopup() {
    console.log('11');
    var regPopup = new RegistrationView();
    regPopup.render();
    $(document.body).append(regPopup.$el);
    return regPopup.promise;
}
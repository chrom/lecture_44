// https://gist.github.com/xanf/ea1b0e828229505d8a79
import {Router, history} from 'backbone';
// import User Userfrom './models/User';
import {registrationForm} from './views/index';
// import UserCollection from './collection/UsersCollection'
// window.User = User;

let form = {};

function showForm() {
    // var users = new UserCollection();
    // users.url = 'http://jsonplaceholder.typicode.com/todos';

    function addCloseEvent() {
        var closePopupBtn  = document.querySelector('#registration_modal .close');
        closePopupBtn.addEventListener('click',function () {
            form.remove();
        })
    }

    var registrBtn = document.querySelector('#register_btn');
    registrBtn.addEventListener('click', function () {
        form = new registrationForm({});
        form.render();
        $(document.body).append(form.$el);
        addCloseEvent();
    });


    // const view = new Form({collection: users, el: '.userList' });
}

const AppRouter = Router.extend({
    routes: {
        '': 'showForm'

    },
    showForm,

});

const app = new AppRouter();
window.addEventListener('load', () => history.start());

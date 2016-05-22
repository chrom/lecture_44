// https://gist.github.com/xanf/ea1b0e828229505d8a79
import {Router, history} from 'backbone';
// import User Userfrom './models/User';
import {registrationForm} from './views/index';
// import UserCollection from './collection/UsersCollection'
// window.User = User;

function addListenerFunc () {


}

function showForm() {
    // var users = new UserCollection();
    // users.url = 'http://jsonplaceholder.typicode.com/todos';
    console.log('232423423');

    var registrBtn = document.querySelector('#register_btn');
    console.log(registrBtn);
    registrBtn.addEventListener('click', function () {
        const form = new registrationForm({});
        form.render();
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

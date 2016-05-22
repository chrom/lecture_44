import { View } from 'backbone';
import template from 'lodash/template';
import viewTemplate from './registrationForm.html';
import styles from './registrationForm.css';
import styleHelper from '../../helper/style';

const BackboneView = View.extend({
    template  : template(viewTemplate),
    el: 'body',
    
    initialize: function () {
        // this.collection.fetch();
        // this.collection.on('add remove update', () => this.render());
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
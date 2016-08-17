import Vue from 'vue';
import treeDoc from './example/treeDoc';

Vue.config.debug = true;

new Vue({
	el: 'body',
	components: {
		treeDoc
	}
});
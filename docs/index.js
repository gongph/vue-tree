import Vue from 'vue';
import 'prismjs';
import './assets/prism-tomorrow';

import treeDoc from './example/treeDoc';


Vue.config.debug = true;

new Vue({
	el: 'body',
	components: {
		treeDoc
	}
});
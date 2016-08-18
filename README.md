# 介绍（introduce）
vue-tree component for [Vue](http://vuejs.org/) and build with vue.js + webpack + es6. 

依赖vue.js 和 bootstrap css 3.x.x
* [Vue.js](http://vuejs.org/) (required ^v1.x.x, test with v1.0.26).
* [Bootstrap CSS](http://getbootstrap.com/) (required 3.x.x, test with 3.3.6). 

## 使用（Usage）
1. git clone the vue-tree
2. 页面引入
```html
<link href="css/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">

<script src="vue.js"></script>
<script src="[component path]/dist/vue-tree.js" type="text/javascript" charset="utf-8"></script>
```

Add the component in your vue view.

```html
<body>
  <div id="app">
    <tree url="your-url-path" @on-click="onClick"></tree>
  </div>
  <script type="text/javascript">
	var tree = VueTree.tree;
	new Vue({
		el: '#app',
		components: {
			'tree': tree
		},
		methods: {
			onClick: function (node) {
				// Todo: your code here
				console.log('current click node name is:' + node.name);
			}
		}
	})
   </script>
</body>
```

## Options
List of available props to use in component:

Prop        | Data Type         | Default   | Description
----------- | ----------------- | --------- | -------------------------------
`url`       | String            | ''        | The data source.
`async`     | Boolean           | false     | Whether open async load data.

### Events
List of available events to use in component:

Event            | Passes                  | Description
---------------- | ----------------------- | -----------
`@on-click`      | `node`: Selected node   | Triggered when a node is clicked.

```javascript
new Vue({
    el: '#app',
    data: {
      treeNode: Object
    },
    methods: {
        onClick: function(node) {
            // TODO my code here
            this.treeNode = node;
        }
    }
});
```

## License
Copyright (c) 2016 [gongph](http://www.gongph.com/). vue-tree is licensed under [The MIT License](LICENSE).

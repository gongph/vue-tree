<template>
	<div class="bs-docs-section">
		<h1 id="nav" class="page-header">
			树形组件
		</h1>
		<p class="lead">
			依赖<code>vue.js</code> 和 <code>Bootstrap CSS 3.x.x</code> . 除此之外不依赖任何第三方库。
		</p>
		<h2>同步加载</h2>
		<div class="bs-example">
			<tree url="http://syncLoadData.com" @on-click="syncClick" effect="bounce"></tree>
			<p>你选择的是：{{syncNode | json}}</p>
		</div>
		<pre><code class="language-markup"><script type="language-mark-up"><tree url="your_request_url" @on-click="syncClick" effect="bounce"></tree>
</script></code></pre>	

		<h2>异步加载</h2>
		<div class="bs-example">
			<tree url="http://asyncLoadData.com" async></tree>
		</div>
		<pre><code class="language-markup"><script type="language-mark-up"><tree url="your_request_url" async></tree>
</script></code></pre>

		<h2>Options</h2>
		<table class="table table-bordered">
		    <thead>
		      <tr>
		        <th>参数名</th>
		        <th>类型</th>
		        <th>默认值</th>
		        <th>描述</th>
		      </tr>
		    </thead>
		    <tbody>
		      <tr>
		        <td>url</td>
		        <td><code>String</code></td>
		        <td></td>
		        <td>数据源</td>
		      </tr>
		      <tr>
		        <td>async</td>
		        <td><code>Boolean</code></td>
		        <td><code>false</code></td>
		        <td>是否开启异步加载.</td>
		      </tr>
		      <tr>
		        <td>effect</td>
		        <td><code>String</code></td>
		        <td><code>''</code></td>
		        <td>过度效果。fade | expand | bounce | fly</td>
		      </tr>
		      <tr>
		        <td>on-click</td>
		        <td><code>Function</code></td>
		        <td></td>
		        <td>节点被点击的事件回调函数。返回当前节点对象</td>
		      </tr>
		    </tbody>
	  </table>
	</div>
</template>

<script>
	import tree from 'src/components/treeSet';
	import '../js/mockData';

	export default {
		components: {
			tree
		},
		data() {
			return {
				syncNode: Object,
				asyncNode: null
			}
		},
		methods: {
			syncClick (model) {
				this.syncNode = model
			},
			asyncClick (model) {
				this.asyncNode = model;
			}
		}
	}
</script>
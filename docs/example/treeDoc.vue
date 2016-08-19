<template>
	<div class="bs-docs-section">
		<h1 id="nav" class="page-header">
			树形组件
		</h1>
		<div class="alert alert-info">
			依赖 <code>vue.js</code> 和 <code>Bootstrap CSS 3.x.x</code> . 除此之外不依赖任何第三方库。
		</div>
		<h2>同步加载</h2>
		<div class="bs-example">
			<tree url="http://syncLoadData.com" @on-click="syncClick"></tree>
			<p>你选择的是：{{syncNode | json}}</p>
		</div>
		<pre><code class="language-markup"><script type="language-mark-up"><tree url="your_request_url" @on-click="syncClick" effect="bounce"></tree>
</script></code></pre>	
		<pre><code class="language-js"><script type="language-mark-up">new Vue({
	el: '#app',
	methods: {
		syncClick: function (node) {
			// 你的业务逻辑
			console.log('你选择的是：' + node.name);
		}
	}
});
</script></code></pre>

		<h2>异步加载</h2>
		<p>异步加载需要在组件标签中配置 <code>async</code> 属性. 异步请求数据时会向服务器端传递一个 <code>pid</code> 参数。</p>
		<div class="bs-example">
			<tree url="http://asyncLoadData.com" async></tree>
		</div>
		<pre><code class="language-markup"><script type="language-mark-up"><tree url="your_request_url" async></tree>
</script></code></pre>
		
		<h2>过度效果</h2>
		<p>通过组件属性 <code>effect</code> 配置不同的效果，组件提供了4种可用的过度效果。如下：</p>
		<div>
			<!-- Nav tabs -->
			  <ul class="nav nav-tabs" role="tablist">
			    <li role="presentation" class="active"><a href="#bounce" aria-controls="bounce" role="tab" data-toggle="tab">bounce</a></li>
			    <li role="presentation"><a href="#fade" aria-controls="fade" role="tab" data-toggle="tab">fade</a></li>
			    <li role="presentation"><a href="#expand" aria-controls="expand" role="tab" data-toggle="tab">expand</a></li>
			    <li role="presentation"><a href="#fly" aria-controls="fly" role="tab" data-toggle="tab">fly</a></li>
			  </ul>
			
			  <!-- Tab panes -->
			  <div class="tab-content">
			    <div role="tabpanel" class="tab-pane active" id="bounce">
			    	<div class="bs-example" style="border-top: none;">
						<tree url="http://syncLoadData.com" effect="bounce"></tree>
					</div>
					<pre><code class="language-markup"><script type="language-mark-up"><tree url="your_request_url" effect="bounce"></tree></script></code></pre>
			    </div>
			    <div role="tabpanel" class="tab-pane" id="fade">
			    	<div class="bs-example" style="border-top: none;">
						<tree url="http://syncLoadData.com" effect="fade"></tree>
					</div>
					<pre><code class="language-markup"><script type="language-mark-up"><tree url="your_request_url" effect="fade"></tree></script></code></pre>
			    </div>
			    <div role="tabpanel" class="tab-pane" id="expand">
			    	<div class="bs-example" style="border-top: none;">
						<tree url="http://syncLoadData.com" effect="expand"></tree>
					</div>
					<pre><code class="language-markup"><script type="language-mark-up"><tree url="your_request_url" effect="expand"></tree></script></code></pre>
			    </div>
			    <div role="tabpanel" class="tab-pane" id="fly">
			    	<div class="bs-example" style="border-top: none;">
						<tree url="http://syncLoadData.com" effect="fly"></tree>
					</div>
					<pre><code class="language-markup"><script type="language-mark-up"><tree url="your_request_url" effect="fly"></tree></script></code></pre>
			    </div>
			  </div>

		</div>
		
		<h2>选项</h2>
		<p>以下是组件可用的 <code>prop</code> 列表</p>
		<table class="table table-bordered">
		    <thead>
		      <tr>
		        <th>prop</th>
		        <th>类型</th>
		        <th>默认值</th>
		        <th>描述</th>
		      </tr>
		    </thead>
		    <tbody>
		      <tr>
		        <td>url</td>
		        <td><code>String</code></td>
		        <td><code>''</code></td>
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
		    </tbody>
	  </table>
	  
	  <h2>事件</h2>
	  <p>以下是组件可用的事件列表</p>
	  <table class="table table-bordered">
		    <thead>
		      <tr>
		        <th>事件名</th>
		        <th>类型</th>
		        <th>回调参数</th>
		        <th>描述</th>
		      </tr>
		    </thead>
		    <tbody>
		      <tr>
		        <td>@on-click</td>
		        <td><code>Function</code></td>
		        <td><code>node：</code>被点击的节点对象</td>
		        <td>返回当前被点击的节点对象。具体用法参考：<a href="#">同步加载</a></td>
		      </tr>
		    </tbody>
	  </table>
	  
	  <h2>服务端响应的数据格式</h2>
	  <p>你应该把所有的数据都放在一个叫 <code>datas</code> 的集合数组对象中，然后response到前台。就像下面这样：</p>
	  <pre><code class="language-js"><script type="language-mark-up">datas: [
	  	{
	  		id: "1", 
	  		name: "根节点1", 
	  		isParent: true, 
	  		pid: "0", 
	  		childrens: [
	  			{
	  				id: '11',
	  				name: "子节点",
	  				isParent: false,
	  				pid: '1',
	  			}
	  		]
	  	},
	  	{
	  		id: "2", 
	  		name: "根节点2", 
	  		isParent: true, 
	  		pid: "0", 
	  		childrens: [
	  			{
	  				id: '21',
	  				name: "子节点",
	  				isParent: true,
	  				pid: '2',
	  				childrens: []
	  			}
	  		]
	  	}
]</script></code></pre>
		<h2>datas中的对象属性</h2>
		<p>下面是datas集合数组中 <code>每个对象</code>包含的属性：</p>
		<table class="table table-bordered">
		    <thead>
		      <tr>
		        <th>属性</th>
		        <th>类型</th>
		        <th>是否必填</th>
		        <th>描述</th>
		      </tr>
		    </thead>
		    <tbody>
		      <tr>
		        <td>id</td>
		        <td><code>String</code></td>
		        <td><code>是</code></td>
		        <td>节点唯一标识</td>
		      </tr>
		      <tr>
		        <td>name</td>
		        <td><code>String</code></td>
		        <td><code>是</code></td>
		        <td>节点名称</td>
		      </tr>
		      <tr>
		        <td>isParent</td>
		        <td><code>Boolean</code></td>
		        <td><code>是</code></td>
		        <td>是否是父节点</td>
		      </tr>
		      <tr>
		        <td>pid</td>
		        <td><code>String</code></td>
		        <td><code>是</code></td>
		        <td>父节点的唯一标识</td>
		      </tr>
		      <tr>
		        <td>childrens</td>
		        <td><code>ArrayObject</code></td>
		        <td><code>否</code></td>
		        <td>当前节点下的孩子节点</td>
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
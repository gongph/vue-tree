<template>
	<ul class="neris-tree tree-lines">
		<template v-for="node in treeData">
			<tree :model="node" :effect="effect"></tree>
		</template>
	</ul>
</template>

<script>
	import coerceBoolean from '../utils/coerceBoolean';
	import callAjax from '../utils/callAjax';
	import tree from './tree';

	export default {
		components: {
			tree
		},
		props: {
			url: String,
			async: {
				type: Boolean,
				coerce: coerceBoolean,
				default: function() {
					return false;
				}
			},
			param: {
				type: String,
				default: '0'
			},
			effect: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				treeData: []
			}
		},
		ready() {
			callAjax(this.url, this.param).then((result) => {
				this.treeData = result.datas;
			}).catch((error) => {
				console.error(error);
			});
		},
		events: {
			/**
			 * click current parentNode async load childNodes
			 */
			handleExpandEvent(pid) {
				if(this.async) {
					callAjax(this.url, this.param = pid).then((result) => {
						this.recurLoadData(pid, this.treeData, result.datas);
					}).catch((error) => {
						console.error(error);
					});
				}
			}
		},
		methods: {
			recurLoadData(pid, treeNodes, childNodes) {
				for(let i = 0, len = treeNodes.length; i < len; i++) {
					if(treeNodes[i].id === pid) {
						if(treeNodes[i].childrens.length <= 0) {
							treeNodes[i].childrens = childNodes;
							break;
						}
					} else {
						this.recurLoadData(pid, treeNodes[i].childrens, childNodes);
					}

				}
			}
		}
	}
</script>

<style>
	.neris-tree {
		padding-left: 0;
	}
	
	.neris-tree li {
		position: relative;
		padding: 2px 0 2px 5px;
		list-style: none;
	}
	
	.neris-tree li span:hover {
		color: #337ab7;
		cursor: pointer
	}
	
	.neris-tree li span i {
		font-size: 1px;
		width: 14px;
		color: #999
	}
	
	.neris-tree a {
		color: #222
	}
	
	.neris-tree li.open> ul {
		display: block
	}
	
	.tree-lines li.has-list.open>ul:after {
		position: absolute;
		top: 22px;
		bottom: -2px;
		left: 9px;
		z-index: 1;
		display: block;
		content: ' ';
		border-left: 1px dotted #ccc;
	}
	
	.tree-lines ul>li:after {
		position: absolute;
		top: 11px;
		left: -13px;
		z-index: 1;
		display: block;
		width: 15px;
		content: ' ';
		border-top: 1px dotted #ccc;
	}
	
	.tree-lines ul> li {
		position: relative;
		left: -21px;
	}
</style>
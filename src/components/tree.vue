<template>
	<li class="has-list" :class="[open? 'open': '']">
		<span v-if="isParent">
			<i class="glyphicon" 
				@click.stop.self="clickCallback(model.id, model.name)" 
				:class="[open ? 'glyphicon-folder-open' : 'glyphicon-folder-close']">
			</i>
		</span>
		
		<span v-else><i class="glyphicon glyphicon-file"></i></span>
		
		<a href="javascript:void(0);" 
			@dblclick.stop="clickCallback(model.id, model.name)" 
			@click.stop="toggle">{{model.name}}</a>
		
		<ul v-if="isParent" v-show="open">
			<item v-for="model in model.childrens" :model="model">{{model.name}}</item>
		</ul>
		
	</li>
</template>

<script>
	export default {
		name: 'item',
		props: {
			model: {
				type: Object
			}
		},
		data() {
			return {
				open: false
			}
		},
		computed: {
			isParent() {
				return this.model.isParent;
			}
		},
		methods: {
			toggle() {
				// click a link do something
			},
			clickCallback(id, name) {
				if(this.isParent) this.open = !this.open;
				if(this.isParent && this.open && this.$parent.async) {
					this.$dispatch('handleClickEvent', id, name);
				}
			}
		}

	}
</script>
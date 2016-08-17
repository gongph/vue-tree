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
			@dblclick.stop="clickCallback(model.id)" 
			@click.stop="toggleClick(model)">{{model.name}}</a>
		
		<ul v-if="isParent" v-show="open">
			<item v-for="model in model.childrens" :model="model">{{model.name}}</item>
		</ul>
		
	</li>
</template>

<script>
	export default {
		name: 'item',
		props: {
			model: Object
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
			toggleClick(model) {
				this.$dispatch('on-click', model);
			},
			clickCallback(id) {
				if(this.isParent) this.open = !this.open;
				if(this.isParent && this.open) {
					this.$dispatch('handleExpandEvent', id);
				}
			}
		}

	}
</script>
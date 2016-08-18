<template>
	<li class="has-list" :class="[open? 'open': '']">
		<span v-if="isParent">
			<i class="glyphicon" 
				@click.stop.self="clickCallback(model.id, model.name)" 
				:class="[open ? 'glyphicon-folder-open' : 'glyphicon-folder-close']">
			</i>
		</span>

		<span v-else><i class="glyphicon glyphicon-file"></i></span>

		<a href="javascript:void(0);" @dblclick.stop="clickCallback(model.id)" @click.stop="toggleClick(model)">{{model.name}}</a>

		<ul v-if="isParent" v-show="open" :transition="effect">
			<item v-for="model in model.childrens" :model="model" :effect="effect">{{model.name}}</item>
		</ul>

	</li>
</template>

<script>
	export default {
		name: 'item',
		props: {
			model: Object,
			effect: {
				type: String,
				default: ''
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

<style>
	/**fade effect*/
	.fade-transition {
		transition: all .3s ease;
	}
	
	.fade-enter,
	.fade-leave {
		opacity: 0;
		-webkit-transform: scale(1.1);
		transform: scale(1.1);
	}
	
	/**expand effect*/
	.expand-transition {
		transition: all .2s ease;
	}
	
	.expand-enter,
	.expand-leave {
		opacity: 0;
		-webkit-transform: translate(0px, -30px);
		transform: translate(0px, -30px);
	}
	
	/**bounce effect*/
	.bounce-transition {
		transition: all .3s ease;
	}
	
	.bounce-enter,
	.bounce-leave {
		opacity: 0;
		-webkit-transform: scale3d(1.1, 0, 0);
		transform: scale3d(1.1, 0, 0);
	}
	
	/**fly effect*/
	.fly-transition {
		transition: all .3s ease;
	}
	
	.fly-enter,
	.fly-leave {
		opacity: 0;
		-webkit-transform: rotateY(90deg);
		transform: rotateY(90deg);
	}
</style>
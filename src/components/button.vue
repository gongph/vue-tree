<template>
	<button class="btn btn-primary btn-sm" @click="callback">
		<i v-if="iconClass" :class="[iconClass]"></i> 
		<slot>{{btnText}}</slot>
	</button>
</template>

<script>
	export default {
		props: {
			btnText: {
				type: String,
				default: 'Button'
			},
			iconClass: {
				type: String,
				default: ''
			},
			callback: {
				type: Function,
				default: function () {}
			}
		}
	}
</script>
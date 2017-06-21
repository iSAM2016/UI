<template>
	<ul class="ol-menu">
		<ol-menu-item class="ol-menu-item" v-for="menuitem in menu" :menuItem="menuitem"></ol-menu-item>
	</ul>
</template>
<script>
	import olMenuItem from './menuItem.vue';
	export default {
		props: {
			menu: {
				type: Array,
				required: true
			}
		},
		components: {
			olMenuItem
		}
	}
</script>
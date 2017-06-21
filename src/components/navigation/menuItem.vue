<template>
	<li class="ol-menu__item" :class="{'open': showSub, 'active': menuItem.active}">
		<div class="ol-menu__item--container" >
			<span class="ol-menu__item--title">{{menuItem.title}}</span>
			<span class="ol-menu__item__sub--title" v-if="menuItem.subTitle">{{menuItem.subTitle}}</span>
			<span class="ol-menu__title--arrow" v-is><i class="ion-chevron-down"></i></span>
		</div>
		<div v-if="menuItem.subMenu" v-show="showSub">
			<div v-for="item in menuItem.subMenu">
				<div class="ol-menu__group--title">{{item.title}}</div>
				<ul>
					<li 
						v-for="subMenuItem in item.group"
						class="ol-menu__submenu__item"
						:class="{'active': subMenuItem.active}"
						v-link="{path: '/' + subMenuItem.link, activeClass: 'active'}">
						<span class="ol-menu__submenu__item--title">{{subMenuItem.active}}</span>
						<span class="ol-menu__submenu__item--subtitle">{{subMenuItem.subTitle}}</span>
					</li>
				</ul>

			</div>
		</div>
	</li>
</template>
<script>
export default {
	props: {
		menuItem: {
			type: Object,
			required: true
		}
	},
	data () {
        return {
            showSub: false
        }
    },
     created () {
        if (this.menuItem.showSub) {
            this.showSub = true
        }
    }
}
</script>

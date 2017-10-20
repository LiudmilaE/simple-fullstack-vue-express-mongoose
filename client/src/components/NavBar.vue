<template>
  <nav>
    <router-link
      v-for="(link, index) in navbarLinks"
      :key="index"
      :to="link.location"
      :class="{
        active: $route.path === link.location
      }">
      {{ link.text }}
    </router-link>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      navbarLinks: [
        { location: '/', text: 'Homepage' },
        { location: '/about', text: 'About' },
      ],
    }
  },
}
</script>

<style>
.active {
  color: red;
}
</style>

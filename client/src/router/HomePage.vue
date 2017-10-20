<template>
  <main>
    <h1>Hello people!</h1>
    <ul>
      <li v-for="user in users" :key="user._id">
        {{ user.username }}
      </li>
    </ul>
  </main>
</template>

<script>
import * as apiUsers from '@/api/users'

export default {
  data () {
    return {
      users: [],
    }
  },
  created () {
    apiUsers.getAllUsers().then(users => {
      this.users = users
    })
  },
}
</script>

<style>

</style>

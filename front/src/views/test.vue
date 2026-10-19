<script setup lang="ts">
import AppHeader from '@/components/header/GameHeader.vue'
import type { HeaderUser } from '@/types/header'

const user: HeaderUser = {
  name: 'Анна Смирнова',
  level: 12,
  online: true,
  avatarUrl: 'https://...',
}
</script>

<template>
  <AppHeader :user="user" @profile-click="console.log('profile')" />
</template>
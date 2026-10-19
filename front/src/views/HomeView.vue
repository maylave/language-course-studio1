<script setup lang="ts">
import AppHeader from '@/components/header/AppHeader.vue'
import AppFooter from '@/components/footer/AppFooter.vue'
</script>

<template>
  <!-- flex flex-col выстраивает элементы в колонку -->
  <div class="min-h-screen flex flex-col bg-[#f4f7fb]">
    <AppHeader />

    <!-- flex-1 заставляет <main> занять всё свободное место, выталкивая футер вниз -->
    <main class="flex-1 flex flex-col">
      <!-- Если используете Vue Router, страницы будут рендериться здесь -->
    </main>

    <AppFooter />
  </div>
</template>

<script lang="ts" setup>
import AppHeader from '@/components/header/AppHeader.vue'
import Hero from '@/components/Home/hero/Hero.vue'
import Popular from '@/components/Home/Popular.vue'
import TestimonialsSection from '@/components/Home/testimonials/TestimonialsSection.vue'
import CtaBanner from '@/components/Home/cta/CtaBanner.vue'
import AppFooter from '@/components/footer/AppFooter.vue'
</script>

<template>
  <AppHeader />

  <main class="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
    <div class="flex flex-col w-full">
      <Hero />

      <Popular />

      <TestimonialsSection />

      <CtaBanner />
    </div>
  </main>

  <AppFooter />
</template>

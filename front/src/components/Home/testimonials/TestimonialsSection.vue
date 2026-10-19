<script setup lang="ts">
import TestimonialCard from './TestimonialCard.vue'
import { testimonials } from '@/data/testimonials'
</script>

<template>
  <section class="max-w-7xl mx-auto px-6 lg:px-12 py-24">
    <!-- Header -->
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
      <div>
        <span
          class="font-label-sm text-label-sm uppercase tracking-widest text-primary font-extrabold"
        >
          Истории успеха
        </span>
        <h2 class="font-headline-lg text-headline-lg text-on-surface mt-1">
          Реальные победы наших учеников
        </h2>
      </div>
      <p class="font-body-md text-body-md text-on-surface-variant max-w-md">
        Каждый день более 35,000 человек достигают персональных целей: от первого путешествия до
        оффера в международной компании.
      </p>
    </div>

    <!-- Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <TestimonialCard v-for="item in testimonials" :key="item.id" v-bind="item" />
    </div>
  </section>
</template>

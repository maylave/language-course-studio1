<script setup lang="ts">
defineProps<{
  rating: number
  badgeText: string
  badgeClasses: string
  text: string
  authorName: string
  authorRole: string
  authorAvatar: string
}>()
</script>

<template>
  <article
    class="bg-surface-container-lowest rounded-3xl p-7 shadow-[0_6px_0_0_#dce9ff] flex flex-col justify-between h-full"
  >
    <div>
      <div class="flex items-center justify-between mb-4">
        <div class="flex text-amber-500 text-sm tracking-widest">
          <span v-for="i in rating" :key="i">★</span>
        </div>
        <span
          :class="['px-3 py-1 rounded-full font-label-sm text-label-sm font-bold', badgeClasses]"
        >
          {{ badgeText }}
        </span>
      </div>
      <p class="font-body-md text-body-md text-on-surface italic">
        {{ text }}
      </p>
    </div>

    <div class="flex items-center gap-3.5 mt-6 pt-4 border-t border-surface-container-high/60">
      <div class="w-12 h-12 rounded-2xl overflow-hidden bg-surface-container shrink-0">
        <img class="w-full h-full object-cover" :src="authorAvatar" :alt="authorName" />
      </div>
      <div>
        <div class="font-headline-sm text-body-md text-on-surface">
          {{ authorName }}
        </div>
        <div class="font-body-sm text-body-sm text-on-surface-variant">
          {{ authorRole }}
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, watch } from 'vue'

const props = defineProps<{
  show: boolean
  title?: string
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

// Блокировка скролла при открытой модалке
watch(
  () => props.show,
  (isOpen) => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
  },
)

onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="show" class="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" @click="emit('close')"></div>

        <!-- Modal Panel -->
        <Transition
          enter-active-class="transition ease-out duration-200"
          enter-from-class="opacity-0 translate-y-4 sm:translate-y-8 scale-95"
          enter-to-class="opacity-100 translate-y-0 scale-100"
          leave-active-class="transition ease-in duration-150"
          leave-from-class="opacity-100 translate-y-0 scale-100"
          leave-to-class="opacity-0 translate-y-4 sm:translate-y-8 scale-95"
        >
          <div
            v-if="show"
            class="relative w-full max-w-lg bg-white rounded-[2rem] shadow-[0_12px_0_0_#cbd5e1,0_24px_48px_rgba(0,0,0,0.1)] flex flex-col overflow-hidden"
          >
            <!-- Header -->
            <div class="flex items-center justify-between px-6 py-5 border-b border-slate-100">
              <h3 class="text-xl font-black text-slate-800">{{ title }}</h3>
              <button
                @click="emit('close')"
                class="w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 flex items-center justify-center transition-colors"
              >
                <span class="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <!-- Body -->
            <div class="px-6 py-6">
              <slot></slot>
            </div>

            <!-- Footer (Optional) -->
            <div
              v-if="$slots.footer"
              class="px-6 py-5 bg-slate-50 border-t border-slate-100 flex items-center justify-end gap-3"
            >
              <slot name="footer"></slot>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

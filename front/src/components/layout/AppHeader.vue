<script setup lang="ts">
defineProps<{
  userName: string
  userRoleLabel: string
}>()
</script>

<template>
  <header
    class="fixed top-0 left-72 right-0 h-20 bg-surface/85 backdrop-blur-xl z-40 px-6 flex items-center justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)]"
  >
    <!-- Поиск и контекстные фильтры -->
    <div class="flex items-center gap-4">
      <div
        class="flex items-center gap-1 bg-surface-container-lowest px-4 py-2 rounded-2xl shadow-[0_2px_0_0_#dce9ff] w-72"
      >
        <span class="material-symbols-outlined text-on-surface-variant text-[20px]">search</span>
        <input
          class="bg-transparent border-none outline-none font-body-sm text-body-sm text-on-surface placeholder:text-outline w-full"
          placeholder="Поиск по платформе..."
          type="text"
        />
      </div>
    </div>

    <!-- Уведомления и Профиль -->
    <div class="flex items-center gap-4">
      <slot name="role-badge"></slot>

      <button
        class="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface shadow-[0_2px_0_0_#dce9ff] transition-all relative"
      >
        <span class="material-symbols-outlined text-[20px]">notifications</span>
        <span class="absolute top-2 right-2 w-2 h-2 rounded-full bg-error"></span>
      </button>

      <div class="flex items-center gap-2 pl-1">
        <div class="flex flex-col text-right hidden md:flex">
          <span class="font-label-lg text-label-lg text-on-surface leading-tight">{{
            userName
          }}</span>
          <span class="font-label-sm text-label-sm text-on-surface-variant">{{
            userRoleLabel
          }}</span>
        </div>
        <div
          class="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-[0_2px_0_0_#3631b4]"
        >
          <span class="material-symbols-outlined text-on-primary text-[18px]">person</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
// Здесь можно импортировать логотип или иконки
</script>

<template>
  <footer class="w-full bg-slate-100 border-t-2 border-slate-200 mt-auto py-8 sm:py-12">
    <div
      class="max-w-[1020px] mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-8"
    >
      <!-- Логотип и копирайт -->
      <div class="flex flex-col items-center md:items-start gap-4">
        <div class="flex items-center gap-3">
          <!-- 3D Иконка логотипа -->
          <div
            class="w-10 h-10 bg-indigo-500 rounded-xl shadow-[0_3px_0_#3730a3] flex items-center justify-center text-white font-black text-xl"
          >
            L
          </div>
          <span class="font-black text-2xl text-slate-800 tracking-tight">LinguaPlay</span>
        </div>
        <p class="text-slate-400 font-bold text-sm">© 2026 РКЭ. Все права защищены.</p>
      </div>

      <!-- Навигация -->
      <nav
        class="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4 text-sm font-extrabold text-slate-500"
      >
        <a href="#" class="hover:text-indigo-600 hover:-translate-y-0.5 transition-all"
          >О платформе</a
        >
        <a href="#" class="hover:text-indigo-600 hover:-translate-y-0.5 transition-all">Тарифы</a>
        <a href="#" class="hover:text-indigo-600 hover:-translate-y-0.5 transition-all"
          >Преподавателям</a
        >
        <a href="#" class="hover:text-indigo-600 hover:-translate-y-0.5 transition-all"
          >Политика конфиденциальности</a
        >
      </nav>
    </div>
  </footer>
</template>

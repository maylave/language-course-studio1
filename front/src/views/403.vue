<script setup lang="ts">
// Дополнительная логика (например, функция выхода из аккаунта) может быть добавлена здесь
</script>

<template>
  <div class="bg-background text-[16px] font-medium text-on-surface antialiased min-h-screen flex flex-col justify-between selection:bg-primary-fixed selection:text-on-primary-fixed">
    
    <!-- Шапка страницы -->
    <header class="w-full pt-10 pb-4 flex flex-col items-center justify-center shrink-0">
      <router-link 
        to="/" 
        class="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-surface-container-lowest shadow-[0_4px_0_0_#d3e4fe] transition-transform active:translate-y-[2px] active:shadow-[0_2px_0_0_#d3e4fe]"
      >
        <div class="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-[0_3px_0_0_#3631b4]">
          <span class="material-symbols-outlined text-on-primary text-[20px]">sports_esports</span>
        </div>
        <span class="text-[18px] font-bold text-on-surface tracking-tight">SkillQuest</span>
      </router-link>
    </header>

    <!-- Основной контент -->
    <main class="w-full flex-1 flex flex-col items-center justify-center px-4 py-6">
      <div class="flex flex-col w-full items-center justify-center py-4">
        <div class="w-full max-w-[620px] mx-auto px-1">
          
          <!-- Главная 3D Карточка -->
          <div class="bg-surface-container-lowest rounded-[2rem] p-4 sm:p-10 shadow-[0_8px_0_0_#d3e4fe] relative flex flex-col items-center text-center overflow-hidden">
            
            <!-- Фоновые свечения -->
            <div class="absolute -top-16 -right-16 w-48 h-48 bg-primary/5 rounded-full blur-2xl pointer-events-none"></div>
            <div class="absolute -bottom-16 -left-16 w-48 h-48 bg-secondary-container/10 rounded-full blur-2xl pointer-events-none"></div>
            
            <!-- Иллюстрация с замком и сундуком -->
            <div class="relative w-full max-w-[240px] sm:max-w-[280px] h-[190px] sm:h-[210px] mb-4 flex items-center justify-center">
              
              <!-- Анимированные парящие элементы -->
              <div class="absolute -top-1 left-4 w-9 h-9 rounded-2xl bg-secondary-fixed flex items-center justify-center shadow-[0_3px_0_0_#89ceff] animate-bounce" style="animation-duration: 2.6s;">
                <span class="material-symbols-outlined text-secondary text-[20px]" style="font-variation-settings: 'FILL' 1;">lock</span>
              </div>
              <div class="absolute top-8 right-3 w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center shadow-[0_3px_0_0_#ffb95f] animate-bounce" style="animation-duration: 3.2s;">
                <span class="material-symbols-outlined text-tertiary text-[18px]" style="font-variation-settings: 'FILL' 1;">key</span>
              </div>
              <div class="absolute bottom-2 -left-2 w-7 h-7 rounded-lg bg-surface-container-high flex items-center justify-center shadow-[0_2px_0_0_#cbdbf5]">
                <span class="material-symbols-outlined text-primary text-[16px]" style="font-variation-settings: 'FILL' 1;">token</span>
              </div>
              
              <!-- Картинка сундука -->
              <div class="w-full h-full rounded-2xl overflow-hidden relative shadow-[0_4px_0_0_#cbdbf5]">
                <img class="w-full h-full object-cover select-none" alt="Treasure chest locked" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhSXcnYp1eVFgfK6-Jjj0EDCNW1rmvXivMqMfIbTxphpZlZJ7ZDX5cmSgGd8My88Ht2h7JJ1cZ1wmhqAx9OvuGz_pTOaaomh0_LlQ-kEidVbqM5wpMCiFNIzCiYf7TtyguhJ1ZVOaRZBxXlVLU_q9TxVmVC1YP3s9pNVD9DCEfwi2QgVvwHKaJu7KFtsCdCNO6uD6n_29t3EHL81GWlbLFnHAydlCI3EYcD88Uh9KCMuu_5_OVAvzL5g"/>
              </div>
            </div>

            <!-- Бейдж статуса -->
            <div class="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-surface-container-low shadow-[0_2px_0_0_#d3e4fe] mb-2">
              <span class="w-2.5 h-2.5 rounded-full bg-error shadow-[0_1px_0_0_#93000a] animate-pulse"></span>
              <span class="text-[13px] font-bold uppercase tracking-wider text-error">
                Ошибка 403 • Зона ограниченного доступа
              </span>
            </div>

            <!-- Заголовок -->
            <h1 class="text-[32px] leading-tight font-extrabold text-on-surface tracking-tight mb-1">
              Этот уровень пока заблокирован
            </h1>
            
            <!-- Описание -->
            <p class="text-[16px] font-medium text-on-surface-variant max-w-[500px] mb-6 leading-relaxed">
              У вас нет достаточных прав для просмотра этой страницы. Возможно, для доступа требуется тариф SkillQuest Pro, роль преподавателя или администратора платформы.
            </p>

            <!-- Карточка сравнения уровней доступа -->
            <div class="w-full bg-surface-container-low rounded-[1rem] p-4 shadow-[0_4px_0_0_#d3e4fe] mb-6 text-left">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                
                <!-- Текущий статус -->
                <div class="bg-surface-container-lowest rounded-xl p-2 sm:p-4 shadow-[0_2px_0_0_#dce9ff] flex items-start gap-2">
                  <div class="w-9 h-9 rounded-xl bg-surface-container-high flex items-center justify-center shrink-0 shadow-[0_2px_0_0_#cbdbf5]">
                    <span class="material-symbols-outlined text-outline text-[20px]">person</span>
                  </div>
                  <div class="min-w-0">
                    <span class="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider block">Ваш статус</span>
                    <p class="text-[16px] font-bold text-on-surface truncate">Базовый студент (Free)</p>
                  </div>
                </div>

                <!-- Требуемый статус -->
                <div class="bg-surface-container-lowest rounded-xl p-2 sm:p-4 shadow-[0_2px_0_0_#dce9ff] flex items-start gap-2">
                  <div class="w-9 h-9 rounded-xl bg-tertiary-fixed flex items-center justify-center shrink-0 shadow-[0_2px_0_0_#ffb95f]">
                    <span class="material-symbols-outlined text-tertiary text-[20px]" style="font-variation-settings: 'FILL' 1;">stars</span>
                  </div>
                  <div class="min-w-0">
                    <span class="text-[11px] font-bold text-tertiary uppercase tracking-wider block">Требуется</span>
                    <p class="text-[16px] font-bold text-on-surface truncate">Pro или Преподаватель</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Кнопки действий -->
            <div class="w-full flex flex-col gap-2">
              <router-link 
                to="/subscription-pro" 
                class="w-full min-h-[52px] rounded-[1rem] bg-primary text-on-primary text-[16px] font-bold flex items-center justify-center gap-2 shadow-[0_4px_0_0_#3631b4] transition-all active:translate-y-[4px] active:shadow-[0_0_0_0_#3631b4] hover:bg-primary-container"
              >
                <span class="material-symbols-outlined text-[22px]" style="font-variation-settings: 'FILL' 1;">workspace_premium</span>
                <span>Оформить подписку Pro</span>
              </router-link>
              
              <router-link 
                to="/dashboard" 
                class="w-full min-h-[50px] rounded-[1rem] bg-surface-container-low text-on-surface text-[16px] font-bold flex items-center justify-center gap-2 shadow-[0_4px_0_0_#cbdbf5] transition-all hover:bg-surface-container active:translate-y-[4px] active:shadow-[0_0_0_0_#cbdbf5]"
              >
                <span class="material-symbols-outlined text-[20px] text-on-surface-variant">home</span>
                <span>Вернуться в личный кабинет</span>
              </router-link>
              
              <router-link 
                to="/login" 
                class="w-full py-1 text-[13px] font-bold text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center gap-1 mt-1"
              >
                <span class="material-symbols-outlined text-[16px]">switch_account</span>
                <span>Войти под другим аккаунтом</span>
              </router-link>
            </div>

            <!-- Микро-ссылка на поддержку -->
            <div class="mt-6 pt-2 flex items-center justify-center gap-1 text-on-surface-variant text-[14px] font-medium">
              <span>Считаете, что произошла ошибка?</span>
              <router-link to="/support" class="text-primary text-[11px] font-bold underline hover:text-on-primary-fixed-variant transition-colors">
                Свяжитесь с поддержкой 24/7
              </router-link>
            </div>

          </div>
        </div>
      </div>
    </main>

    <!-- Подвал (Футер) -->
    <footer class="w-full py-6 px-8 shrink-0">
      <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-on-surface-variant text-[13px] font-bold">
        <div class="flex items-center gap-6">
          <router-link to="/terms-of-service" class="hover:text-primary transition-colors">Terms</router-link>
          <router-link to="/privacy-policy" class="hover:text-primary transition-colors">Privacy</router-link>
          <router-link to="/help-center" class="hover:text-primary transition-colors">Help Center</router-link>
        </div>
        <div class="flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-lowest shadow-[0_2px_0_0_#d3e4fe]">
          <span class="material-symbols-outlined text-outline text-[16px]">language</span>
          <span class="text-on-surface text-[11px] font-bold uppercase tracking-wider">English (US)</span>
        </div>
      </div>
    </footer>

  </div>
</template>
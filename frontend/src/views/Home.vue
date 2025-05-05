<template>
    <div class="container mx-auto px-4 py-8">
      <!-- Герой секция -->
      <section class="hero relative overflow-hidden rounded-2xl shadow-lg mb-16">
        <div class="absolute inset-0 z-0">
            <div class="absolute inset-0 bg-accent-pink opacity-50"></div>
            <div class="absolute inset-0 bg-[url('/images/art-brush-strokes.png')] bg-center bg-no-repeat bg-cover opacity-30"></div>
            <div class="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-accent-pink to-transparent"></div>
        </div>

        <div class="relative z-10 px-6 py-16 sm:px-12 md:px-24 lg:px-36 xl:px-48 flex flex-col lg:flex-row items-center justify-between">
            <!-- Левая часть с текстом и кнопками -->
            <div class="max-w-lg mb-8 lg:mb-0">
            <h1 class="text-5xl font-bold text-dark-text drop-shadow-md mb-6">
                Раскройте свой<br>
                <span class="text-primary-pink">творческий потенциал</span><br>
                в школе "Я так вижу"
            </h1>

            <p class="text-xl text-dark-text max-w-lg mb-8 drop-shadow">
                С 2010 года помогаем ученикам находить свой уникальный стиль и видение искусства
            </p>

            <div class="flex flex-wrap gap-4">
                <router-link to="/about" class="btn-pink-outline px-6 py-3 font-medium">
                Узнать больше
                </router-link>
                <router-link to="/contacts" class="btn-pink px-6 py-3 font-medium">
                Записаться
                </router-link>
            </div>
            </div>

            <!-- Правая часть с изображением -->
            <div class="hidden lg:block relative w-96 h-96 ml-12">
            <img 
                src="/images/art-hero-image.jpg" 
                alt="Художественная школа 'Я так вижу'" 
                class="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
            </div>
        </div>
        </section>
  
      <!-- Направления обучения -->
      <section class="mb-16">
  <h2 class="text-3xl font-bold text-center mb-12 relative">
    <span class="relative inline-block">
      Направления обучения
      <span class="absolute -bottom-2 left-0 w-full h-1 bg-primary-pink rounded-full"></span>
    </span>
  </h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <!-- Карточка Живопись -->
    <div class="card relative rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 group">
      <div class="relative h-56 overflow-hidden shadow-lg transition-all duration-300 group">
        <img 
          src="/images/painting.jpg" 
          alt="Живопись" 
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      </div>
      <div class="p-6 relative z-10">
        <h3 class="text-2xl font-bold text-dark mb-4">Живопись</h3>
        <p class="text-dark-text mb-6">Основы академической и современной живописи. Работа с красками, техники смешивания цветов и создание композиций.</p>
        <div class="flex justify-between items-center">
          <span class="inline-flex items-center bg-secondary-pink text-dark-text text-xs px-3 py-1 rounded-full">
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            С 7 лет
          </span>
          <span class="text-dark font-medium">2500₽/урок</span>
        </div>
      </div>
    </div>

    <!-- Карточка Рисунок -->
    <div class="card relative rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 group">
      <div class="relative h-56 overflow-hidden shadow-lg transition-all duration-300 group">
        <img 
          src="/images/drawing.jpg" 
          alt="Рисунок" 
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      </div>
      <div class="p-6 relative z-10">
        <h3 class="text-2xl font-bold text-dark mb-4">Рисунок</h3>
        <p class="text-dark-text mb-6">Техники карандашного и угольного рисунка. Изучение светотени, перспективы и анатомии.</p>
        <div class="flex justify-between items-center">
          <span class="inline-flex items-center bg-secondary-pink text-dark-text text-xs px-3 py-1 rounded-full">
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            С 6 лет
          </span>
          <span class="text-dark font-medium">2200₽/урок</span>
        </div>
      </div>
    </div>

    <!-- Карточка Скульптура -->
    <div class="card relative rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 group">
      <div class="relative h-56 overflow-hidden shadow-lg transition-all duration-300 group">
        <img 
          src="/images/sculpture.jpg" 
          alt="Скульптура" 
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      </div>
      <div class="p-6 relative z-10">
        <h3 class="text-2xl font-bold text-dark mb-4">Скульптура</h3>
        <p class="text-dark-text mb-6">Работа с глиной и другими материалами. Основы объемного моделирования и лепки фигур.</p>
        <div class="flex justify-between items-center">
          <span class="inline-flex items-center bg-secondary-pink text-dark-text text-xs px-3 py-1 rounded-full">
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            С 8 лет
          </span>
          <span class="text-dark font-medium">2800₽/урок</span>
        </div>
      </div>
    </div>
  </div>
</section>
  
      <!-- Наши преимущества -->
      <section class="mb-16 bg-light-bg rounded-xl p-8">
        <h2 class="text-3xl font-bold text-center mb-12 relative">
          <span class="relative inline-block">
            Почему выбирают нас?
            <span class="absolute -bottom-2 left-0 w-full h-1 bg-primary-pink rounded-full"></span>
          </span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="feature-card bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary-pink hover:shadow-md transition">
            <div class="flex items-center mb-4">
              <div class="flex-shrink-0 bg-secondary-pink p-3 rounded-full">
                <AcademicCapIcon class="w-6 h-6 text-dark-text"></AcademicCapIcon>
              </div>
              <h3 class="ml-3 text-lg font-medium text-dark-text">Профессиональные педагоги</h3>
            </div>
            <p class="text-dark-text">Все преподаватели имеют профильное образование и опыт работы</p>
          </div>
          <div class="feature-card bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary-pink hover:shadow-md transition">
            <div class="flex items-center mb-4">
              <div class="flex-shrink-0 bg-secondary-pink p-3 rounded-full">
                <UserGroupIcon class="w-6 h-6 text-dark-text"></UserGroupIcon>
              </div>
              <h3 class="ml-3 text-lg font-medium text-dark-text">Индивидуальный подход</h3>
            </div>
            <p class="text-dark-text">Программа обучения подстраивается под каждого ученика</p>
          </div>
          <div class="feature-card bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary-pink hover:shadow-md transition">
            <div class="flex items-center mb-4">
              <div class="flex-shrink-0 bg-secondary-pink p-3 rounded-full">
                <MusicalNoteIcon class="w-6 h-6 text-dark-text"></MusicalNoteIcon>
              </div>
              <h3 class="ml-3 text-lg font-medium text-dark-text">Выставочная практика</h3>
            </div>
            <p class="text-dark-text">Регулярные выставки работ учеников</p>
          </div>
        </div>
      </section>
  
      <section class="mb-16">
  <h2 class="text-3xl font-bold text-center mb-12 relative">
    <span class="relative inline-block">
      Отзывы родителей
      <span class="absolute -bottom-2 left-0 w-full h-1 bg-primary-pink rounded-full"></span>
    </span>
  </h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    <!-- Отзыв 1 -->
    <div class="testimonial-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
      <div class="flex items-center mb-4">
        <div class="flex-shrink-0 h-10 w-10 rounded-full bg-secondary-pink flex items-center justify-center">
          <span class="text-dark-text font-medium">ОС</span>
        </div>
        <div class="ml-3">
          <h3 class="text-sm font-medium text-dark-text">Ольга Смирнова</h3>
          <p class="text-sm text-light-text">Дочь Мария, 9 лет</p>
          <div class="flex text-yellow-400 mt-1">
            <svg v-for="i in 5" :key="i" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          </div>
        </div>
      </div>
      <p class="italic text-dark-text">"Моя дочь за год обучения сделала огромный прогресс! Спасибо педагогу за терпение и профессионализм."</p>
    </div>

    <!-- Отзыв 2 -->
    <div class="testimonial-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
      <div class="flex items-center mb-4">
        <div class="flex-shrink-0 h-10 w-10 rounded-full bg-secondary-pink flex items-center justify-center">
          <span class="text-dark-text font-medium">АП</span>
        </div>
        <div class="ml-3">
          <h3 class="text-sm font-medium text-dark-text">Андрей Петров</h3>
          <p class="text-sm text-light-text">Сын Иван, 12 лет</p>
          <div class="flex text-yellow-400 mt-1">
            <svg v-for="i in 5" :key="i" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          </div>
        </div>
      </div>
      <p class="italic text-dark-text">"Отличная школа! Сын с удовольствием ходит на занятия скульптурой уже третий год."</p>
    </div>

    <!-- Отзыв 3 -->
    <div class="testimonial-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
      <div class="flex items-center mb-4">
        <div class="flex-shrink-0 h-10 w-10 rounded-full bg-secondary-pink flex items-center justify-center">
          <span class="text-dark-text font-medium">ЕК</span>
        </div>
        <div class="ml-3">
          <h3 class="text-sm font-medium text-dark-text">Елена Козлова</h3>
          <p class="text-sm text-light-text">Дочь София, 7 лет</p>
          <div class="flex text-yellow-400 mt-1">
            <svg v-for="i in 5" :key="i" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          </div>
        </div>
      </div>
      <p class="italic text-dark-text">"Прекрасные преподаватели, которые умеют найти подход к детям. Рекомендую!"</p>
    </div>
  </div>
</section>
  
      <!-- Концерты и достижения -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold text-center mb-12 relative">
          <span class="relative inline-block">
            Наши достижения
            <span class="absolute -bottom-2 left-0 w-full h-1 bg-primary-pink rounded-full"></span>
          </span>
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white p-6 rounded-lg shadow text-center">
            <div class="text-4xl font-bold text-dark-text mb-2">13 лет</div>
            <div class="text-sm uppercase tracking-wider text-dark-text">Опыта работы</div>
          </div>
          <div class="bg-white p-6 rounded-lg shadow text-center">
            <div class="text-4xl font-bold text-dark-text mb-2">150+</div>
            <div class="text-sm uppercase tracking-wider text-dark-text">Учеников</div>
          </div>
          <div class="bg-white p-6 rounded-lg shadow text-center">
            <div class="text-4xl font-bold text-dark-text mb-2">30+</div>
            <div class="text-sm uppercase tracking-wider text-dark-text">Выставок в год</div>
          </div>
          <div class="bg-white p-6 rounded-lg shadow text-center">
            <div class="text-4xl font-bold text-dark-text mb-2">20+</div>
            <div class="text-sm uppercase tracking-wider text-dark-text">Побед в конкурсах</div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import { 
    CheckIcon, 
    UserGroupIcon,
    AcademicCapIcon,
    MusicalNoteIcon,
    TrophyIcon
  } from '@heroicons/vue/24/outline'
  
  export default {
    components: {
      CheckIcon,
      UserGroupIcon,
      AcademicCapIcon,
      MusicalNoteIcon,
      TrophyIcon
    }
  };
  </script>
  
  <style scoped>
  :root {
    --primary-pink: #e91e63;
    --primary-pink-light: #f06292;
    --primary-pink-dark: #ad1457;
    --secondary-pink: #f8bbd0;
    --accent-pink: #fce4ec;
    --light-bg: #fff5f7;
    --dark-text: #4a1a2c;
    --light-text: #fff9fb;
  }
  
  .hero {
    background-image: url('/images/art-school-bg.jpg');
    background-size: cover;
    background-position: center;
    background-blend-mode: multiply;
  }
  
  .btn-pink {
    @apply bg-primary-pink hover:bg-primary-pink-light text-light-text rounded transition;
  }
  
  .feature-card:hover {
    transform: translateY(-5px);
  }

  .btn-pink {
  @apply bg-primary-pink hover:bg-primary-pink-dark text-light-text rounded-full transition duration-300;
}

.btn-pink-outline {
  @apply border-2 border-primary-pink text-primary-pink hover:bg-primary-pink hover:text-light-text rounded-full transition duration-300;
}
  </style>
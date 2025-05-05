<template>
    <div class="container mx-auto px-4 py-8">
      <!-- О школе -->
      <section class="mb-16 relative overflow-hidden rounded-2xl shadow-lg">
        <div class="absolute inset-0 bg-accent-pink opacity-50 z-0"></div>
        <div class="relative z-10 flex flex-col md:flex-row items-center gap-8 p-8">
          <div class="md:w-1/2">
            <h1 class="text-4xl font-bold mb-6 text-dark-text">О художественной школе "Я так вижу"</h1>
            <p class="text-lg mb-4 text-dark-text">
              Основанная в 2010 году, наша школа стала домом для сотен талантливых художников. Мы гордимся тем, что создаем пространство, где каждый может раскрыть свой творческий потенциал.
            </p>
            <p class="text-lg mb-6 text-dark-text">
              Наши выпускники продолжают обучение в ведущих художественных вузах страны и успешно участвуют в международных выставках.
            </p>
            <div class="flex flex-wrap gap-4">
              <router-link to="/contacts" class="btn-pink px-6 py-3 font-medium rounded-full">
                Записаться на пробное занятие
              </router-link>
              <router-link to="/teachers" class="btn-pink-outline px-6 py-3 font-medium rounded-full">
                Наши преподаватели
              </router-link>
            </div>
          </div>
          <div class="md:w-1/2">
            <img 
              src="/images/about-school.jpg" 
              alt="Наша школа" 
              class="rounded-xl shadow-lg w-full h-auto transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>
  
      <!-- Наша миссия -->
      <section class="mb-16 relative overflow-hidden rounded-2xl shadow-lg">
  <div class="absolute inset-0 bg-accent-pink opacity-30 z-0"></div>
  <div class="relative z-10 flex flex-col lg:flex-row items-center gap-8 p-12">
    <!-- Левая часть: Иллюстрация -->
    <div class="lg:w-1/2">
      <img 
        src="/images/art-mission.jpg" 
        alt="Наша миссия" 
        class="w-full h-auto rounded-xl shadow-lg transition duration-500 hover:scale-105"
      />
    </div>

    <!-- Правая часть: Текст -->
    <div class="lg:w-1/2 space-y-6">
      <h2 class="text-4xl font-bold text-dark-text mb-6">Наша миссия</h2>
      <p class="text-lg text-dark-text mb-4">
        Мы стремимся вдохновлять людей всех возрастов на творческое самовыражение. Искусство — это не просто навык, а способ увидеть мир по-другому.
      </p>
      <p class="text-lg text-dark-text mb-6">
        Каждый ученик для нас уникален. Мы помогаем раскрыть его потенциал, создавая дружелюбную и поддерживающую среду.
      </p>
      <ul class="space-y-3">
        <li class="flex items-center text-dark-text">
          <svg class="w-5 h-5 mr-3 text-primary-pink" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L7 12.586V3a1 1 0 012 0v9.586l6.293-6.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
          Доступное образование для всех возрастов
        </li>
        <li class="flex items-center text-dark-text">
          <svg class="w-5 h-5 mr-3 text-primary-pink" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L7 12.586V3a1 1 0 012 0v9.586l6.293-6.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
          Индивидуальный подход к каждому ученику
        </li>
        <li class="flex items-center text-dark-text">
          <svg class="w-5 h-5 mr-3 text-primary-pink" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L7 12.586V3a1 1 0 012 0v9.586l6.293-6.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
          Развитие творческого мышления
        </li>
      </ul>
    </div>
  </div>
</section>
  
      <!-- Наши принципы -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold text-center mb-12 relative">
          <span class="relative inline-block">
            Наши принципы
            <span class="absolute -bottom-2 left-0 w-full h-1 bg-primary-pink rounded-full"></span>
          </span>
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(principle, index) in principles" :key="index" class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary-pink hover:shadow-md transition flex items-start">
            <div class="bg-secondary-pink p-2 rounded-full mr-4">
              <svg class="w-6 h-6 text-dark-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-2 text-dark-text">{{ principle.title }}</h3>
              <p class="text-dark-text">{{ principle.description }}</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Наша команда -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold text-center mb-12 relative">
          <span class="relative inline-block">
            Наши преподаватели
            <span class="absolute -bottom-2 left-0 w-full h-1 bg-primary-pink rounded-full"></span>
          </span>
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(teacher, index) in teachers" :key="index" class="team-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
            <div class="relative h-64 overflow-hidden">
              <img 
                :src="teacher.image" 
                :alt="teacher.name" 
                class="w-full h-full object-cover transition duration-500 hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-1 text-dark-text">{{ teacher.name }}</h3>
              <p class="text-primary-pink font-medium mb-2">{{ teacher.specialization }}</p>
              <p class="text-dark-text text-sm mb-4">{{ teacher.experience }}</p>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="(skill, i) in teacher.skills" 
                  :key="i" 
                  class="inline-block bg-secondary-pink text-dark-text text-xs px-2 py-1 rounded-full"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- История школы
      <section class="mb-16 bg-light-bg rounded-xl p-8">
        <h2 class="text-3xl font-bold text-center mb-12 relative">
          <span class="relative inline-block">
            История школы
            <span class="absolute -bottom-2 left-0 w-full h-1 bg-primary-pink rounded-full"></span>
          </span>
        </h2>
        <div class="max-w-4xl mx-auto">
          <div class="space-y-8">
            <div v-for="(event, index) in history" :key="index" class="flex">
              <div class="flex-shrink-0 mr-4">
                <div class="flex items-center justify-center w-12 h-12 rounded-full bg-secondary-pink text-dark-text font-bold">
                  {{ event.year }}
                </div>
              </div>
              <div class="flex-grow">
                <h3 class="text-lg font-semibold mb-2 text-dark-text">{{ event.title }}</h3>
                <p class="text-dark-text">{{ event.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section> -->
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        principles: [
          { title: "Индивидуальный подход", description: "Каждый ученик уникален, и мы подбираем программу под его способности и цели" },
          { title: "Профессионализм", description: "Все наши преподаватели — дипломированные специалисты с профильным образованием" },
          { title: "Любовь к искусству", description: "Мы учим не только технике, но и пониманию и чувствованию искусства" },
          { title: "Творческая свобода", description: "Поощряем эксперименты и поиск собственного стиля" },
          { title: "Регулярные выставки", description: "Ученики участвуют в выставках несколько раз в год" },
          { title: "Комфортная атмосфера", description: "Создаем дружелюбную среду без излишнего давления" }
        ],
        teachers: [
          { name: "Елена Петрова", specialization: "Живопись", experience: "Преподает 15 лет, выпускница РАХ", skills: ["Академическая", "Современная", "Пейзаж"], image: "/images/teacher1.jpg" },
          { name: "Алексей Смирнов", specialization: "Рисунок", experience: "Преподает 12 лет, участник международных выставок", skills: ["Карандаш", "Уголь", "Тушь"], image: "/images/teacher2.jpg" },
          { name: "Ольга Иванова", specialization: "Скульптура", experience: "Преподает 10 лет, лауреат премий", skills: ["Глина", "Мрамор", "Бронза"], image: "/images/teacher3.jpg" }
        ],
        history: [
          { year: "2010", title: "Основание школы", description: "Открытие первой студии с тремя классами и пятью преподавателями" },
          { year: "2015", title: "Первые победы", description: "Наши ученики впервые заняли призовые места на городских конкурсах" },
          { year: "2020", title: "Расширение", description: "Переезд в новое просторное здание с выставочным залом" },
          { year: "2023", title: "Международное признание", description: "Наши ученики победили на конкурсе в Париже" }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .btn-pink {
    @apply bg-primary-pink hover:bg-primary-pink-dark text-light-text rounded-full transition;
  }
  
  .btn-pink-outline {
    @apply border border-primary-pink text-primary-pink hover:bg-primary-pink hover:text-light-text rounded-full transition;
  }
  
  .team-card:hover {
    transform: translateY(-5px);
  }
  </style>
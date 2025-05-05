<template>
    <div class="contacts-page container mx-auto px-4 py-8">
      <!-- Герой секция -->
    <section class="hero relative overflow-hidden rounded-2xl shadow-lg mb-16">
      <div class="absolute inset-0 z-0">
        <!-- Градиентный фон -->
        <div class="absolute inset-0 bg-accent-pink opacity-50"></div>
        <!-- Фоновое изображение -->
        <div class="absolute inset-0 bg-[url('/images/contact-brush-strokes.png')] bg-center bg-no-repeat bg-cover opacity-30"></div>
        <!-- Градиент снизу -->
        <div class="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-accent-pink to-transparent"></div>
      </div>

      <!-- Контент герой-секции -->
      <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 p-12">
        <div class="md:w-1/2">
          <h1 class="text-4xl md:text-5xl font-bold text-dark-text mb-4">
            Свяжитесь с нами
          </h1>
          <p class="text-lg text-ark-text mb-6">
            Мы всегда рады ответить на ваши вопросы и помочь записаться на пробное занятие.
          </p>
          <div class="flex flex-wrap gap-4">
            <router-link to="/contacts" class="btn-pink px-6 py-3 font-medium rounded-full transition">
              Записаться на пробное занятие
            </router-link>
            <router-link to="/teachers" class="btn-pink-outline px-6 py-3 font-medium rounded-full transition">
              Наши преподаватели
            </router-link>
          </div>
        </div>

        <!-- Изображение справа -->
        <div class="md:w-1/2">
        </div>
      </div>
    </section>
  
      <!-- Основной контент -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Левая колонка -->
        <div class="bg-white rounded-xl shadow-md p-6 mb-8">
  <!-- Заголовок -->
  <h2 class="text-3xl font-bold mb-6 text-dark-text">Как нас найти</h2>

  <!-- Контактная информация -->
  <div class="space-y-4">
    <div class="flex items-center">
      <div class="flex-shrink-0 bg-primary-pink p-2 rounded-full mr-4">
        <i class="fas fa-map-marker-alt text-light-text"></i>
      </div>
      <div>
        <h3 class="font-medium text-lg mb-1">Адрес</h3>
        <p class="text-dark-text">г. Москва, ул. Творческая, д. 15, стр. 2</p>
        <p class="text-secondary-text text-sm mt-1">Вход со стороны двора</p>
      </div>
    </div>
    <div class="flex items-center">
      <div class="flex-shrink-0 bg-primary-pink p-2 rounded-full mr-4">
        <i class="fas fa-phone text-light-text"></i>
      </div>
      <div>
        <h3 class="font-medium text-lg mb-1">Телефон</h3>
        <p class="text-dark-text">+7 (495) 123-45-67</p>
        <p class="text-secondary-text text-sm mt-1">Пн-Пт с 10:00 до 20:00</p>
      </div>
    </div>
    <div class="flex items-center">
      <div class="flex-shrink-0 bg-primary-pink p-2 rounded-full mr-4">
        <i class="fas fa-envelope text-light-text"></i>
      </div>
      <div>
        <h3 class="font-medium text-lg mb-1">Email</h3>
        <p class="text-dark-text">hello@yavisu.ru</p>
        <p class="text-secondary-text text-sm mt-1">Для записи и вопросов</p>
      </div>
    </div>
    <div class="flex items-center">
      <div class="flex-shrink-0 bg-primary-pink p-2 rounded-full mr-4">
        <i class="fas fa-clock text-light-text"></i>
      </div>
      <div>
        <h3 class="font-medium text-lg mb-1">Часы работы</h3>
        <p class="text-dark-text">
          Пн-Пт: 10:00 - 20:00<br />
          Сб-Вс: 11:00 - 18:00
        </p>
      </div>
    </div>
  </div>

  <!-- Социальные сети -->
  <h3 class="text-2xl font-bold mt-8 mb-4 text-dark-text">Мы в социальных сетях</h3>
  <div class="flex space-x-4">
    <a href="#" class="social-icon bg-primary-pink hover:bg-secondary-pink transition text-light-text">
      <i class="fab fa-vk"></i>
    </a>
    <a href="#" class="social-icon bg-primary-pink hover:bg-secondary-pink transition text-light-text">
      <i class="fab fa-telegram"></i>
    </a>
    <a href="#" class="social-icon bg-primary-pink hover:bg-secondary-pink transition text-light-text">
      <i class="fab fa-instagram"></i>
    </a>
    <a href="#" class="social-icon bg-primary-pink hover:bg-secondary-pink transition text-light-text">
      <i class="fab fa-youtube"></i>
    </a>
  </div>
</div>
  
        <!-- Правая колонка (Карта) -->
        <div>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A6d3c8b4a4f3c7e1b5e3c8b4a4f3c7e1b5e3c8b4a4f3c7e1b5e3c8b4a4f3c7e1b5&amp;source=constructor"
            width="100%"
            height="400"
            frameborder="0"
            style="border-radius: 0.5rem; border: none;"
            class="shadow-md"
          ></iframe>
        </div>
      </div>
  
      <!-- Административный состав -->
      <section class="team-section mt-16">
        <h2 class="text-3xl font-bold text-center mb-12 relative">
          <span class="relative inline-block">
            Административный состав
            <span class="absolute -bottom-2 left-0 w-full h-1 bg-primary-pink rounded-full"></span>
          </span>
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div v-for="admin in admins" :key="admin.name" class="admin-card bg-white rounded-lg shadow-md overflow-hidden transition hover:shadow-lg">
            <img :src="admin.image" :alt="admin.name" class="w-full h-48 object-cover">
            <div class="p-4">
              <h4 class="text-lg font-semibold mb-1">{{ admin.name }}</h4>
              <p class="text-primary-pink font-medium">{{ admin.position }}</p>
              <p class="text-light-text text-sm">{{ admin.email }}</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Форма обратной связи -->
      <section class="contact-form-section mt-16">
        <h2 class="text-3xl font-bold text-center mb-12 relative">
          <span class="relative inline-block">
            Напишите нам
            <span class="absolute -bottom-2 left-0 w-full h-1 bg-primary-pink rounded-full"></span>
          </span>
        </h2>
        <form @submit.prevent="submitForm" class="max-w-2xl mx-auto space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="text" 
              v-model="form.name" 
              placeholder="Ваше имя" 
              required 
              class="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-pink transition"
            />
            <input 
              type="email" 
              v-model="form.email" 
              placeholder="Ваш email" 
              required 
              class="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-pink transition"
            />
          </div>
          <input 
            type="text" 
            v-model="form.subject" 
            placeholder="Тема сообщения" 
            class="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-pink transition w-full"
          />
          <textarea 
            v-model="form.message" 
            placeholder="Ваше сообщение" 
            rows="5" 
            required 
            class="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-pink transition w-full"
          ></textarea>
          <button 
            type="submit" 
            class="btn-pink w-full py-3 px-6 text-lg font-medium rounded-full transition hover:bg-secondary-pink"
          >
            Отправить сообщение
          </button>
        </form>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        admins: [
          {
            name: "Ольга Иванова",
            position: "Директор",
            email: "olga@yavisu.ru",
            image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
          },
          {
            name: "Алексей Петров",
            position: "Зам. директора",
            email: "alex@yavisu.ru",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
          },
          {
            name: "Елена Смирнова",
            position: "Администратор",
            email: "elena@yavisu.ru",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
          },
          {
            name: "Ирина Козлова",
            position: "Менеджер",
            email: "irina@yavisu.ru",
            image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
          },
          {
            name: "Дмитрий Волков",
            position: "Бухгалтер",
            email: "dmitry@yavisu.ru",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
          },
          {
            name: "Анна Морозова",
            position: "PR-менеджер",
            email: "anna@yavisu.ru",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
          }
        ],
        form: {
          name: "",
          email: "",
          subject: "",
          message: ""
        }
      };
    },
    methods: {
      submitForm() {
        // Логика отправки формы
        console.log("Форма отправлена:", this.form);
        alert("Сообщение успешно отправлено!");
        this.form = {
          name: "",
          email: "",
          subject: "",
          message: ""
        };
      }
    }
  };
  </script>
  
  <style scoped>
  .contacts-hero {
    background-image: url('/images/hero-bg.jpg');
    background-size: cover;
    background-position: center;
    background-blend-mode: multiply;
  }
  .btn-pink {
    @apply bg-primary-pink hover:bg-secondary-pink text-light-text rounded-full transition;
  }
  .social-link {
    @apply text-2xl cursor-pointer transition-colors duration-300;
  }
  .admin-card:hover {
    transform: translateY(-5px);
  }

  .hero {
  background-image: url('/images/contact-background.jpg');
  background-size: cover;
  background-position: center;
  background-blend-mode: multiply;
}
.btn-pink {
  @apply bg-primary-pink hover:bg-secondary-pink text-light-text rounded-full transition;
}
.btn-pink-outline {
  @apply border border-primary-pink text-primary-pink hover:bg-primary-pink hover:text-light-text rounded-full transition;
}

.social-icon {
  @apply w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300;
}
.text-light-text {
  @apply text-gray-100;
}
.text-secondary-text {
  @apply text-gray-500;
}
</style>
<template>
  <div class="min-h-screen flex flex-col bg-pale-pink">
    <Header />
    <main class="flex-grow">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: { Header, Footer }
};
</script>

<style scoped>
/* Основные цвета темы */
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

body {
  font-family: 'Roboto', sans-serif;
  background-color: var(--light-bg);
  color: var(--dark-text);
  line-height: 1.6;
}

/* Глобальные анимации */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.fade-in {
  animation: fadeIn 0.5s ease-in;
}

/* Кастомные кнопки */
.btn-pink {
  background-color: var(--primary-pink);
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.btn-pink:hover {
  background-color: var(--primary-pink-dark);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.btn-outline-pink {
  background-color: transparent;
  color: var(--primary-pink);
  border: 2px solid var(--primary-pink);
  padding: 0.6rem 1.2rem;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-outline-pink:hover {
  background-color: var(--primary-pink);
  color: white;
}

/* Стили для таблиц */
.table-container {
  overflow-x: auto;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
  border-radius: 0.5rem;
}

.table {
  width: 100%;
  text-align: left;
  color: var(--dark-text);
}

.table thead {
  background-color: var(--primary-pink);
  color: white;
}

.table th {
  padding: 1rem 1.5rem;
  font-weight: 500;
}

.table tbody tr {
  background-color: white;
  border-bottom: 1px solid #f3d7e4;
  transition: background-color 0.3s;
}

.table tbody tr:hover {
  background-color: var(--accent-pink);
}

.table td {
  padding: 1rem 1.5rem;
}

.table-actions {
  display: flex;
  gap: 0.5rem;
}

/* Стили для кнопок в таблице */
.btn-table {
  padding: 0.5rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s;
}

.btn-view {
  background-color: var(--primary-pink);
  color: white;
}

.btn-view:hover {
  background-color: var(--primary-pink-dark);
}

.btn-edit {
  background-color: #ff8a80;
  color: white;
}

.btn-edit:hover {
  background-color: #ff5252;
}

.btn-delete {
  background-color: #d81b60;
  color: white;
}

.btn-delete:hover {
  background-color: #c2185b;
}

.btn-add {
  background-color: var(--primary-pink);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  transition: all 0.3s;
}

.btn-add:hover {
  background-color: var(--primary-pink-dark);
}

/* Дополнительные классы для художественной школы */
.bg-pale-pink {
  background-color: var(--light-bg);
}

.artistic-shadow {
  box-shadow: 0 4px 20px rgba(233, 30, 99, 0.15);
}

.brush-stroke {
  position: relative;
}

.brush-stroke::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, var(--primary-pink), var(--primary-pink-light));
  opacity: 0.7;
}
</style>
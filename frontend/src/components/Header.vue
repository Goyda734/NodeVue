<template>
    <header class="bg-gradient-to-r from-pink-600 to-pink-400 text-white shadow-lg">
        <nav class="container mx-auto px-6 py-4">
            <div class="flex justify-between items-center">
                <div class="flex items-center space-x-2">
                    <h1 class="text-2xl font-bold tracking-tight">Художественная школа <span class="text-pink-200">"Я так вижу"</span></h1>
                </div>
                <div class="hidden md:flex items-center space-x-8">
                    <router-link 
                        v-for="link in links" 
                        :key="link.path"
                        :to="link.path" 
                        class="nav-link relative group"
                        :class="{ 'font-semibold': $route.path === link.path }"
                    >
                        {{ link.name }}
                        <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-200 transition-all group-hover:w-full"></span>
                    </router-link>
                    
                    <template v-if="!isAuthenticated">
                        <router-link to="/login" class="btn-outline-pink px-4 py-2 text-sm">
                            Вход
                        </router-link>
                        <router-link to="/register" class="btn-pink px-4 py-2 text-sm">
                            Регистрация
                        </router-link>
                    </template>
                    
                    <template v-else>
                        <span class="text-sm bg-pink-500 px-3 py-1 rounded-full">{{ userRole }}</span>
                        <button @click="logout" class="flex items-center text-sm hover:text-pink-200 transition">
                            <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                            </svg>
                            Выйти
                        </button>
                    </template>
                </div>
                
                <!-- Мобильное меню -->
                <button class="md:hidden focus:outline-none" @click="isMobileMenuOpen = !isMobileMenuOpen">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
            
            <!-- Мобильное меню (выпадающее) -->
            <div v-if="isMobileMenuOpen" class="md:hidden mt-4 space-y-3 pb-3">
                <router-link 
                    v-for="link in links" 
                    :key="link.path"
                    :to="link.path" 
                    class="block px-3 py-2 rounded hover:bg-pink-500 transition"
                    @click="isMobileMenuOpen = false"
                >
                    {{ link.name }}
                </router-link>
                
                <div v-if="!isAuthenticated" class="pt-2 border-t border-pink-500">
                    <router-link 
                        to="/login" 
                        class="block px-3 py-2 rounded hover:bg-pink-500 transition mb-2"
                        @click="isMobileMenuOpen = false"
                    >
                        Вход
                    </router-link>
                    <router-link 
                        to="/register" 
                        class="block btn-pink w-full text-center"
                        @click="isMobileMenuOpen = false"
                    >
                        Регистрация
                    </router-link>
                </div>
                
                <div v-else class="pt-2 border-t border-pink-500">
                    <div class="px-3 py-2 text-sm">
                        Роль: <span class="font-medium">{{ userRole }}</span>
                    </div>
                    <button 
                        @click="logout" 
                        class="flex items-center w-full px-3 py-2 rounded hover:bg-pink-500 transition"
                    >
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                        </svg>
                        Выйти
                    </button>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { computed, ref } from 'vue';

export default {
    setup() {
        const store = useStore();
        const router = useRouter();
        const isMobileMenuOpen = ref(false);

        const links = [
            { name: 'Главная', path: '/' },
            { name: 'О нас', path: '/about' },
            { name: 'Контакты', path: '/contacts' },
            { name: 'Студенты', path: '/students' },
            { name: 'Преподаватели', path: '/teachers' },
        ];

        const isAuthenticated = computed(() => store.getters.isAuthenticated);
        const userRole = computed(() => store.getters.userRole);

        const logout = () => {
            store.dispatch('logout');
            router.push('/login');
            isMobileMenuOpen.value = false;
        };

        return { 
            isAuthenticated, 
            userRole, 
            logout,
            links,
            isMobileMenuOpen
        };
    }
};
</script>

<style scoped>
.nav-link {
    @apply text-white hover:text-pink-200 transition-colors;
}

.router-link-active {
    @apply text-pink-200;
}

.btn-pink {
    @apply bg-pink-500 hover:bg-pink-600 text-white rounded transition;
}

.btn-outline-pink {
    @apply border border-pink-300 hover:bg-pink-50/10 text-white rounded transition;
}
</style>
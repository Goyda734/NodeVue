<template>
    <div class="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100 flex items-center justify-center p-4">
        <div class="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md border border-pink-100">
            <div class="text-center mb-8">
                <div class="mx-auto w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                    <svg class="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"></path>
                    </svg>
                </div>
                <h1 class="text-3xl font-bold text-pink-700 mb-2">Добро пожаловать</h1>
                <p class="text-pink-500">Введите ваши учетные данные</p>
            </div>
            
            <form @submit.prevent="login" class="space-y-5">
                <div>
                    <label for="email" class="block text-sm font-medium text-pink-700 mb-1">Email</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg class="h-5 w-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                        </div>
                        <input 
                            id="email" 
                            v-model="email" 
                            type="email" 
                            placeholder="example@mail.com"
                            class="w-full pl-10 pr-4 py-3 border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-300 focus:border-pink-300 transition-all duration-200"
                            required
                        />
                    </div>
                </div>
                
                <div>
                    <label for="password" class="block text-sm font-medium text-pink-700 mb-1">Пароль</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg class="h-5 w-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                            </svg>
                        </div>
                        <input 
                            id="password" 
                            v-model="password" 
                            type="password" 
                            placeholder="••••••••"
                            class="w-full pl-10 pr-4 py-3 border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-300 focus:border-pink-300 transition-all duration-200"
                            required
                        />
                    </div>
                </div>
                
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <input id="remember-me" type="checkbox" class="h-4 w-4 text-pink-600 focus:ring-pink-500 border-pink-300 rounded">
                        <label for="remember-me" class="ml-2 block text-sm text-pink-600">Запомнить меня</label>
                    </div>
                    <router-link to="/forgot-password" class="text-sm text-pink-600 hover:text-pink-700 hover:underline">Забыли пароль?</router-link>
                </div>
                
                <button 
                    type="submit" 
                    class="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 px-4 rounded-xl font-medium hover:from-pink-600 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-pink-300/40 flex items-center justify-center"
                >
                    <svg class="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                    </svg>
                    Войти
                </button>
                
                <p v-if="error" class="text-center py-3 px-4 bg-pink-100 text-pink-700 rounded-lg">{{ error }}</p>
            </form>
            
            <div class="mt-6 pt-5 border-t border-pink-100">
                <p class="text-center text-pink-600">Нет аккаунта? 
                    <router-link to="/register" class="font-medium text-pink-700 hover:underline">Зарегистрируйтесь</router-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const store = useStore();
        const router = useRouter();
        const email = ref('');
        const password = ref('');
        const error = ref('');

        const login = async () => {
            error.value = '';
            const success = await store.dispatch('login', { 
                email: email.value, 
                password: password.value 
            });
            if (success) {
                router.push('/');
            } else {
                error.value = 'Неверный email или пароль';
            }
        };

        return { email, password, error, login };
    }
};
</script>

<style scoped>
/* Дополнительные анимации */
.transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
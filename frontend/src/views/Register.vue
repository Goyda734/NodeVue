<template>
    <div class="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100 flex items-center justify-center p-4">
        <div class="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md border border-pink-100">
            <div class="text-center mb-8">
                <div class="mx-auto w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                    <svg class="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
                    </svg>
                </div>
                <h1 class="text-3xl font-bold text-pink-700 mb-2">Регистрация</h1>
                <p class="text-pink-500">Создайте новый аккаунт</p>
            </div>
            
            <form @submit.prevent="register" class="space-y-5">
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
                
                <div>
                    <label for="confirm-password" class="block text-sm font-medium text-pink-700 mb-1">Подтвердите пароль</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg class="h-5 w-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <input 
                            id="confirm-password" 
                            v-model="confirmPassword" 
                            type="password" 
                            placeholder="••••••••"
                            class="w-full pl-10 pr-4 py-3 border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-300 focus:border-pink-300 transition-all duration-200"
                            required
                        />
                    </div>
                </div>
                
                <button 
                    type="submit" 
                    class="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 px-4 rounded-xl font-medium hover:from-pink-600 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-pink-300/40 flex items-center justify-center"
                >
                    <svg class="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"></path>
                    </svg>
                    Зарегистрироваться
                </button>
                
                <p v-if="error" class="text-center py-3 px-4 bg-pink-100 text-pink-700 rounded-lg">{{ error }}</p>
            </form>
            
            <div class="mt-6 pt-5 border-t border-pink-100">
                <p class="text-center text-pink-600">Уже есть аккаунт? 
                    <router-link to="/login" class="font-medium text-pink-700 hover:underline">Войдите</router-link>
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
        const confirmPassword = ref('');
        const error = ref('');

        const register = async () => {
            error.value = '';
            if (password.value !== confirmPassword.value) {
                error.value = 'Пароли не совпадают';
                return;
            }
            try {
                const result = await store.dispatch('register', {
                    email: email.value,
                    password: password.value
                });
                if (result.success) {
                    router.push('/login');
                } else {
                    error.value = result.error;
                }
            } catch (err) {
                error.value = err.response?.data?.error || 'Ошибка регистрации';
            }
        };

        return { email, password, confirmPassword, error, register };
    }
};
</script>

<style scoped>
.transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
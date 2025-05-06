<template>
    <div class="container mx-auto p-4">
        <div class="flex justify-between items-center mb-6">
            <h1 class="text-3xl font-bold text-pink-700">Студенты</h1>
            <button 
                v-if="isAdmin" 
                @click="showForm = true" 
                class="flex items-center bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-4 py-3 rounded-xl shadow-lg shadow-pink-300/50 transition-all duration-300"
            >
                <svg class="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                Добавить студента
            </button>
        </div>

        <!-- Таблица студентов -->
        <div class="table-container bg-white rounded-xl shadow-lg overflow-hidden">
            <table class="table w-full">
                <thead class="bg-gradient-to-r from-pink-500 to-pink-400 text-white">
                    <tr>
                        <th class="py-3 px-4 text-left font-semibold">ID</th>
                        <th class="py-3 px-4 text-left font-semibold">Имя</th>
                        <th class="py-3 px-4 text-left font-semibold">Фамилия</th>
                        <th class="py-3 px-4 text-left font-semibold">Email</th>
                        <th class="py-3 px-4 text-left font-semibold">Фото</th>
                        <th class="py-3 px-4 text-left font-semibold">Действия</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-pink-100">
                    <tr v-for="student in students" :key="student.id" class="hover:bg-pink-50 transition-colors">
                        <td class="py-3 px-4">{{ student.id }}</td>
                        <td class="py-3 px-4">{{ student.first_name }}</td>
                        <td class="py-3 px-4">{{ student.last_name }}</td>
                        <td class="py-3 px-4 text-pink-600">{{ student.email }}</td>
                        <td class="py-3 px-4">
                            <img 
                                :src="getImageUrl(student.photo_file_name)" 
                                alt="Student" 
                                class="w-12 h-12 object-cover rounded-full border-2 border-pink-200"
                            />
                        </td>
                        <td class="py-3 px-4">
                            <div class="table-actions flex space-x-2">
                                <button 
                                    @click="viewStudent(student)"
                                    class="btn-view flex items-center text-sm bg-pink-100 hover:bg-pink-200 text-pink-700 px-3 py-1 rounded-lg transition-all"
                                >
                                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                    </svg>
                                    Просмотр
                                </button>
                                <button 
                                    v-if="isAdmin" 
                                    @click="editStudent(student)"
                                    class="btn-edit flex items-center text-sm bg-pink-100 hover:bg-pink-200 text-pink-700 px-3 py-1 rounded-lg transition-all"
                                >
                                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                                    </svg>
                                    Редактировать
                                </button>
                                <button 
                                    v-if="isAdmin" 
                                    @click="deleteStudent(student.id)"
                                    class="btn-delete flex items-center text-sm bg-pink-100 hover:bg-pink-200 text-pink-700 px-3 py-1 rounded-lg transition-all"
                                >
                                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                    </svg>
                                    Удалить
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Пагинация -->
        <div class="mt-6 flex justify-center items-center space-x-2">
            <button 
                :disabled="currentPage === 1" 
                @click="currentPage = 1"
                class="px-3 py-1 bg-pink-100 text-pink-700 rounded-lg disabled:opacity-50 hover:bg-pink-200 transition"
            >
                В начало
            </button>
            <button 
                :disabled="currentPage === 1" 
                @click="currentPage--"
                class="px-3 py-1 bg-pink-100 text-pink-700 rounded-lg disabled:opacity-50 hover:bg-pink-200 transition"
            >
                Назад
            </button>
            <button 
                v-for="page in displayedPages" 
                :key="page" 
                @click="currentPage = page" 
                :class="[
                    'px-4 py-1 rounded-lg transition',
                    currentPage === page ? 'bg-pink-500 text-white' : 'bg-pink-100 text-pink-700 hover:bg-pink-200'
                ]"
            >
                {{ page }}
            </button>
            <button 
                :disabled="currentPage === totalPages" 
                @click="currentPage++"
                class="px-3 py-1 bg-pink-100 text-pink-700 rounded-lg disabled:opacity-50 hover:bg-pink-200 transition"
            >
                Вперед
            </button>
            <button 
                :disabled="currentPage === totalPages" 
                @click="currentPage = totalPages"
                class="px-3 py-1 bg-pink-100 text-pink-700 rounded-lg disabled:opacity-50 hover:bg-pink-200 transition"
            >
                В конец
            </button>
        </div>

        <!-- Форма добавления/редактирования -->
        <div v-if="showForm" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div class="bg-white p-6 rounded-xl max-w-lg w-full shadow-xl">
                <h2 class="text-xl font-bold mb-4 text-pink-700">{{ form.id ? 'Редактировать студента' : 'Добавить студента' }}</h2>
                <Form @submit="saveStudent">
                    <div class="grid grid-cols-1 gap-4">
                        <input v-model="form.first_name" type="text" placeholder="Имя" class="border border-pink-200 p-2 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-transparent" required />
                        <input v-model="form.last_name" type="text" placeholder="Фамилия" class="border border-pink-200 p-2 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-transparent" required />
                        <input v-model="form.email" type="email" placeholder="Email" class="border border-pink-200 p-2 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-transparent" required />
                        <input v-model="form.phone" type="text" placeholder="Телефон" class="border border-pink-200 p-2 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-transparent" />
                        <input v-model="form.date_of_birth" type="date" placeholder="Дата рождения" class="border border-pink-200 p-2 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-transparent" required />
                        <input v-model="form.address" type="text" placeholder="Адрес" class="border border-pink-200 p-2 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-transparent" />
                        <input v-model="form.city" type="text" placeholder="Город" class="border border-pink-200 p-2 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-transparent" />
                        <input v-model="form.country" type="text" placeholder="Страна" class="border border-pink-200 p-2 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-transparent" />
                        <input type="file" @change="handleFileChange" class="border border-pink-200 p-2 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-transparent" />
                    </div>
                    <div class="mt-4 flex justify-end space-x-2">
                        <button type="submit" class="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition-colors">
                            Сохранить
                        </button>
                        <button @click="showForm = false" class="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-lg transition-colors">
                            Отмена
                        </button>
                    </div>
                </Form>
            </div>
        </div>

        <!-- Модальное окно просмотра -->
        <div v-if="showView" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div class="bg-white p-6 rounded-xl max-w-lg w-full shadow-xl">
                <h2 class="text-xl font-bold mb-4 text-pink-700">Просмотр студента</h2>
                <div class="grid grid-cols-1 gap-3">
                    <p><strong class="text-pink-600">ID:</strong> {{ viewStudentData.id }}</p>
                    <p><strong class="text-pink-600">Имя:</strong> {{ viewStudentData.first_name }}</p>
                    <p><strong class="text-pink-600">Фамилия:</strong> {{ viewStudentData.last_name }}</p>
                    <p><strong class="text-pink-600">Email:</strong> {{ viewStudentData.email }}</p>
                    <p><strong class="text-pink-600">Телефон:</strong> {{ viewStudentData.phone || 'Не указан' }}</p>
                    <p><strong class="text-pink-600">Дата рождения:</strong> {{ formatDate(viewStudentData.date_of_birth) }}</p>
                    <p><strong class="text-pink-600">Адрес:</strong> {{ viewStudentData.address || 'Не указан' }}</p>
                    <p><strong class="text-pink-600">Город:</strong> {{ viewStudentData.city || 'Не указан' }}</p>
                    <p><strong class="text-pink-600">Страна:</strong> {{ viewStudentData.country || 'Не указана' }}</p>
                    <img :src="getImageUrl(viewStudentData.photo_file_name)" alt="Student"
                        class="w-32 h-32 object-cover rounded-full border-4 border-pink-200 mt-2 mx-auto" />
                </div>
                <button @click="showView = false" class="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-lg transition-colors mx-auto block">
                    Закрыть
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed, watch } from 'vue';
import { useStore } from 'vuex';
import axios from 'axios';
import Table from '../components/Table.vue';
import Form from '../components/Form.vue';

export default {
    components: { Table, Form },
    setup() {
        const store = useStore();
        const students = ref([]);
        const currentPage = ref(1);
        const limit = 10;
        const total = ref(0);
        const showForm = ref(false);
        const showView = ref(false);
        const viewStudentData = ref({});
        const form = ref({
            id: null,
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            date_of_birth: '',
            address: '',
            city: '',
            country: '',
            photo_file_name: null
        });
        const file = ref(null);
        const isAdmin = computed(() => store.getters.userRole === 'admin');
        const totalPages = computed(() => Math.ceil(total.value / limit));

        const displayedPages = computed(() => {
            const maxPagesToShow = 5;
            const pages = [];
            const half = Math.floor(maxPagesToShow / 2);
            let start = Math.max(1, currentPage.value - half);
            let end = Math.min(totalPages.value, start + maxPagesToShow - 1);
            if (end - start + 1 < maxPagesToShow) {
                start = Math.max(1, end - maxPagesToShow + 1);
            }
            for (let i = start; i <= end; i++) {
                pages.push(i);
            }
            return pages;
        });

        const fetchStudents = async () => {
            try {
                const response = await axios.get(`/api/students?page=${currentPage.value}&limit=${limit}`);
                students.value = response.data.students;
                total.value = response.data.total;
            } catch (error) {
                console.error('Failed to fetch students:', error);
            }
        };

        const saveStudent = async () => {
            const formData = new FormData();
            formData.append('first_name', form.value.first_name);
            formData.append('last_name', form.value.last_name);
            formData.append('email', form.value.email);
            formData.append('phone', form.value.phone);
            formData.append('date_of_birth', form.value.date_of_birth);
            formData.append('address', form.value.address);
            formData.append('city', form.value.city);
            formData.append('country', form.value.country);
            if (file.value) formData.append('photo', file.value);
            else if (form.value.photo_file_name) formData.append('photo', form.value.photo_file_name);

            try {
                if (form.value.id) {
                    await axios.put(`/api/students/${form.value.id}`, formData);
                } else {
                    await axios.post(`/api/students`, formData);
                }
                fetchStudents();
                resetForm();
            } catch (error) {
                console.error('Failed to save student:', error);
            }
        };

        const editStudent = (student) => {
            form.value = { ...student };
            file.value = null;
            showForm.value = true;
        };

        const deleteStudent = async (id) => {
            if (confirm('Удалить студента?')) {
                try {
                    await axios.delete(`/api/students/${id}`);
                    fetchStudents();
                } catch (error) {
                    console.error('Failed to delete student:', error);
                }
            }
        };

        const viewStudent = (student) => {
            viewStudentData.value = { ...student };
            showView.value = true;
        };

        const resetForm = () => {
            form.value = {
                id: null,
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                date_of_birth: '',
                address: '',
                city: '',
                country: '',
                photo_file_name: null
            };
            file.value = null;
            showForm.value = false;
        };

        const handleFileChange = (event) => {
            file.value = event.target.files[0];
        };

        const getImageUrl = (image) => {
            return image ? `${image}` : '/images/placeholder.jpg';
        };

        const formatDate = (dateString) => {
            if (!dateString) return '';
            const date = new Date(dateString);
            return date.toLocaleDateString();
        };

        watch(currentPage, fetchStudents, { immediate: true });

        return {
            students,
            currentPage,
            totalPages,
            displayedPages,
            showForm,
            showView,
            viewStudentData,
            form,
            isAdmin,
            saveStudent,
            editStudent,
            deleteStudent,
            viewStudent,
            handleFileChange,
            getImageUrl,
            formatDate
        };
    }
};
</script>

<style scoped>
.shadow-pink {
    box-shadow: 0 4px 6px -1px rgba(244, 114, 182, 0.3), 0 2px 4px -1px rgba(244, 114, 182, 0.2);
}

/* Дополнительные стили для кнопок */
.btn-view {
    background-color: #fce7f3;
    color: #db2777;
}
.btn-view:hover {
    background-color: #fbcfe8;
}

.btn-edit {
    background-color: #fce7f3;
    color: #db2777;
}
.btn-edit:hover {
    background-color: #fbcfe8;
}

.btn-delete {
    background-color: #fce7f3;
    color: #db2777;
}
.btn-delete:hover {
    background-color: #fbcfe8;
}
</style>

<template>
    <form @submit.prevent="submit" class="space-y-4">
        <slot></slot>
        
    </form>
</template>

<script>
export default {
    emits: ['submit'],
    setup(props, { emit }) {
        const submit = () => emit('submit');
        return { submit };
    }
};
</script>
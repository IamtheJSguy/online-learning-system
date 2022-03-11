<template>
    <div class="dashboard-layout">
        <sidebar class="sidebar" />
        <div class="app-layout">
            <router-view :key="$route.name" />
        </div>
    </div>
</template>

<script>
import Sidebar from './Sidebar'
export default {
    name: 'DashboardLayout',
    components: {
        Sidebar
    }
}
</script>

<style scoped>
.sidebar {
    position: fixed;
    top: 0;
    left: 0;
}
.app-layout {
    margin-left: 300px;
    min-height: 100vh;
}
</style>
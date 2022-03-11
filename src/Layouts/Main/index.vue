<template>
    <div class="dashboard-layout">
        <sidebar class="sidebar desktop-sidebar" />
        <div class="app-layout">
            <router-view :key="$route.name" />
        </div>
        <main-mobile-sidebar class="mobile-sidebar" />
    </div>
</template>

<script>
import Sidebar from './Sidebar'
import MainMobileSidebar from './MobileSidebar'
export default {
    name: 'DashboardLayout',
    components: {
        Sidebar,
        MainMobileSidebar
    }
}
</script>

<style scoped>
.sidebar {
    position: fixed;
    top: 0;
    left: 0;
}
.mobile-sidebar {
    position: fixed;
    bottom: 0;
}
.app-layout {
    overflow-y: scroll;
}
@media screen and (max-width: 546px) {
    .desktop-sidebar {
        display: none;
    }
    .app-layout {
        height: calc(100vh - 60px);
    }
}
@media not screen and (max-width: 546px) {
    .desktop-sidebar {
        display: block;
    }
    .mobile-sidebar {
        display: none;
    }
    .app-layout {
        margin-left: 60px;
        height: 100vh;
    }
}
</style>
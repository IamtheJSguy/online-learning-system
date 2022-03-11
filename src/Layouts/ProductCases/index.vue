<template>
    <div class="dashboard-layout">
        <sidebar class="sidebar desktop-sidebar" />
        <div class="app-layout">
            <router-view :key="$route.name" />
        </div>
        <mobile-sidebar class="mobile-sidebar" />
    </div>
</template>

<script>
import Sidebar from './Sidebar'
import MobileSidebar from './MobileSidebar'
export default {
    name: 'LevelTest',
    components: {
        Sidebar,
        MobileSidebar
    }
}
</script>

<style scoped>
.dashboard-layout {
    position: relative;
}
.sidebar {
    position: fixed;
    top: 0;
    left: 60;
}
.app-layout {
    min-height: 100vh;
}
@media screen and (max-width: 546px){
    .mobile-sidebar {
        position: fixed;
        top: 0;
        left: 0;
    }
    .desktop-sidebar {
        display: none;
    }
}
@media screen and (max-width: 912px) and (min-width: 546px) {
    .desktop-sidebar {
        display: none;
    }
    .mobile-sidebar {
        position: fixed;
        top: 0;
        left: 60;
    }
}
@media not screen and (max-width: 912px) {
    .desktop-sidebar {
        display: block;
    }
    .mobile-sidebar {
        display: none;
    }
    .app-layout {
        margin-left: 300px;
    }
}
</style>
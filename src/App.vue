<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #1C1A25;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<style lang="scss">
    ::-webkit-scrollbar {
        display: none;
        width: 0px !important;
        height: 0px;
    }

        /* Track */
    ::-webkit-scrollbar-track {
      display: none;
        background: #f1f1f1; 
        width: 0px !important;
    }
        
        /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #888; 
    }

        /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }
</style>

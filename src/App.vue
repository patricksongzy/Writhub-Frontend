<template>
    <div id="app">
        <WritNavbar/>
        <v-main>
            <router-view/>
        </v-main>
    </div>
</template>

<script>
import WritNavbar from '@/components/WritNavbar.vue'
export default {
    name: "App",
    components: {
        WritNavbar
    }
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}

.bottom {
    padding-bottom: 156px;
}

a {
    cursor: pointer;
}

button {
    cursor: pointer;
}

button:disabled {
    cursor: default;
}

span, div {
    white-space: normal !important;
}

</style>

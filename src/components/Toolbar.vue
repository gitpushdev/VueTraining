<template>
    <nav>
        <div class="nav-wrapper toolbarStyle">
            <a href="#!" class="brand-logo"><i class="material-icons">cloud</i>Logo</a>
            <ul class="right hide-on-med-and-down">
                <li><a href="sass.html"><i class="material-icons">search</i></a></li>
                <li><a href="badges.html"><i class="material-icons">view_module</i></a></li>
                <li><a href="#" @click="reloadTasks"><i class="material-icons">refresh</i></a></li>
                <li><a href="mobile.html"><i class="material-icons">more_vert</i></a></li>
            </ul>
        </div>
    </nav>
</template>
<script>
    import {mapActions, mapState} from 'vuex';

    export default {
        name: "Toolbar",

        methods: {
            ...mapActions([
                'fetchTasks'
            ]),
            reloadTasks() {
                this.fetchTasks();
            }
        }
    }
</script>
<style>
    #toolbar {
        display: flex;
        flex: 1;
        background-color: #009688;
        box-shadow: 1px
    }

    .toolbarStyle {
        background-color: #009688;
        padding-left: 8px;
        padding-right: 8px
    }
</style>


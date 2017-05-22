<template>
    <ul>
        <li v-for="item in items"><a :class="{ active : isActive }" href="{{item.url}}">{{item.text}}</a></li>
    </ul>
</template>

<script>
    let items = [
        { url: 'index.html', text: '首页' },
        { url: 'order/', text: '任务单' },
        { url: 'my/', text: '我的' }
    ]

    export default {
        props: ['index'],
        data() {
            return {
                items: items
            }
        },
        methods() {
            beforeCreate() {
                items[index].isActive = true;
            }
        }
    }
</script>

<style lang="sass" scoped>
    ul {
        font-size: 0;

        li {
            display: inline-block;
            width: 33.33%;
            height: .8rem;
            font-size: .3rem;
        }
    }
</style>


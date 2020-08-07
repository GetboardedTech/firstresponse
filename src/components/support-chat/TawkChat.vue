<template>
    <div class="container">
        <iframe
                src="https://tawk.to/chat/5e7d44dd35bcbb0c9aaad4a0/default"
                @load="onLoad"
                class="chat-iframe"
        ></iframe>
    </div>
</template>

<script>
    export default {
        name: "TawkChat",
        components: {
        },
        data: function () {
            return {}
        },
        methods: {
            onLoad() {
                console.log('start')
            }
        },
        created() {
        }
    }
</script>
<style>
    .chat-iframe{
        width: 100%;
        height: calc(100vh - 200px);
    }
</style>

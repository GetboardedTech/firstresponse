<template>
    <div id="support-chat">
        <h1 class="mb-5">{{$t('TalkTo')}}</h1>
        <SupportDoctors />
    </div>
</template>

<script>
    import SupportDoctors from "../components/support-chat/SupportDoctors";

    export default {
        name: "SupportChat",
        components: {
            SupportDoctors
        },
        middleware: [],
    }
</script>

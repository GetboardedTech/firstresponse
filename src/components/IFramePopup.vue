<template>

  <vs-popup fullscreen  :active.sync="flag">
    <div class="container-fluid">
      <iframe
        :src="src"
        @load="onLoad"
        class="chat-iframe"
      ></iframe>
    </div>
  </vs-popup>
</template>

<script>
  export default {
    name: "IFranePopup",
    props: {
      src: {
        type: String,
        required: true
      },
      flag: {
        type: Boolean,
        required: true
      }
    },
    data: function () {
      return {}
    },
    watch: {
      flag() {
        this.$emit('getFlag', this.flag)
      }
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
    height: calc(100vh - 150px);
  }
  .vs-popup--title h3 {

    display: none;

  }
</style>

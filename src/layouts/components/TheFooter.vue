<!-- =========================================================================================
    File Name: TheFooter.vue
    Description: Footer component
    Component Name: TheFooter
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template functional>
    <footer class="the-footer flex-wrap justify-between" :class="classes">
        <p>
          <span>Developed by GetBoarded Technologies (</span>
            <a href="https://getboarded.tech/company-analytics" target="_blank" rel="nofollow">A Talent Analytics Company</a>
          <span class="hidden sm:inline-block">), in partnership with Neolen (</span>
          <a href="https://www.neolen.com" target="_blank" rel="nofollow">AI Services)</a>

        </p>
<!--        <span class="md:flex hidden items-center">-->
<!--            <span>Hand-crafted & Made with</span>-->
<!--            <feather-icon icon="HeartIcon" svgClasses="stroke-current text-danger w-6 h-6" class="ml-2" />-->
<!--        </span> -->
    </footer>
</template>

<script>
export default {
    name: "the-footer",
    props: {
        classes: {
            type: String,
        }
    }
}
</script>

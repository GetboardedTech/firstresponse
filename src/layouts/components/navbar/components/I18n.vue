<template>
    <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer mr-3">
    <span class="cursor-pointer flex items-center i18n-locale">
      <img class="h-4 w-5" :src="i18n_locale_img" :alt="$i18n.locale" />
      <span class="hidden sm:block ml-2">{{ getCurrentLocaleData.lang }}</span>
    </span>
        <vs-dropdown-menu class="w-48 i18n-dropdown vx-navbar-dropdown">
            <vs-dropdown-item @click="updateLocale('en')"><img class="h-4 w-5 mr-1" src="@/assets/images/flags/en.png" alt="en" /> &nbsp;English</vs-dropdown-item>
            <vs-dropdown-item @click="updateLocale('in')"><img class="h-4 w-5 mr-1" src="@/assets/images/flags/in.png" alt="de" /> &nbsp;Hindi</vs-dropdown-item>
            <vs-dropdown-item @click="updateLocale('pt')"><img class="h-4 w-5 mr-1" src="@/assets/images/flags/pt.png" alt="pt" /> &nbsp;Portuguese</vs-dropdown-item>
        </vs-dropdown-menu>
    </vs-dropdown>
</template>

<script>
    export default {
        computed: {
            i18n_locale_img () {
                return require(`@/assets/images/flags/${this.$i18n.locale}.png`)
            },
            getCurrentLocaleData () {
                const locale = this.$i18n.locale
                if (locale === 'en')      return { flag: 'us', lang: 'English'    }
                else if (locale === 'pt') return { flag: 'br', lang: 'Portuguese' }
                else if (locale === 'in') return { flag: 'in', lang: 'Hindi'     }
            }
        },
        methods: {
            updateLocale (locale) {
                this.$i18n.locale = locale
            }
        }
    }
</script>

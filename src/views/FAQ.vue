]<!-- =========================================================================================
    File Name: Faq.vue
    Description: FAQ Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="faq-page">
        <!-- JUMBOTRON -->
        <div class="faq-jumbotron">
            <div class="faq-jumbotron-content lg:p-32 md:p-24 sm:p-16 p-8 rounded-lg mb-base">
                <h1 class="mb-1 text-white">Have Any Questions?</h1>
<!--                <p class="text-white">Bonbon sesame snaps lemon drops marshmallow ice cream carrot cake croissant wafer.</p>-->
                <vs-input placeholder="Search" v-model="faqSearchQuery" icon-pack="feather" icon="icon-search" size="large" class="w-full mt-6" icon-no-border />
            </div>
        </div>
        <div class="vx-row">
            <div class="vx-col w-full md:w-2/5 lg:w-1/4 rounded-lg">
                <vx-card>
                    <h4>Table of Content</h4>
                    <ul class="faq-topics mt-4">
                        <li v-for="category in categories" :key="category.id" class="p-2 font-medium flex items-center" @click="faqFilter = category.id">
                            <div class="h-3 w-3 rounded-full mr-2" :class="'bg-' + category.color"></div><span class="cursor-pointer">{{ category.name }}</span>
                        </li>
                    </ul>

                    <br><br>

                    <h4>Supporters</h4>
                    <ul class="faq-supporters mt-4">
                        <li v-for="supporter in supporters" :key="supporter.id" class="mt-4">
                            <div class="flex items-center">
                                <vs-avatar class="mr-3" :src="supporter.img" size="35px" />
                                <div class="leading-tight">
                                    <p class="font-semibold">{{ supporter.name }}</p>
                                    <small>{{ supporter.profession }}</small>
                                </div>
                            </div>
                        </li>
                    </ul>
                </vx-card>
            </div>

            <!-- FAQ COL -->
            <div class="vx-col w-full md:w-3/5 lg:w-3/4 mt-12 md:mt-0">
                <vs-collapse accordion type="margin" class="p-0">
                    <vs-collapse-item v-for="(que,index) in filteredFaq" class="faq-bg rounded-lg" :class="{'mt-0': !index}" :key="que.id">
                        <div slot="header"><h5>{{ que.question }}</h5></div>
                        <p>{{ que.ans }}</p>
                    </vs-collapse-item>
                </vs-collapse>

            </div>
        </div>
    </div>
</template>

<script>

    export default{
        name: 'FAQ',
        data () {
            return {
                faqSearchQuery: '',
                faqFilter: 1,
                categories: [
                    {
                        id: 1,
                        name: 'All',
                        color: 'grey'
                    },
                    {
                        id: 2,
                        name: 'General',
                        color: 'primary'
                    },
                    {
                        id: 3,
                        name: 'Coronavirus',
                        color: 'success'
                    }
                ],
                faqs: [
                    {
                        id: 1,
                        categoryId: 2,
                        question: 'What is a coronavirus?',
                        ans: 'Coronaviruses are a large family of viruses which may cause illness in animals or humans.  In humans, several coronaviruses are known to cause respiratory infections ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS). The most recently discovered coronavirus causes coronavirus disease COVID-19.'
                    },
                    {
                        id: 2,
                        categoryId: 2,
                        question: 'What is COVID-19?',
                        ans: 'COVID-19 is the infectious disease caused by the most recently discovered coronavirus. This new virus and disease were unknown before the outbreak began in Wuhan, China, in December 2019. '
                    },
                    {
                        id: 3,
                        categoryId: 2,
                        question: 'What are the symptoms of COVID-19?',
                        ans: 'The most common symptoms of COVID-19 are fever, tiredness, and dry cough. Some patients may have aches and pains, nasal congestion, runny nose, sore throat or diarrhea. These symptoms are usually mild and begin gradually. Some people become infected but don’t develop any symptoms and don\'t feel unwell. Most people (about 80%) recover from the disease without needing special treatment. Around 1 out of every 6 people who gets COVID-19 becomes seriously ill and develops difficulty breathing. Older people, and those with underlying medical problems like high blood pressure, heart problems or diabetes, are more likely to develop serious illness. People with fever, cough and difficulty breathing should seek medical attention.'
                    },
                    {
                        id: 4,
                        categoryId: 2,
                        question: 'Are we officials?',
                        ans: 'No.'
                    },
                ],
                supporters: [
                    {
                        id: 1,
                        img: require('@/assets/images/portrait/small/avatar-s-1.jpg'),
                        name: 'Boyce Shene',
                        profession: 'Web Developer'
                    },
                    {
                        id: 2,
                        img: require('@/assets/images/portrait/small/avatar-s-2.jpg'),
                        name: 'Margie Sevy',
                        profession: 'Web Designer'
                    }
                ]
            }
        },
        computed: {
            filteredFaq () {
                return this.faqs.filter((faq) => {
                    if (this.faqFilter === 1) return faq.question.toLowerCase().includes(this.faqSearchQuery.toLowerCase()) || faq.ans.toLowerCase().includes(this.faqSearchQuery.toLowerCase())
                    else if (this.faqFilter === 2) return faq.categoryId === 2 && (faq.question.toLowerCase().includes(this.faqSearchQuery.toLowerCase()) || faq.ans.toLowerCase().includes(this.faqSearchQuery.toLowerCase()))
                    else if (this.faqFilter === 3) return faq.categoryId === 3 && (faq.question.toLowerCase().includes(this.faqSearchQuery.toLowerCase()) || faq.ans.toLowerCase().includes(this.faqSearchQuery.toLowerCase()))
                    else if (this.faqFilter === 4) return faq.categoryId === 4 && (faq.question.toLowerCase().includes(this.faqSearchQuery.toLowerCase()) || faq.ans.toLowerCase().includes(this.faqSearchQuery.toLowerCase()))
                    else if (this.faqFilter === 5) return faq.categoryId === 5 && (faq.question.toLowerCase().includes(this.faqSearchQuery.toLowerCase()) || faq.ans.toLowerCase().includes(this.faqSearchQuery.toLowerCase()))
                })
            }
        },
        methods: {
        },
        components: {
        }
    }
</script>

<style lang="scss">
    #faq-page {
        .faq-jumbotron-content {
            background-image: url('../assets/images/pages/faq.jpg');
            background-size: cover;
        }

        .faq-bg {
            background-color: #fff;
        }
    }
</style>

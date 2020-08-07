]<!-- =========================================================================================
    File Name: Faq.vue
    Description: FAQ Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div id="fabout-page">
    <!-- JUMBOTRON -->
    <div class="faq-jumbotron">
      <div class="faq-jumbotron-content lg:p-32 md:p-24 sm:p-16 p-8 rounded-lg mb-base">
      <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>
      </div>
    </div>
    <div class="vx-row">
      <div class="vx-col w-full mb-12   rounded-lg">

        <h4 >We have created a working <b>'Test-Yourself'</b> tool created using the WHO research data to map the users symptoms to Corona symptoms and calculate an overlap to provide a probability of having being infected by COVID19.</h4>
        <h4 class="mt-6">We are creating data analytics capabilities for COVID19 response and recovery. With Data, we can build more such tools for various industries to help them with insights that will allow them to recover faster from Corona Impact. We would like to get support in terms of trusted Data Sources. Being a Talent Analytics company , we are experts into data science and have about 100 volunteers working on this project remotely.
        </h4>
        <h4 class="mt-6"> The Coronavirus outbreak has become one of the biggest threats to the global economy. In this context, we feel it is crucial to launch a call to all the entrepreneurs, creatives and problem solvers to act against this crisis. All the participants should work together to create and submit one or more proposals as a project describing the problem that you want to solve, your solutions, the technical details and the effort required to launch the project to the public audience.
        </h4>
        <h4  class="mt-6"><b>During our preliminary research we have identified a few main categories of problems that we think to be tackled first as the outputs of the mentioned challenge:</b></h4>
      </div>
    </div>
    <div class="vx-row">
      <!-- FAQ COL -->
      <div class="vx-col w-full mt-12 md:mt-0">
        <vs-collapse accordion type="margin" class="p-0">
          <vs-collapse-item v-for="(que,index) in challenge" class="faq-bg rounded-lg" :class="{'mt-0': !index}" :key="que.id">
            <div slot="header"><h5>{{ que.problem }}</h5></div>
            <p>{{ que.solution }}</p>
            <div class="mt-6" v-if="que.categoryId===2">
            <p  class="mt-4 ml-12">1.Making facts easily accessible</p>
            <p class="mt-4 ml-12">2.Propose better tracking</p>
            <p class="mt-4 ml-12">3.Developing telehealth services</p>
            <p class="mt-4 ml-12">4.Scaling community based screening</p>
            <p class="mt-4 ml-12">5.Developing applications to deal massive number of patients</p>
            <p class="mt-4 ml-12">6.Covid-19 Patient screening with Chatbots and Machine learning flows</p>
            <p class="mt-4 ml-12">7.Improvement in Hospital Warehousing and logistics optimized models</p>
              <p class="mt-4">As entrepreneurs and consumers, we should propose better tracking, screening flows that can help our doctors and nurses to track possible infected patients in a fair and efficient way.</p>
          </div> <div class="mt-6" v-else-if="que.categoryId===3">
            <p  class="mt-4 ml-12">1.       Showcase the impact of quarantine, lockdown and economic shutdowns on society.</p>
            <p class="mt-4 ml-12">2.        Study the impact of the outbreak on SNS24’s Public Data.</p>
            <p class="mt-4 ml-12">3.        Corona virus topic modelling and Sentiment analysis.</p>
            <p class="mt-4 ml-12">4.        Analyze the Economic, Environmental and Domestic impact of isolation measures.</p>
                 </div>
            <div v-else></div>
          </vs-collapse-item>
        </vs-collapse>

      </div>
    </div>
    <div class="vx-row">
      <div class="vx-col w-full mt-12   rounded-lg">

             <h4 class="mt-6">The Fight COVID-19 Open Challenge is an open collaborative effort in which volunteers, designers, students, researchers, computer scientists, healthcare professionals, start-ups, software developers, business developers and others, will cooperate and produce creative solutions that can help fight the current COVID-19 epidemic.</h4>    </div>
    </div>
  </div>
</template>

<script>

  export default{
    name: 'About',
    data () {
      return {

        challenge: [
          {
            id: 1,
            categoryId: 1,
            problem: 'DATA ANALYTICS AND DATA MINING :',
            solution: 'Population growth and globalization have turned viruses into mass killers. Quick and accurate data analytics that can pinpoint outbreaks and predict progression is the key to fight any infectious disease. All kinds of deliverables (graphs, infographics, mobile applications) that help the people to be informed about the current sanitary situation, make it easier for the scientists to identify the virus characteristics and spreading factors. A second promising avenue is data mining of social media and search engine activity, which can quickly show where an outbreak is taking place. However, information based on social sharing and search engine queries can be misleading and should not be relied on exclusively. Instead, health institutions are combining data from these sources with traditional medical data sets, and utilising medical expertise while analyzing trends. Data analytics, epidemic spread modeling, data simulation related to the global COVID-19 outbreak. The goal is to turn data into information and information into a useful insight. We encourage you to use the governmental sources of data apply statistical and machine learning techniques to identify trends and make valuable assumptions.'},
          {
            id: 2,
            categoryId: 2,
            problem: 'SUPPORT TO FRONTLINE RESPONDERS',
            solution: 'With the number of cases COVID-19 climbing , front-line healthcare and hospital workers are bracing for the worst as the pandemic rages on. The COVID-19 pandemic increases the need for social innovations to help those most vulnerable. A few ways entrepreneurs and social innovators can help in dealing the pandemic are:'},

          {
            id: 3,
            categoryId: 3,
            problem: 'INSIGHTS FOR VARIOUS INDUSTRIES ON IMPACT',
            solution: 'This category is mainly concerned with the following duties:'
          },
          {
            id: 4,
            categoryId: 4,
            problem: 'PRIORITIZE MENTAL HEALTH :',
            solution: 'News of a widespread public health concern like COVID-19 can cause feelings of uncertainty and anxiety. The long periods of isolation due too enforcement of  social distancing measures is bound to affect every individual . we have already witnessed an increase in the number of suicides. So as young adults, we have to take the responsibility by building applications, publishing articles etc. which will help the common mass to survive lockdown in a better way\n' +
              '\n'
          },
          {
            id: 5,
            categoryId: 5,
            problem: 'RECOVERY :',
            solution: 'Corona virus and increased the pace of digitalization, how are universities working with it. In today\'s crisis, it is a necessary disruption not by choice but imposed by chance. The impact on the economy will be multi-faceted, with an recession on the cards it will also through the employment numbers off balance. We anticipate these problems arising from the current economic lockdown and are working to save the upcoming flow of talent to market. Saving careers for the graduates who come out to market at such a time of uncertainties, economic downturn and expected block on hiring with a move towards remote working.\n' +
              '\n' +
              'New risks have emerged that need mitigation in a post-corona world. The economy had to slam on its brakes, it would slowly regain upwards momentum with time but its impact will be felt in short term. '
          },
        ],

      }
    },
    computed: {

    },
    methods: {
    },
    components: {
    }
  }
</script>

<style lang="scss" scoped>
  #fabout-page {
    .faq-jumbotron-content {
      background-image: url('../assets/images/icon/image001.jpg');
      background-size: cover;
    }

    .faq-bg {
      background-color: #fff;
    }
  }
 p, h4{
    text-align:justify;
  }
</style>

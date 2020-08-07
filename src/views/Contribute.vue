]<!-- =========================================================================================
    File Name: Faq.vue
    Description: FAQ Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div id="contribute-page">
    <IFramePopup :src="src" :flag="flag" @getFlag="(f) => {flag = f}" />
    <h1 align="center"> <b>We are a space for sharing ideas as a</b></h1>
    <h1 align="center"> <b>collaborative response to the challenges</b></h1>
    <h1 align="center"><b> that Covid 19 brought  us.</b></h1>
    <div class="vx-row mt-12">
      <div class="vx-col w-full md:w-2/5 lg:w-1/4 rounded-lg  mt-12">
        <a @click="showPopup('https://gtbrdd.typeform.com/to/A3GKld')">

        <vx-card>
          <h4 align="center" class="faq-topics mt-10" ><b>I want to submit my</b></h4>
           <h4 align="center"><b>Idea</b></h4>
          <ul class="faq-topics mt-10">
                </ul>

          <br><br>
          <img src="@/assets/images/icon/icon1.jpg" class="images" >


        </vx-card>
        </a>
      </div> <div class="vx-col w-full md:w-2/5 lg:w-1/4 rounded-lg  mt-12">
      <a @click="showPopup('https://gtbrdd.typeform.com/to/sSK3dh')">
        <vx-card>
          <h4 align="center" class="faq-topics mt-10" ><b>I want to Volunteer as a</b></h4>
           <h4 align="center"><b>online medical practitioner</b></h4>
          <ul class="faq-topics mt-10">
                </ul>

          <br><br>

          <img src="@/assets/images/icon/icon2.jpg" alt="Logo" class="images" >

        </vx-card>
        </a>
      </div>
    <div class="vx-col w-full md:w-2/5 lg:w-1/4 rounded-lg  mt-12">
      <a @click="showPopup('https://gtbrdd.typeform.com/to/P83Hax')">
        <vx-card>
          <h4 align="center" class="faq-topics mt-10" ><b>I want to help with</b></h4>
           <h4 align="center"><b>Research</b></h4>
          <ul class="faq-topics mt-10">
                </ul>

          <br><br>

          <img src="@/assets/images/icon/icon3.jpg" alt="Logo" class="images" >

        </vx-card></a>
      </div> <div class="vx-col w-full md:w-2/5 lg:w-1/4 rounded-lg  mt-12">
        <vx-card>
          <h4 align="center" class="faq-topics mt-10" ><b>I want to support the project</b></h4>
           <h4 align="center"><b>by fund contributions</b></h4>
          <ul class="faq-topics mt-4">
                </ul>

          <br><br>

          <img src="@/assets/images/icon/icon4.jpg" alt="Logo" align=' center'  class="images" >

        </vx-card>
      </div>

    </div>
    <h1 align="center" style="font-size:40px;" class=" mt-12"> <b>Volunteers</b></h1>
    <div class="vx-row mt-12">
      <div class="vx-col w-full md:w-2/5 lg:w-1/4 rounded-lg  mt-12">
        <vx-card>
          <img src="@/assets/images/volunteer/image12.jpg" class="images1" >
          <h4 align="center " class="mt-4"><b>Sumeet Shahu</b></h4>
          <p  class="mt-3" style="text:justyfy;"> Processed Covid-19 Data Sets from various sources, Created animated time series graphs</p></vx-card>
      </div><div class="vx-col w-full md:w-2/5 lg:w-1/4 rounded-lg  mt-12">
        <vx-card>
          <img src="@/assets/images/volunteer/image13.jpg" class="images1" >
          <h4 align="center " class="mt-4"><b>Supreet Chivukula</b></h4>
          <p  class="mt-4 mb-4" style="text:justyfy;">Processed Covid-19 Data Sets, Created bubble static chart, Covid-19.</p></vx-card>
      </div><div class="vx-col w-full md:w-2/5 lg:w-1/4 rounded-lg  mt-12">
        <vx-card>
          <img src="@/assets/images/volunteer/image14.jpg" class="images1" >
          <h4 align="center " class="mt-4"><b>Amol Sinha </b></h4>
          <p  class="mt-4 mb-4" style="text:justyfy;">Created infographic visuals for the outbreak of COVID-19. </p>
        </vx-card>
      </div><div class="vx-col w-full md:w-2/5 lg:w-1/4 rounded-lg  mt-12 ">
        <vx-card>
          <img src="@/assets/images/volunteer/image15.png" class="images1 " >
          <h4 align="center " class="mt-4"><b> Sharad Rai</b></h4>
          <p  class="mt-4 " style="text:justyfy;" > Time series Chart for News collected and No of cases.</p><br>

        </vx-card>
      </div>

    </div>
    <div class="vx-row mt-12">
      <div class="vx-col w-full md:w-2/5 lg:w-1/4 rounded-lg  mt-12">
        <vx-card>
          <img src="@/assets/images/volunteer/kaiwalya_shkla.jpg" class="images1" >
          <h4 align="center " class="mt-4"><b>Kaiwalya Shukla</b></h4>
          <p  class="mt-3" style="text:justyfy;">Visualizing collected data in an effective manner to present insights. Coordinate the efforts of the team members.</p>
        </vx-card>
      </div><div class="vx-col w-full md:w-2/5 lg:w-1/4 rounded-lg  mt-12">
      <vx-card>
        <img src="@/assets/images/volunteer/nikita_pandey.jpg" class="images1" >
        <h4 align="center " class="mt-4"><b>Nikita Pardeshi</b></h4>
        <p  class="mt-4 mb-4" style="text:justyfy;">Creation of reports to document the findings of the task and assisting in data collection.</p>
      </vx-card>
    </div><div class="vx-col w-full md:w-2/5 lg:w-1/4 rounded-lg  mt-12">
      <vx-card>
        <img src="@/assets/images/volunteer/prachi_jain.jpg" class="images1" >
        <h4 align="center " class="mt-4"><b> Prachi Jain </b></h4>
        <p  class="mt-4 mb-4" style="text:justyfy;"> Collection of datasets from various sources and assisting in report creation.</p>

      </vx-card>
    </div><div class="vx-col w-full md:w-2/5 lg:w-1/4 rounded-lg  mt-12 ">
      <vx-card>
        <img src="@/assets/images/volunteer/rupa.jpg" class="images1 " >
        <h4 align="center " class="mt-4"><b> Rupa</b></h4>
        <p  class="mt-4 mb-4" style="text:justyfy;" > Collection of datasets from various sources for all tasks.</p><br>

      </vx-card>
    </div>

    </div>
    <div class="vx-row mt-12">
      <div class="vx-col w-full md:w-2/5 lg:w-1/4 rounded-lg  mt-12">
        <vx-card>
          <img src="@/assets/images/volunteer/image1.jpg" class="images1" >
          <h4 align="center " class="mt-4"><b>Ashmita Singh</b></h4>
          <p  class="mt-3" style="text:justyfy;">Visualizing collected data in an effective manner to present insights. Coordinate the efforts of the team members.</p>
        </vx-card>
      </div><div class="vx-col w-full md:w-2/5 lg:w-1/4 rounded-lg  mt-12">
        <vx-card>
          <img src="@/assets/images/volunteer/image2.jpg" class="images1" >
          <h4 align="center " class="mt-4"><b>Yash Umale</b></h4>
          <p  class="mt-4 mb-4" style="text:justyfy;">Created a GitHub organisation and merged changes from everyone carefully.
            </p></vx-card>
      </div><div class="vx-col w-full md:w-2/5 lg:w-1/4 rounded-lg  mt-12">
        <vx-card>
          <img src="@/assets/images/volunteer/imag3.jpg" class="images1" >
          <h4 align="center " class="mt-4"><b> Dhruva Karir</b></h4>
          <p  class="mt-4 mb-4" style="text:justyfy;">Contributed towards team recruitment and formation.</p><br></vx-card>
      </div><div class="vx-col w-full md:w-2/5 lg:w-1/4 rounded-lg  mt-12 ">
        <vx-card>
          <img src="@/assets/images/volunteer/image4.jpg" class="images1 " >
          <h4 align="center " class="mt-4"><b> Aditya Chandra</b></h4>
          <p  class="mt-4 mb-4" style="text:justyfy;" > Managed data handling and plotting on Excel.</p><br>

        </vx-card>
      </div>

    </div>
    <div class="vx-row mt-12">
      <div class="vx-col w-full md:w-2/5 lg:w-1/4 rounded-lg  mt-12">
        <vx-card>
          <img src="@/assets/images/volunteer/Jerin.jpeg" class="images1" >
          <h4 align="center " class="mt-4"><b>Jerin</b></h4>
          <p  class="mt-4" style="text:justyfy;">Data Visualizer</p>
        </vx-card>
      </div><div class="vx-col w-full md:w-2/5 lg:w-1/4 rounded-lg  mt-12">
        <vx-card>
          <img src="@/assets/images/volunteer/Mahima.jpg" class="images1" >
          <h4 align="center " class="mt-4"><b>Mahima</b></h4>
          <p  class="mt-4" style="text:justyfy;">Data Visualizer
            </p></vx-card>
      </div><div class="vx-col w-full md:w-2/5 lg:w-1/4 rounded-lg  mt-12">
        <vx-card>
          <img src="@/assets/images/volunteer/Pranav_Kotak.jpg" class="images1" >
          <h4 align="center " class="mt-4"><b> Pranav Kotak</b></h4>
          <p  class="mt-4 " style="text:justyfy;">Data Visualizer</p></vx-card>
      </div><div class="vx-col w-full md:w-2/5 lg:w-1/4 rounded-lg  mt-12 ">
        <vx-card>
          <img src="@/assets/images/volunteer/Rahul.jpg" class="images1 " >
          <h4 align="center " class="mt-4"><b> Rahul Gupta</b></h4>
          <p  class="mt-4" style="text:justyfy;" > Data Processor</p>

        </vx-card>
      </div>

    </div>
    <div class="vx-row mt-12">
      <div class="vx-col w-full md:w-2/5 lg:w-1/4 rounded-lg  mt-12">
        <vx-card>
          <img src="@/assets/images/volunteer/image5.jpg" class="images1" >
          <h4 align="center " class="mt-4"><b>Divya Shah	</b></h4>
          <p  class="mt-4" style="text:justyfy;">Used Natural Language Processing to perform sentiment analysis on the Covid-19 tweets dataset and classify them into appropriate categories. </p>
        </vx-card>
      </div>
    <div class="vx-col w-full md:w-2/5 lg:w-1/4 rounded-lg  mt-12">
        <vx-card>
          <img src="@/assets/images/volunteer/image6.jpg" class="images1" >
          <h4 align="center " class="mt-4"><b>Neharika</b></h4>
          <p  class="mt-4" style="text:justyfy;">Succesfully scraped data from web from authentic sites like WHO and official covid19 website to get real time stats of covid 19 patients.
            </p></vx-card>
      </div>
    <div class="vx-col w-full md:w-2/5 lg:w-1/4 rounded-lg  mt-12">
        <vx-card>
          <img src="@/assets/images/volunteer/image7.jpg" class="images1" >
          <h4 align="center " class="mt-4"><b> Sankalp Arora</b></h4>
          <p  class="mt-4 " style="text:justyfy;">Successfully Worked on Complex plots and graphs like Heat Maps, Boxen Plots, Violin Plots, and Research work. </p><br></vx-card>

      </div><div class="vx-col w-full md:w-2/5 lg:w-1/4 rounded-lg  mt-12 ">
        <vx-card>
          <img src="@/assets/images/volunteer/image8.jpg" class="images1 " >
          <h4 align="center " class="mt-4"><b> Anmol Saluja </b></h4>
          <p  class="mt-4" style="text:justyfy;" > Developed the Country-wise Case and Patient Activity Tracker by employing various analytical approaches like Web Scraping. </p>

        </vx-card>
      </div>

    </div>
    <div class="vx-row mt-12">
      <div class="vx-col w-full md:w-2/5 lg:w-1/4 rounded-lg  mt-12">
        <vx-card>
          <img src="@/assets/images/volunteer/image11.jpg" class="images1" >
          <h4 align="center " class="mt-4"><b>PRASAD DS</b></h4>
          <p  class="mt-3" style="text:justyfy;">Used Jupyter Notebook for data cleaning and transformation of collected
            responses to meaningful self-explanatory graphs .</p></vx-card>
      </div>
      <div class="vx-col w-full md:w-2/5 lg:w-1/4 rounded-lg  mt-12">
      <vx-card>
        <img src="@/assets/images/volunteer/image10.jpg" class="images1" >
        <h4 align="center " class="mt-4"><b>Ipshita Joshi	 </b></h4>
        <p  class="mt-4 mb-4" style="text:justyfy;">Worked on Data Extraction and discovered various sources for real time covid-19 dataset.
        </p></vx-card>
    </div><div class="vx-col w-full md:w-2/5 lg:w-1/4 rounded-lg  mt-12">
      <vx-card>
        <img src="@/assets/images/volunteer/image16.jpg" class="images1" >
        <h4 align="center " class="mt-4"><b> Kunal Gupta</b></h4>
        <p  class="mt-4 mb-4" style="text:justyfy;">Contributed towards team recruitment and formation.</p><br></vx-card>
    </div><div class="vx-col w-full md:w-2/5 lg:w-1/4 rounded-lg  mt-12 ">
      <vx-card>
        <img src="@/assets/images/volunteer/image_17.jpg" class="images1 " >
        <h4 align="center " class="mt-4"><b>  Radha Krishna Singh</b></h4>
        <p  class="mt-4 mb-4" style="text:justyfy;" >  Created bubble static chart in Tableau for Covid-19.</p><br>

      </vx-card>
    </div>

    </div>

    <div class="vx-row mt-12"></div>
     <h3><b>For Non-profits/Start-ups/Organizations Working on the Pandemic</b></h3>
    <p class="mt-4">If you are working on COVID-related activities or have changed your operations to adapt and support the crisis response, post your solution to <span style="color:blue;">hr@boarded.in</span></p>
  </div>




      <!-- JUMBOTRON -->

</template>

<script>
  import IFramePopup from "../components/IFramePopup";

  export default{
    name: 'Contribute',
    components: {
      IFramePopup
    },
    data() {
      return {
        src: "",
        flag: false
      }
    },
    methods: {
      showPopup(src){
        this.src = src
        this.flag = true
      }
    }
  }
</script>

<style scoped>
.images{
  margin-left: auto;
  margin-right: auto;
  width:50%;

}.images1{
   margin-left: auto;
   margin-right: auto;
   height:120px;
   width:50%;
   border-radius: 60%;
   border:solid black 2.5px;
}
</style>

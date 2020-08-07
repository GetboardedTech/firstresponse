<template>
    <div>
      <IFramePopup :src="src" :flag="flag"  @getFlag="(f) => {flag = f}" />
      <vs-popup fullscreen :title="$t('ChatNow')" :active.sync="chatNow">
            <TawkChat />
        </vs-popup>
        <vs-row vs-justify="center">
            <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
                <vs-card>
                    <div slot="header">
                        <h3>
                            {{$t('Consultants')}}
                        </h3>
                    </div>
                    <div class="mb-6">
                        <vs-row>
                            <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="8">
                                <h6>
                                  {{$t('Registration')}}
                                 </h6>
                            </vs-col>
                            <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="4">
                                <vs-button @click="chatNow = true" color="primary">{{$t('ChatNow')}}</vs-button>
                            </vs-col>
                        </vs-row>
                    </div>
                    <vs-row>
                        <vs-tabs>
                            <vs-tab :label="$t('Doctors')">
                                <div>
                                    <vs-row class="mt-5">
                                        <vs-col type="flex" vs-w="3">
                                            <div class="con-img ml-3">
                                                <img key="onlineImg" src="@/assets/images/portrait/small/avatar-s-1.jpg" alt="user-img" width="40" height="40" class="rounded-full shadow-md cursor-pointer block" />
                                            </div>
                                        </vs-col>
                                        <vs-col type="flex" vs-w="6">
                                            <h6>Respiratory and Bronchocopy, M.D (New York, USA)</h6>
                                            <h4>Dr. Peter Clark</h4>
                                        </vs-col>
                                        <vs-col type="flex" vs-w="3">
                                            <vs-button type="flat" color="primary">{{$t('ViewMore')}}</vs-button>
                                        </vs-col>
                                    </vs-row>
                                    <vs-row class="mt-5">
                                        <vs-col type="flex" vs-w="3">
                                            <div class="con-img ml-3">
                                                <img key="onlineImg" src="@/assets/images/portrait/small/avatar-s-2.jpg" alt="user-img" width="40" height="40" class="rounded-full shadow-md cursor-pointer block" />
                                            </div>
                                        </vs-col>
                                        <vs-col type="flex" vs-w="6">
                                            <h6>Respiratory and Bronchocopy, M.D (New York, USA)</h6>
                                            <h4>Dr.Nicole Bell</h4>
                                        </vs-col>
                                        <vs-col type="flex" vs-w="3">
                                            <vs-button type="flat" color="primary">{{$t('ViewMore')}}</vs-button>
                                        </vs-col>
                                    </vs-row>
                                </div>
                            </vs-tab>
                            <vs-tab :label="$t('Physicians')">
                                <div>
                                </div>
                            </vs-tab>
                            <vs-tab :label="$t('HelpCenterInfo')">
                                <div>
                                </div>
                            </vs-tab>
                            <vs-tab :label="$t('TestCenters')">
                                <div>
                                </div>
                            </vs-tab>
                        </vs-tabs>
                    </vs-row>
                    <vs-row vs-justify="flex-end">
                        <vs-button type="filled" color="success" @click="showPopup('https://gtbrdd.typeform.com/to/sSK3dh')"  >Apply as Medical  Volunteer</vs-button>
<!--                        <vs-button type="flat" color="success">{{$t('TestCenters')}}</vs-button>-->
<!--                        <vs-button type="flat" href="https://gtbrdd.typeform.com/to/sSK3dh" color="success">{{$t('infocountry')}}</vs-button>-->
<!--                        <vs-button type="flat" color="danger">{{$t('SuggestImprovement')}}</vs-button>-->
                    </vs-row>
                </vs-card>
            </vs-col>
        </vs-row>
    </div>
</template>

<script>
    import TawkChat from "./TawkChat";
    import IFramePopup from "@/components/IFramePopup";


    export default {
        name: "SupportDoctors",
        components: {
            TawkChat,IFramePopup
        },
        data() {
          return {
              chatNow: false,
              doctors: [
                  {
                      name: 'Sumit Rathore',
                      profession: 'Engineer',
                      profile: '',
                      getboardedLink: '',
                      linkedinLink: ''
                  },
                  {
                      name: 'Shivam Dhawan',
                      profession: 'Engineer',
                      profile: '',
                      getboardedLink: '',
                      linkedinLink: ''
                  },
                  {
                      name: 'Sumit Rathore',
                      profession: 'Engineer',
                      profile: '',
                      getboardedLink: '',
                      linkedinLink: ''
                  },
                  {
                      name: 'Shivam Dhawan',
                      profession: 'Engineer',
                      profile: '',
                      getboardedLink: '',
                      linkedinLink: ''
                  },
                  {
                      name: 'Sumit Rathore',
                      profession: 'Engineer',
                      profile: '',
                      getboardedLink: '',
                      linkedinLink: ''
                  },
                  {
                      name: 'Shivam Dhawan',
                      profession: 'Engineer',
                      profile: '',
                      getboardedLink: '',
                      linkedinLink: ''
                  },
              ],
            src: "",
            flag: false
          }
        },
      methods: {
        showPopup(src){
          this.src = src
          this.flag = true
        }
      },
        middleware: [],
    }
</script>

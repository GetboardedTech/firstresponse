<template>
    <form-wizard ref="form" color="rgba(var(--vs-primary), 1)" errorColor="rgba(var(--vs-danger), 1)" :title="null" :subtitle="null" finishButtonText="Reset" @on-complete="formReset">
        <tab-content :title="$t('Step1')" class="mb-5" icon="feather icon-home" :before-change="validateStep1">

            <!-- tab 1 content -->
            <form data-vv-scope="step-1">
                <h5>
                  {{ $t("TestDetails") }}
                 </h5>

                <!-- tab 1 content -->
                <div class="vx-row">
                    <div class="vx-col md:w-1/1 w-full mt-5">
                        <vs-select v-model="form.country" class="w-full select-large" :label="$t('Location')" name="country" v-validate="'required'" >
                            <vs-select-item :key="index" :value="item.value" :text="$t(item.text)" v-for="(item,index) in countryOptions" class="w-full" />
                        </vs-select>
                        <span class="text-danger" v-if="getError('country')" >{{ getError('country').msg }}</span>
                    </div>
                    <div class="vx-col md:w-1/1 w-full mt-5">
                        <h6>
                          <b>{{ $t("Note") }}</b> {{ $t("TestNote") }}</h6>
                       <h6 class="mt-5">
                         <b>{{ $t("Disclaimer") }}</b> {{ $t("TestDisclaimer") }}</h6>

                        <ul class="centerx mt-5">
                            <li>
                                <vs-radio v-model="form.agree" :vs-value="true">{{ $t("Agree") }}</vs-radio>
                            </li>
                            <li>
                                <vs-radio v-model="form.agree" :vs-value="false">{{ $t("Disagree") }}</vs-radio>
                            </li>
                        </ul>
                    </div>
                </div>
            </form>
        </tab-content>

        <!-- tab 2 content -->
        <tab-content :title="$t('Step2')" class="mb-5" icon="feather icon-briefcase" :before-change="validateStep2">
            <form data-vv-scope="step-2">
                <div class="vx-row">
                    <div class="vx-col md:w-1/1 w-full mt-5">
                        <vs-select v-model="form.age" class="w-full select-large" :label="$t('Age')" name="age" v-validate="'required'" >
                            <vs-select-item :key="index" :value="item.value" :text="$t(item.text)" v-for="(item,index) in ageOptions" class="w-full" />
                        </vs-select>
                        <span class="text-danger" v-if="getError('age')" >{{ getError('age').msg }}</span>
                    </div>
                    <div class="vx-col md:w-1/1 w-full mt-5">
                        <vs-select v-model="form.gender" class="w-full select-large" :label="$t('Gender')" name="gender" v-validate="'required'" >
                            <vs-select-item :key="index" :value="item.value" :text="$t(item.text)" v-for="(item,index) in genderOptions" class="w-full" />
                        </vs-select>
                        <span class="text-danger" v-if="getError('gender')" >{{ getError('gender').msg }}</span>
                    </div>
                </div>
            </form>
        </tab-content>

        <!-- tab 3 content -->
        <tab-content :title="$t('Step3')" class="mb-5" icon="feather icon-image" :before-change="validateStep3">
            <div class="vx-row">
                <div class="vx-col md:w-1/2 w-full" v-for="(item,index) in form.symptoms" :key="index">
                    <div class="m-3">
                        <vs-checkbox v-model="item.select"  :vs-value="true" >{{$t(item.text)}}</vs-checkbox>
                        <vs-slider v-show="item.select" color="rgb(45, 208, 129)" v-model="item.level"/>
                    </div>
                </div>
            </div>
        </tab-content>

        <!-- tab 3 content -->
        <tab-content  :title="$t('Step4')" class="mb-5" icon="feather icon-info">
            <h3 class="m-6">{{$t('Complete')}}</h3>
        </tab-content>
    </form-wizard>
</template>

<script>
    import { FormWizard, TabContent } from 'vue-form-wizard'
    import { mapActions } from 'vuex'
    import 'vue-form-wizard/dist/vue-form-wizard.min.css'

    // For custom error message
    import { Validator } from 'vee-validate';
    const dict = {
        custom: {
            country: {
                required: 'Country is required',
            },
            age: {
                required: 'Age is required',
            },
            gender: {
                required: 'Gender is required',
            },
            job_title: {
                required: 'Job title name is required',
                alpha: "Job title may only contain alphabetic characters"
            },
            proposal_title: {
                required: 'Proposal title name is required',
                alpha: "Proposal title may only contain alphabetic characters"
            },
            event_name: {
                required: 'Event name is required',
                alpha: "Event name may only contain alphabetic characters"
            },
        }
    };

    // register custom messages
    Validator.localize('en', dict);

    export default {

      data() {
            return {
                defaultForm: {
                    country: null,
                    agree: true,
                    age: null,
                    gender: null,
                    symptoms: [
                        {text: 'Fever', value:'fever', select: false, level: 98, default: 98},
                        {text: 'Fatigue', value:'fatigue', select: false, level: 70, default: 70},
                        {text: 'DryCough', value:'dry-cough', select: false, level: 60, default: 60},
                        {text: 'Shortnessofbreath', value:'shortness-of-breath', select: false, level: 60, default: 60},
                        {text: 'Confusion', value:'confusion', select: false, level: 40, default: 40},
                        {text:'Headache', value:'headache', select: false, level: 20, default: 20},
                        {text:'SoreThroat', value:'sore-throat', select: false, level: 15, default: 15},
                        {text:'RunnyNose', value:'runny-nose', select: false, level: 10, default: 10},
                        {text: 'AbnormalPain', value:'chest-pain', select: false, level: 2, default: 2},
                        {text: 'Diarrhea', value:'Diarrhea', select: false, level: 2, default: 2},
                        {text:'NauseaandVomiting', value:'nausea-vomiting', select: false, level: 1, default: 1},
                        {text: 'StomachAche', value:'stomach-ache', select: false, level: 1, default: 1},
                    ],
                },
                form: {},
                ageOptions: [
                    {text: 'Ageoption', value:2},
                    {text: "2 - 10 ", value:6},
                    {text: "10 - 20", value:15},
                    {text: "20 - 30", value:25},
                    {text: "30 - 40", value:35},
                    {text: "40 - 50", value:45},
                    {text: "50 - 60", value:55},
                    {text: "60 - 70", value:65},
                    {text: "70 - 80", value:75},
                    {text: "80 - 90", value:85},
                    {text: "90 - 100", value:95},
                    {text: "100 - 110", value:105},
                ],
                genderOptions: [
                    {text:'Male', value:'male'},
                    {text: 'Female', value:'female'},
                    {text: 'Other', value:'other'},
                ],
                countryOptions: [
                    {text:  'India', value:'india'},
                    {text:'Portugal', value:'portugal'},
                    {text: 'Other', value:'other'},
                ]
            }
        },
        computed: {
            getError(){
              return (field) => {
                  const temp = this.errors ? this.errors.items.filter(x => x.field === field): {};
                  return temp ? temp[0] : {}
              }
            },
        },
        methods: {
            ...mapActions('testYourSelf', ['saveForm']),
            validateStep1() {
                return new Promise((resolve, reject) => {
                    this.$validator.validateAll('step-1').then(result => {
                        if (result) {
                            resolve(true)
                        } else {
                            reject("correct all values");
                        }
                    })
                })
            },
            validateStep2() {
                return new Promise((resolve, reject) => {
                    this.$validator.validateAll("step-2").then(result => {
                        if (result) {
                            resolve(true)
                        } else {
                            reject("correct all values");
                        }
                    })
                })
            },
            validateStep3() {
                return new Promise((resolve, reject) => {
                    this.$validator.validateAll("step-3").then(result => {
                        if (result) {
                            this.saveForm(this.form)
                            this.$vs.notify({title:'Success',text:'Your Details Saved',color:'success'})
                            resolve(true)
                        } else {
                            reject("correct all values");
                        }
                    })
                })
            },
            formReset() {
                this.form = JSON.parse(JSON.stringify(this.defaultForm))
                this.saveForm(this.form)
                this.$refs.form.reset()
            }
        },
        components: {
            FormWizard,
            TabContent
        },
        created() {
            this.form = JSON.parse(JSON.stringify(this.defaultForm))
        },

    }
</script>

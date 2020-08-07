<template>
	<div id="test-yourself">
		<h1 class="mb-5">{{ $t("TestTitle") }}</h1>
		<div class="vx-row">
			<div class="vx-col w-full lg:w-1/2 mb-base">
                <TestYourSelfResult />
			</div>
			<div class="vx-col w-full lg:w-1/2 mb-base">
                <TestYourSelfForm />
			</div>
		</div>
	</div>
</template>

<script>
	import TestYourSelfForm from "../components/form/TestYourSelfForm";
	import TestYourSelfResult from "../components/test-yourself/TestYourSelfResult";

	export default {
		name: 'TestYourSelf',
		components: {
            TestYourSelfForm,
            TestYourSelfResult
		},
		data() {
			return {
			}
		},
	}
</script>

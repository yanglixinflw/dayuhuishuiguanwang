<template>
    <div>
        <!-- <CommonHead/> -->
        <CompanyProfile/>
    </div>
</template>

<script>
import CompanyProfile from '@/components/CompanyProfile/CompanyProfile.vue';
import CommonHead from '@/components/Common/CommonHead.vue'
export default {
    name: "companyProfile",
    components: {
        CompanyProfile,
        CommonHead,
    },
};
</script>


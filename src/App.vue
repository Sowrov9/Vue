<script setup>
import Footer from './layout/Footer.vue';
import Sidebar from './layout/Sidebar.vue';
import Topbar from './layout/Topbar.vue';


</script>

<template>
  <div class="wrapper">

            
<!-- ========== Topbar Start ========== -->
    <Topbar/>
<!-- ========== Topbar End ========== -->


<!-- ========== Left Sidebar Start ========== -->
    <Sidebar />
<!-- ========== Left Sidebar End ========== -->

<!-- ============================================================== -->
<!-- Start Page Content here -->
<!-- ============================================================== -->

<div class="content-page">
    <div class="content">

        <!-- Start Content-->
        <div class="container-fluid">
          <!-- <RouterView/> -->

          <router-view></router-view>
           
        </div>
        <!-- container -->

    </div>
    <!-- content -->

    <!-- Footer Start -->
    <Footer /> 
    <!-- end Footer -->

</div>

<!-- ============================================================== -->
<!-- End Page content -->
<!-- ============================================================== -->

</div>
</template>

<style scoped>

</style>

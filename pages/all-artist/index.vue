<template>
  <div>
    <!-- top section -->
    <div
      style="background-color: #042a2b"
      class="container-lg container-fluid-sm my-2 pt-3 pb-5"
    >
      <h1 class="lead py-3 px-5 text-light" id="caption">Artists</h1>
      <div class="row my-2 px-5 d-flex justify-content-center">
        <div class="col-md-4 col-sm-3 col-12">
          <img
            class="img-fluid shadow img-header"
            src="https://bluethumb.com.au/blog/wp-content/uploads/2020/06/Screen-Shot-2020-06-15-at-16.30.54.png"
          />
        </div>
        <div class="col-md-8 col-9 col-sm-9 my-auto text-center text-sm-start">
          <p class="text-light">
            an Artist is a person who creates art (such as painting, sculpture, music, or writing) using conscious skill and creative imagination the great artists of the Renaissance an artist specializing in watercolors.in this page you can see the list of artists
          </p>
        </div>
      </div>
    </div>

    <card-service
      v-for="(service, index) of services"
      :key="`card-service${index}`"
      :description="service.description"
      :type="service.type"
      :imgPath="service.imgPath"
    />

    <!-- <div class="container-lg d-flex justify-content-center">
      <nav aria-label="ServiceList">
        <ul class="pagination">
          <li :class="checkIfClassActive(n)" v-for="n in pages" v-bind:key="n">
            <a class="page-link" @click="goToPage(n)" v-scroll-to="'#listServices'">{{ n }} </a>
          </li>
        </ul>
      </nav>
    </div> -->
  </div>
</template>

<style scoped>
.img-header {
  border-radius: 5px;
  object-fit: cover;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>

<script>
//import listOfServices from "~/components/listOfServices.vue";
import CardService from "~/components/CardService.vue";
//import axios from "axios";

export default {
  name: "AllService",

  components: {
    CardService,
  },
  created() {
    console.log(window.location.pathname);
  },
  async asyncData({ $axios }) {
    // const { data } = await $axios.get('http://localhost:3000/api/cats')
    const { data } = await $axios.get("/api/all-artist");
    return {
      services: data,
    };
  },
};
</script>

<template>
  <div>
    <!-- top section -->
    <div
      style="background-color: #990000"
      class="container-lg container-fluid-sm my-2 pt-3 pb-5"
    >
      <h1 class="lead py-3 px-5 text-light" id="caption">Places</h1>
      <div class="row my-2 px-5 d-flex justify-content-center">
        <div class="col-md-4 col-sm-3 col-12">
          <img
            class="img-fluid shadow img-header"
            src="https://www.efa-aef.eu/media/page-photo/10481-festival_cities_initiative_conversations_cjohannes_plenio_res.jpg"
          />
        </div>
        <div class="col-md-8 col-9 col-sm-9 my-auto text-center text-sm-start">
          <p class="text-light">
       here you can see all of the places where hold summer festival.
          </p>
        </div>
      </div>
    </div>

    <div
      class="container-lg flex-wrap d-flex justify-content-center"
      id="cardIt"
    >
      <card-itineraries
        v-for="(itineraries, index) of itineraries"
        :key="`card-itineraries${index}`"
        :imgPath="itineraries.imgPath"
        :description="itineraries.description"
        :heading="itineraries.heading"
        :duration="itineraries.duration"
        :id="itineraries.id"
      />
    </div>

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
import CardItineraries from "~/components/CardItineraries.vue";
//import axios from "axios";

export default {
  name: "ItinerariesPage",

  components: {
    CardItineraries,
  },

  async asyncData({ $axios }) {
    // const { data } = await $axios.get('http://localhost:3000/api/cats')
    const { data } = await $axios.get("/api/itineraries");
    return {
      itineraries: data,
    };
  },
};
</script>

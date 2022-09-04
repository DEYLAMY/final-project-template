<template>
  <div class="container-lg container-fluid-sm my-2 pt-3 pb-4">
    <h1 class="lead py-3 px-5 text">We love Summer Festival. And you will too!</h1>
    <div class="row mb-5 d-flex justify-content-around">
      <div class="col-sm-5 text-sm-start">
        <p class="text">
       with warm weather around the corner and restrictions slowly being lifted, summer 2022 is looking fun and, after almost 2 years, back to normal. If you’re traveling through Italy and are looking to spruce up your holiday with some good music, look no further: we got you covered with a great selection of Italy’s best summer festivals!.
        </p>
        <p class="text">
        people who design this project is ALI DEYLMAY (10704480)-Hou Xiaodi (10777895)
        </p>
      </div>
      <div class="col-sm-5">
        <img
          class="img-fluid shadow"
          src="https://i.guim.co.uk/img/media/dc60c2216c6230eeb2eaf2ffecc6c7452b771820/0_54_4096_2457/master/4096.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=68532136fa2c6a2a3579e9694bc73d2b"
        />
      </div>
    </div>
    <div class="row mb-5 d-flex justify-content-around">
      <div class="col-sm-5">
        <img
          class="img-fluid shadow"
          src="https://media.vanityfair.com/photos/5e6921443b2c6a0008bf5b20/5:3/w_3000,h_1800,c_limit/FestivalCancellations-2020-GettyImages-174725380.jpg"
        />
      </div>
      <div class="col-sm-5 d-flex flex-column">
        <h1 class="lead text">Something you'd like to ask?</h1>
        <NuxtLink to="/contact-us"
          ><button type="button" class="btn btn-primary my-3">
            Contact Us
          </button></NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",

  methods: {
    reloadPage() {
      window.location.reload();
    },
  },
};
</script>

<style scoped>
.contact {
  border: 1px solid white;
  text-align: center;
  height: 60px;
  padding: 14px 0;
}
a:link {
  color: white;
  text-decoration: none;
}

/* mouse over link */
a:hover {
  color: white;
  text-decoration: underline;
}

a:visited {
  color: white;
}

/* selected link */
a:active {
  color: white;
}

a:active {
  color: white;
}
</style>

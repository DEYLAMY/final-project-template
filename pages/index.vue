<template>
  <div class="container-lg container-fluid-sm my-2 pt-3 pb-4">
    <h1 class="py-3 px-5 text">Welcome to summer festivals</h1>
    <div class="row mb-3 d-flex justify-content-around">
      <div class="col-sm-5">
        <img
          class="img-fluid shadow"
          src="https://image.jimcdn.com/app/cms/image/transf/dimension=1280x10000:format=jpg/path/sa6549607c78f5c11/image/i82f8384a1348ab84/version/1554202007/tomorrowland-best-summer-music-festivals-europe.jpg"
        />
      </div>
      <div class="col-sm-5 text-sm-start">
        <p class="text">
     with warm weather around the corner and restrictions slowly being lifted, summer 2022 is looking fun and, after almost 2 years, back to normal. If you’re traveling through Italy and are looking to spruce up your holiday with some good music, look no further: we got you covered with a great selection of Italy’s best summer festivals!
        </p>
      </div>
    </div>

    <div class="row mb-5">
       <h2 class="py-3 px-5 text">Ready for adventure?</h2>
    <div class="row row-card">
      <div class="col-sm col-poi shadow btn-home">
        <NuxtLink to="/all-festival"
          ><button type="button" class="btn btn-custom">
            Discover Events
          </button></NuxtLink
        >
      </div>
      <div class="col-sm col-event shadow btn-home">
        <NuxtLink to="/all-events"
          ><button type="button" class="btn btn-custom">
            Discover Places
          </button></NuxtLink
        >
      </div>
      <div class="col-sm col-service shadow btn-home">
        <NuxtLink to="/all-artist"
          ><button type="button" class="btn btn-custom">
            Discover Artists
          </button></NuxtLink
        >
      </div>
 
    </div>
    </div>

    <div class="row mb-5 d-flex justify-content-around">
      <div class="col-sm-5 d-flex flex-column">
        <p class="text">
         with warm weather around the corner and restrictions slowly being lifted, summer 2022 is looking fun and, after almost 2 years, back to normal. If you’re traveling through Italy and are looking to spruce up your holiday with some good music, look no further: we got you covered with a great selection of Italy’s best summer festivals!
        </p>
      </div>
      <div class="col-sm-5">
        <img
          class="img-fluid shadow"
          src="https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i993a12f8bf71159f/version/1656083261/earth-garden-festival-malta-best-summer-music-festivals.jpg"
        />
      </div>
    </div>
    
  </div>
</template>

<style scoped>
.col-sm {
  margin: 5px;
}

.row-card {
  height: 400px;
}

.btn-home {
  display: flex;
  align-items: end;
  justify-content: center;
  margin: 5px;
}

.btn-custom {
  color: white;
  background-color: #0000005c;
  border-color: white;
  font-size: larger;
  border-width: 2px;
  font-weight: 600;
}

.btn-custom:hover {
  background-color: #0e7679;
}

.btn {
  margin: 20px;
}

.col-poi {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(https://www.visitczechrepublic.com/cms/getmedia/29DE635D-19E5-4533-ABBA-37153A919BF6/n-music-festivals-in-summer.jpeg?width=1920&height=1135&ext=.jpeg);
}

.col-event {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(https://491617.smushcdn.com/772872/wp-content/uploads/2019/04/Duomo-Piazza-Milan-e1554811333667-1915x660.jpg?lossy=1&strip=1&webp=1);
}

.col-service {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(https://www.actualidadiphone.com/wp-content/uploads/2016/08/Apple-Music-Festival.png);
}

.img-fluid {
  height: 100%;
  object-fit: cover;
}
</style>

<script>
export default {
  name: "IndexPage",
};
</script>

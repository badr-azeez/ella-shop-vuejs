<template>
  <div class="banner">
    <div class="parent">
      <img src="@/assets/images/banner-bg.jpg" />
      <div class="cont">
        <h3><span>Huge Saving</span> on UHD Televisions</h3>
        <p class="hint">Sale up to 70% off on selected items*</p>
        <v-btn
          variant="outlined"
          class="px-10 mt-4 text-white"
          style="border-radius: 30px; text-transform: none"
          >Shop Now</v-btn
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner .parent {
  position: relative;
  height: 500px;
}
.banner .parent img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.banner .parent .cont {
  color: white;
  position: absolute;
  top: 60px;
  left: 60px;
  width: 600px;
}

.banner .parent h3 {
  font-size: 50px;
  margin: 30px 0px 10px 0px;
}
.banner .parent .cont .hint {
  font-size: 20px;
}
.banner .parent span {
  color: cyan;
}
@media (max-width: 990px) {
  .banner .parent {
    height: 400px;
  }
  .banner .parent .cont {
    width: 400px;
  }
  .banner .parent .cont h3 {
    font-size: 40px;
    margin: 30px 0px 5px 0px;
  }
  .banner .parent .cont .hint {
    font-size: 18px;
  }
}

@media (max-width: 767px) {
  .banner .parent {
    height: 300px;
  }
  .banner .parent .cont {
    top: 20px;
  }
  .banner .parent .cont h3 {
    font-size: 30px;
    margin: 30px 0px 2px 0px;
  }
  .banner .parent .cont .hint {
    font-size: 16px;
  }
}
@media (max-width: 767px) {
  .banner .parent {
    height: 230px;
  }
  .banner .parent .cont {
    top: 5px;
    width: 300px;
  }
  .banner .parent .cont h3 {
    font-size: 24px;
  }
  .banner .parent .cont .hint {
    font-size: 14px;
  }
}
</style>

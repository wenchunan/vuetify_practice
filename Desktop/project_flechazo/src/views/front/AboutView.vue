<template>
<div class="bg-secondary pb-6 ">
   <section class="section-about container pt-8 pb-lg-6 pb-md-5 pb-sm-10">
        <div class="u-center-text u-margin-bottom-big">
          <h2 class="heading-secondary mb-6">
           關於 flechazo
          </h2>
        </div>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-2">
          <div class="col">
            <h4>發光並非太陽的專利</h4>
            <h3>你也可以</h3>
            <span><em>最浪漫的不是陪你到老<br>
            而是助你悄悄變美  精緻到老</em></span>
            <p class="pt-5">我們的目標是打造一個女性化、永恆、優雅、現代與復古的飾品品牌，在平凡的生活中點綴一些不平凡，讓女孩們在每個舉手投足間，都是那最美的風景。</p>
            <p class="mb-5">
              flechazo 一直以來都希望提供給每位顧客一個美好的購物體驗，因此每件商品在出貨前都會經過仔細的檢查，如果不幸的在您收到商品時，發現商品在運送的途中造成了損壞，或是商品有瑕疵、收到了不對的商品，flechazo 要先向您說聲抱歉，但也請您不用擔心，聯繫客服後，我們將儘速為您處理。
            </p>
            <a href="#/products" class="pb-2 border-bottom">前往商店 &rarr;</a>
          </div>
          <div class="col pb-14">
            <div class="about">
              <img
              width="350"
                alt="Photo 1"
                class="about__photo about__photo--p1"
                src="@/assets/pic/aboutPagePic1.png"
              />
              <img
              width="350"
                alt="Photo 2"
                class="about__photo about__photo--p2"
                src="@/assets/pic/aboutPagePic2.png"
              />
              <img
              width="350"
                alt="Photo 3"
                class="about__photo about__photo--p3"
                src="@/assets/pic/aboutPagePic3.png"
              />
            </div>
          </div>
        </div>
      </section>
</div>
<FrontFooter></FrontFooter>
</template>
<script>
import FrontFooter from '@/components/FrontFooter.vue'
export default {
  components: {
    FrontFooter
  }
}
</script>
<style lang="scss">
.about {
  position: relative;
  &__photo {
    width: 55%;
    border-radius: 2px;
    position: absolute;
    z-index: 10;
    transition: all 0.2s;
    outline-offset: 2rem;

    &--p1 {
      left: 0;
      top: -2rem;
    }

    &--p2 {
      right: 0;
      top: 2rem;
    }

    &--p3 {
      left: 20%;
      top: 10rem;
    }

    &:hover {
      transform: scale(1.05) translateY(-0.5rem);
      z-index: 20;
    }
  }
  &:hover &__photo:not(:hover) {
    transform: scale(0.95);
  }
}
@media(min-width: 0px) {
  .about__photo--p3 {
    left: 0;
    top: 6rem
  }
}
@media(min-width: 767px) {
  .about__photo--p3 {
    left: 15%;
    top: 5rem
  }
}
@media(min-width: 992px) {
  .about__photo--p3 {
    left: 11%;
    top: 10rem
  }
}
</style>

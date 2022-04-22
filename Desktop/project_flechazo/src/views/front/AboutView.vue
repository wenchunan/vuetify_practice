<template>
<div class="bg-secondary pb-6 ">
    <section class="section-about container pt-8 pb-lg-6 pb-md-5 pb-sm-10">
      <div class="u-center-text u-margin-bottom-big">
          <h1 class="heading-secondary mb-6 fw-bold">
            關於 flechazo
          </h1>
      </div>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-2">
          <div class="col wow fadeInLeft" data-wow-duration="1.5s">
              <h4>發光並非太陽的專利</h4>
              <h3>你也可以</h3>
              <span><em>最浪漫的不是陪你到老<br>
                  而是助你悄悄變美  精緻到老</em></span>
              <p class="pt-5">我們的目標是打造一個女性化、永恆、優雅、現代與復古的飾品品牌，在平凡的生活中點綴一些不平凡，讓女孩們在每個舉手投足間，都是那最美的風景。</p>
              <p class="mb-5">
                  flechazo 一直以來都希望提供給每位顧客一個美好的購物體驗，因此每件商品在出貨前都會經過仔細的檢查，如果不幸的在您收到商品時，發現商品在運送的途中造成了損壞，或是商品有瑕疵、收到了不對的商品，flechazo 要先向您說聲抱歉，但也請您不用擔心，聯繫客服後，我們將儘速為您處理。
              </p>
              <router-link to="/products" class="pb-2 border-bottom">前往商店 &rarr;</router-link>
          </div>
          <div class="col pb-14 pt-6 pt-md-0 wow fadeInRight" data-wow-duration="1.5s">
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
</template>

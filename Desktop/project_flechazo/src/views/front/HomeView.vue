<template>
  <header class="header_background">
    <div class="header d-flex align-items-center mb-5">
      <div class="header_pic">
        <img src="@/assets/pic/homePagePic.png"  class="img-fluid" alt="homePagePic">
      </div>
      <div class="header_describe">
        <h4>我在想</h4>
        <h3>你戴上會是什麼樣子</h3>
        <ul class="pt-4">
          <li class="h5 pb-2">不懼分秒追逐時光流逝</li>
          <li class="h5 pb-2">從細節彰顯非凡氣度</li>
          <li class="h5 pb-2">精心裝點璀璨生活</li>
          <li class="h5 pb-2">每一天都能非比尋常</li>
        </ul>

      </div>
    </div>
    <div class="title_primary">
      <h2 class="title_english">About us</h2>
      <h2 class="title">關於品牌</h2>
    </div>
    <div class="about d-flex">
        <div class="about_left container">
          <h4>發光並非太陽的專利</h4>
          <h3>你也可以</h3>
          <ul class="pt-4 pb-4">
            <li class="h5 pb-2">最浪漫的不是陪你到老</li>
            <li class="h5 pb-2">而是助你悄悄變美  精緻到老</li>
          </ul>
          <p>我們的目標是打造一個女性化、永恆、優雅、現代與復古的飾品品牌，在平凡的生活中點綴一些不平凡，讓女孩們在每個舉手投足間，都是那最美的風景。</p>
        </div>
        <div class="about_right">
          <div class="aboutPicBg">
            <img src="@/assets/pic/AboutPic.png" width="60%" class="aboutPic" alt="關於品牌圖片" >
          </div>
        </div>
    </div>
  </header>
  <section class="section_coupon">
    <div class="bg_video">
      <video class="bg_video_content" autoplay muted loop>
        <source src="@/assets/vedio/coupon_video.mp4" type="video/mp4">
      </video>
    </div>
    <div class="discount_title">
      <h2 class="title_english">Celebrate</h2>
      <h2 class="title pb-5">歡慶周年</h2>
      <h5 class="pb-5">即日起至 2022-05-31， 全館消費不限金額，即享 <span class="h3">85%</span> 折扣</h5>
      <div class="dicount_code">
        <i class="bi bi-front"></i>
        <input type="text" class="dicount_code_input text-white text-center py-3" width="30%" readonly>
      </div>
    </div>
  </section>
</template>

<style>
.header_background {
  min-width: 100%;
  background-image: url('@/assets/pic/homePage-background.png');
  background-size: cover;
}
.header {
  padding-bottom: 80px;
}
.header_describe {
  width: 55%;
  height: 20%;
  background-color: rgba(183,164,139,0.4);
  padding: 64px 36px 76px 142px;
  position: relative;
  left: -5%;
  top: 8%
}

.about_left {
  min-width: 40%;
  padding: 140px
}
.about_right {
  min-width: 60%;
  padding: 80px 0px 80px 80px;
}
.aboutPicBg {
  position: relative;
  height: 350px;
  background-color: #B7A48B;
}
.aboutPic {
  position: absolute;
  left: 10%;
  top: 20%
}
.title_english{
  color: rgba(255, 255, 255, 0.15);
  font-style: italic;
  padding-left: 200px;
  margin-bottom: -10px;
}
.title_primary{
  position: relative;
}
.title_primary .title {
  padding-left: 140px;
}
.title_primary .title:before {
  content: '';
  display: block;
  position: absolute;
  top: 80px;
  left: 0;
  min-width: 320px;
  height: 1px;
  background-color: #fff;
}
.section_coupon {
  position: relative;
  /* height: 470px; */
}
.bg_video {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  min-width: 100%;
  z-index: -1;
  /* opacity: .15; */
  overflow: hidden;
}
.bg_video_content {
  height: 100%;
  min-width: 100%;
  object-fit: cover;
}
.discount_title {
  text-align: center;
  background-color: rgba(0, 0, 0, 0.65);
  padding: 150px;
}

.dicount_code_input {
  cursor: pointer;
  border: 0;
  outline: none;
  background-color: #E0C8AB;
  border-radius: 10px;
  box-shadow: 5px 5px 6px #3c3c3c;
}

.bi {
  position: relative;
  top: -35px;
  left: 200px;
  color: #E0C8AB;
  font-size: 20px;
}
</style>

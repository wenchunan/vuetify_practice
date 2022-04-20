<template>
     <footer class="p-6 bg-info">
      <div class="container">
        <ul class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5 d-flex justify-content-center">
           <li class="col border-bottom  border-bottom-md-0 pb-md-0">
            <h5 class="text-xl mb-2">免運費</h5>
            <p>消費滿1000元免運費</p>
          </li>
           <li class="col border-bottom  border-bottom-md-0 pb-md-0">
            <h5 class="text-xl mb-2">多元支付</h5>
            <p>支援 VISA, ApplePay, LinePay</p>
          </li>
          <li class="col border-bottom  border-bottom-md-0 pb-md-0">
            <h5 class="text-xl mb-2">客服服務</h5>
            <p>聯繫我們有專人為您服務</p>
          </li>
        </ul>
        <ul class="row row-cols-1 row-cols-sm-2 row-cols-md-4 mb-7">
          <li class="col- pb-md-0 mb-1">
            <a href="#/about" class="h5 me-4">關於品牌</a>
          </li>
          <li class="col pb-md-0  mb-1">
            <a href="#/protect" class="h5 me-4">飾品保養</a>
          </li>
          <li class="col pb-md-0  mb-1">
            <a href="#/products" class="h5 me-4">商品專區</a>
          </li>
          <li class="col d-lg-flex d-md-flex  mb-1">
            <h5 class="text-lg me-3 d-none d-lg-block d-md-none">聯絡我們:</h5>
            <a href="#" class="me-2" target="_blank">
                <span>
                  <img src="@/assets/pic/fb.icon.svg" alt="fb" width="24">
                </span>
            </a>
            <a href="#" class="me-2" target="_blank">
              <span>
                <img src="@/assets/pic/ig.icon.svg" alt="fb" width="24">
              </span>
            </a>
            <a href="#" class="me-2" target="_blank">
              <span>
                <img src="@/assets/pic/line.icon.svg" alt="fb" width="24">
              </span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
    <div class="d-flex justify-content-center text-xs text-light small bg-info p-1">
      <p>Copyright @flechazo All Rights Reserved. Designed by AnnaWen
      </p>
      <router-link to="/login">
          <i class="bi bi-gear-fill ms-2"></i>
      </router-link>
    </div>
</template>

<template>
<div class="my-lg-6 my-md-6 my-6 px-lg-10 d-flex justify-content-center px-4 px-md-7">
    <div class="col-md-2 col-lg-1 text-center mx-md-5 mx-3">
        <div class="d-flex flex-column justify-content-center">
                <span class="text-light text-center fw-bold p-md-4 p-lg-4 p-3 mb-2 rounded" :class="cartData ? 'bg-success' : 'border border-secondary'" >1</span>
                <span class="fw-bold text-light">建立訂單</span>
        </div>
    </div>
    <div class="col-md-2 col-lg-1 text-center mx-md-5 mx-3">
        <div class="d-flex flex-column justify-content-center">
                <span class="text-light text-center fw-bold p-md-4 p-lg-4 p-3 mb-2 rounded" :class="orderId ? 'bg-success' : 'border border-secondary'" >2</span>
                <span class="fw-bold text-light">訂單確認</span>
        </div>
    </div>
    <div class="col-md-2 col-lg-1 text-center mx-md-5 mx-3">
        <div class="d-flex flex-column justify-content-center">
                <span class="text-light text-center fw-bold p-md-4 p-lg-4 p-3 mb-2 rounded" :class="orderIsPaid ? 'bg-success' : 'border border-secondary'">3</span>
                <span class="fw-bold text-light">完成購物</span>
        </div>
    </div>
</div>
</template>
<script>
export default {
  props: ['cartData', 'orderId', 'orderIsPaid']
}
</script>

<template>
<div
    class="modal fade"
    id="productModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-dark" id="productModalLabel">
              <span v-if="isNew">新增產品</span>
              <span v-else>編輯產品</span></h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <!-- 左邊圖片區塊 -->
              <div class="col-sm-4">
                <!-- 主要圖片區塊 -->
                <div class="mb-2">
                  <div class="mb-3 text-dark">
                     <h3 class="mb-3">主要圖片</h3>
                  <label for="imageUrl" class="form-label">輸入圖片網址</label>
                  <input id="imageUrl" type="text" v-model="tempProduct.imageUrl" class="form-control" placeholder="請輸入圖片連結">
                  </div>
                  <img :src="tempProduct.imageUrl" class="img-fluid">
                </div>
                <!-- 多圖新增 -->
                <h3 class="mb-3 text-dark">多圖新增</h3>
                <!--如果暫存產品物件內有imagesUrl多圖陣列就  -->
                <div v-if="Array.isArray(tempProduct.imagesUrl)">
                    <!-- 顯示陣列中所有圖片 -->
                  <div class="mb-1" v-for="(image,key) in tempProduct.imagesUrl" :key="key">
                    <div class="mb-3 text-dark">
                      <label for="imagesUrl" class="form-label">圖片網址</label>
                      <input id="imagesUrl" type="text" class="form-control" placeholder="請輸入圖片連結" v-model="tempProduct.imagesUrl[key]">
                    </div>
                    <img :src="image" class="img-fluid">
                  </div>

                  <!-- !tempProduct.imagesUrl.length 如果不是空的 -->
                  <!-- tempProduct.imagesUrl[tempProduct.imagesUrl.length-1] 如果陣列有內容 -->
                 <div v-if="!tempProduct.imagesUrl.length || tempProduct.imagesUrl[tempProduct.imagesUrl.length-1]">
                  <button type="button" class="btn btn-outline-primary btn-sm d-block w-100" @click="tempProduct.imagesUrl.push('')">新增圖片</button>
                </div>
                <div v-else>
                  <button
                    class="btn btn-outline-danger btn-sm d-block w-100"
                    @click="tempProduct.imagesUrl.pop()"
                  >
                    刪除圖片
                  </button>
                </div>
                </div>
               <!-- 如果沒有imagesUrl多圖陣列 顯示新增圖片按鈕 -->
                <div v-else>
                    <button type="button" class="btn btn-outline-primary btn-sm d-block w-100" @click="createImages">新增圖片</button>
              </div>
              </div>
              <!-- 右邊資料區塊 -->
              <div class="col-sm-8 text-dark">
                <div class="mb-3">
                  <label for="title" class="form-label">標題</label>
                  <input type="text" id="title" class="form-control" placeholder="請輸入標題" v-model="tempProduct.title">
                </div>
                <div class="row">
                  <div class="bm-3 col-md-6">
                    <label for="category" class="form-label">分類</label>
                    <input type="text" id="category" placeholder="請輸入分類" class="form-control" v-model="tempProduct.category">
                  </div>
                  <div class="bm-3 col-md-6">
                    <label for="price" class="form-label">單位</label>
                    <input type="text" id="price" placeholder="請輸入單位" class="form-control" v-model="tempProduct.unit">
                  </div>
                </div>
                <div class="row">
                  <div class="bm-3 col-md-6">
                    <label for="origin_price" class="form-label">原價</label>
                    <input type="number" id="origin_price" placeholder="請輸入原價" class="form-control" min="0" v-model.number="tempProduct.origin_price">
                  </div>
                  <div class="bm-3 col-md-6">
                    <label for="price" class="form-label">售價</label>
                    <input type="number" id="price" placeholder="請輸入售價" class="form-control" min="0" v-model.number="tempProduct.price">
                  </div>
                </div>
                <hr>
                <div class="mb-3">
                  <label for="description" class="form-label">產品描述</label>
                  <textarea type="text" id="description" class="form-control" placeholder="請輸入產品描述" v-model="tempProduct.description">
                  </textarea>
                </div>
                <div class="mb-3">
                  <label for="content" class="form-label">說明內容</label>
                  <textarea type="text" id="content" class="form-control" placeholder="請輸入說明內容" v-model="tempProduct.content" >
                  </textarea>
                </div>
                <div class="mb-3">
                  <div class="form-check">
                    <input
                      id="is_enabled"
                      class="form-check-input"
                      type="checkbox" v-model="tempProduct.is_enabled"
                    />
                    <label class="form-check-label" for="is_enabled"
                      >是否啟用</label
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="$emit('update-product',tempProduct)">確認</button>
          </div>
        </div>
    </div>
</div>
</template>
<script>
import modalMixin from '@/libs/modalMixin'

export default {
  data () {
    return {
      status: {},
      modal: '',
      tempProduct: {
        imagesUrl: []
      }
    }
  },
  props: {
    product: {
      type: Object,
      default () {
        return {}
      }
    },
    isNew: {
      type: Boolean,
      default: false
    }
  },
  mixins: [modalMixin],
  // emits: ['update-product'],
  watch: {
    product () {
      this.tempProduct = this.product
      if (!this.tempProduct.imagesUrl) {
        this.tempProduct.imagesUrl = []
      }
      if (!this.tempProduct.imageUrl) {
        this.tempProduct.imageUrl = ''
      }
    }
  }

}
</script>

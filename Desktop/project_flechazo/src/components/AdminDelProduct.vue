<template>
    <div
        class="modal fade"
        id="delProductModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="delProductModalLabel"
        aria-hidden="true"
        ref="modal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header bg-danger text-white">
                    <h5 class="model-title" id="delProductModalLable">
                        <span>刪除 {{ tempProduct.title }}</span>
                    </h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                    </div>
                    <div class="modal-body">
                    是否刪除
                    <strong class="text-danger">{{tempProduct.title}}</strong>
                    商品(刪除後將無法恢復)
                    </div>
                    <div class="modal-footer">
                    <button
                        type="button"
                        class="btn btn-outline-secondary"
                        data-bs-dismiss="modal"
                    >
                        取消
                    </button>
                    <button type="button" class="btn btn-danger"  @click="$emit('del-item')">
                        確認刪除
                    </button>
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
      modal: ''
    }
  },
  props: {
    tempProduct: {}
  },
  mixins: [modalMixin]
}
</script>

<template>
    <div class="container">
     <h2>購物車</h2>
     <div class="text-end">
        <button
          class="btn btn-outline-danger"
          type="button"
          @click="removeAllCart"
          :disabled="cartData.carts.length === 0"
        >
          清空購物車
        </button>
     </div>
     <table class="table align-middle">
        <thead>
          <tr>
            <th></th>
            <th>品名</th>
            <th style="width: 150px">數量/單位</th>
            <th>單價</th>
          </tr>
        </thead>
        <tbody>
          <template v-if="cartData.carts">
            <tr v-for="item in cartData.carts" :key="item.id">
              <td>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  @click="removeCartItem(item.id)"
                >
                  x
                </button>
              </td>
              <td>
                {{item.product.title }}
                <!-- <div class="text-success">已套用優惠券</div> -->
              </td>
              <td>
                <div class="input-group input-group-sm">
                  <div class="input-group mb-3">
                    <!-- <input
                      min="1"
                      type="number"
                      class="form-control"
                      v-model="item.qty"
                    /> -->
                    <select
                      id=""
                      class="form-select"
                      v-model="item.qty"
                      @change=" updateCartItem(item)"
                      :disabled="isLoadingItem === item.id"
                    >
                      <option
                        :value="num"
                        v-for="num in 20"
                        :key="`${num}${item.id}`"
                      >
                        {{num}}
                      </option>
                    </select>
                    <span class="input-group-text" id="basic-addon2"
                      >{{ item.product.unit}}</span
                    >
                  </div>
                </div>
              </td>
              <td class="text-end">
                <!-- <small class="text-success">折扣價：</small> -->
                {{ item.total}}
              </td>
            </tr>
          </template>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3" class="text-end">總計</td>
            <td class="text-end">{{cartData.total }}</td>
          </tr>
          <!-- <tr>
                <td colspan="3" class="text-end text-success">折扣價</td>
                <td class="text-end text-success">{{ }}</td>
              </tr> -->
        </tfoot>
     </table>
    <div class="my-5 row justify-content-center">
        <!-- 表單資料 -->
        <VueForm
          ref="form"
          class="col-md-6"
          v-slot="{ errors }"
          @submit="createOrder"
        >
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <VueField
              id="email"
              name="email"
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errors['email'] }"
              placeholder="請輸入 Email"
              rules="email|required"
              v-model="form.user.email"
            ></VueField>
            <ErrorMessage
              name="email"
              class="invalid-feedback"
            ></ErrorMessage>
          </div>

          <div class="mb-3">
            <label for="name" class="form-label">收件人姓名</label>
            <VueField
              id="name"
              name="姓名"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['姓名'] }"
              placeholder="請輸入姓名"
              rules="required"
              v-model="form.user.name"
            ></VueField>
            <ErrorMessage
              name="姓名"
              class="invalid-feedback"
            ></ErrorMessage>
          </div>

          <div class="mb-3">
            <label for="tel" class="form-label">收件人電話</label>
            <VueField
              id="tel"
              name="電話"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['電話'] }"
              placeholder="請輸入電話"
              rules="required|min:8|max:10"
              v-model="form.user.tel"
            ></VueField>
            <ErrorMessage
              name="電話"
              class="invalid-feedback"
            ></ErrorMessage>
          </div>

          <div class="mb-3">
            <label for="address" class="form-label">收件人地址</label>
            <VueField
              id="address"
              name="地址"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['地址'] }"
              placeholder="請輸入地址"
              rules="required"
              v-model="form.user.address"
            ></VueField>
            <ErrorMessage
              name="地址"
              class="invalid-feedback"
            ></ErrorMessage>
          </div>

          <div class="mb-3">
            <label for="message" class="form-label">留言</label>
            <textarea
              id="message"
              class="form-control"
              cols="30"
              rows="10"
              v-model="form.message"
            ></textarea>
          </div>
          <div class="text-end">
            <VueLoading :active="isLoading">
              <div class="loadingio-spinner-ripple-dyu8ah17dm9">
                <div class="ldio-ztawxi47wk">
                  <div></div>
                  <div></div>
                </div>
              </div>
            </VueLoading>
            <button
              type="submit"
              class="btn btn-danger"
              :disabled="Object.keys(errors).length > 0 || cartData.carts.length === 0"
              @click="addLoading"
            >
              送出訂單
            </button>
          </div>
        </VueForm>
    </div>
    </div>
</template>
<script>
import emitter from '@/libs/emitter'
export default {
  data () {
    return {
      cartData: {
        carts: []
      },
      products: [],
      productId: '',
      isLoadingItem: '',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      isLoading: false
    }
  },
  mounted () {
    this.getCart()
  },
  methods: {
    getCart () {
      this.isLoading = true
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`).then((res) => {
        this.cartData = res.data.data
        this.isLoading = false
      })
    },
    removeCartItem (id) {
      this.isLoading = true
      this.isLoadingItem = id
      this.$http.delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`).then((res) => {
        this.getCart()
        this.isLoadingItem = ''
        emitter.emit('get-cart')
      })
    },
    updateCartItem (item) {
      const data = {
        product_id: item.id,
        qty: item.qty
      }
      this.isLoadingItem = item.id
      this.$http
        .put(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`, { data })
        .then((res) => {
          this.getCart()
          this.isLoadingItem = ''
          emitter.emit('get-cart')
        })
    },
    removeAllCart () {
      this.$http.delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`).then((res) => {
        this.getCart()
        emitter.emit('get-cart')
      })
    },
    createOrder () {
      const order = this.form
      this.$http
        .post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`, { data: order })
        .then((res) => {
          alert(res.data.message)
          this.$refs.form.resetForm()
          this.getCart()
          emitter.emit('get-cart')
        })
    },
    addLoading () {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
      }, 1000)
    }
  }
}

</script>

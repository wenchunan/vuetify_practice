import emitter from '@/utils/emitter'
export default {
  data () {
    return {
      favorite: JSON.parse(localStorage.getItem('favorite')) || [],
      favoriteId: JSON.parse(localStorage.getItem('favoriteId')) || []
    }
  },
  methods: {
    toggleFavorite (product) {
      // 查詢 this.favorite 是否有這個 id
      const favoriteIndex = this.favorite.findIndex((item) => item.id === product.id)
      if (favoriteIndex === -1) {
        this.favorite.push(product)
        this.favoriteId.push(product.id)
        this.$statusMsg(true, '收藏', '已成功收藏')
      } else {
        this.favorite.splice(favoriteIndex, 1)
        this.favoriteId.splice(favoriteIndex, 1)
        this.$statusMsg(false, '收藏', '已取消收藏')
      }
      // 每當觸發 toggleFavorite 方法時，傳遞 this.favorite 資料到 FrontNavbar.vue
      emitter.emit('get-favorite', this.favorite)
    }
  },
  watch: {
    // this.favorite 為陣列，所以要做深層監聽
    favorite: {
      handler () {
        // localStorage 資料寫入
        localStorage.setItem('favorite', JSON.stringify(this.favorite))
      },
      deep: true
    },
    favoriteId: {
      handler () {
        localStorage.setItem('favoriteId', JSON.stringify(this.favoriteId))
      },
      deep: true
    }
  }
}

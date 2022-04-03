import emitter from '@/utils/emitter'
export default {
  data () {
    return {
      favorite: JSON.parse(localStorage.getItem('favorite')) || []
    }
  },
  methods: {
    toggleFavorite (id) {
      // 查詢 this.favorite 是否有這個 id
      const favoriteIndex = this.favorite.findIndex((item) => item === id)
      if (favoriteIndex === -1) {
        this.favorite.push(id)
      } else {
        this.favorite.splice(favoriteIndex, 1)
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
    }
  }
}

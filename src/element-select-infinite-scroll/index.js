const template = `
  <el-select v-model='selected' @focus='onfocus'>
    <div v-infinite-scroll='loadList' :infinite-scroll-disabled='loading'>
      <el-option v-for='i in index' :key='i' :value='i' :label='i'></el-option>
    </div>
  </el-select>
`
/** @requires Vue */
new Vue({
  template,
  data() {
    return {
      selected: 0,
      index: 0,
      init: true,
      loading: false,
    }
  },
  methods: {
    loadList() {
      this.loading = true
      new Promise(resolve => {
        this.index += 10
        setTimeout(()=>{
          resolve()
        })
      }).finally(()=>{
        this.loading = false
      })
    },
    onfocus(e) {
      if(this.init && e) {
        this.init = false
        this.loadList()
      }
    },
  }
})

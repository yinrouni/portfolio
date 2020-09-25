export default {
  filters: {
    concatenate: function (n, project) {
      return '../../static/' + project + '/' + n + '.png'
    }
  },
  methods: {
    redirect: function (url) {
      window.open(url, 'blank')
    }
  }
}

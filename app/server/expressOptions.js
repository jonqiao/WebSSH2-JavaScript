module.exports = {
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1s',
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now())
  }
}

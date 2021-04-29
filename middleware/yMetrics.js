export default function (context) {
  // Add the userAgent property to the context
  //console.log(context.route.path)
  if (process.browser) {
    setTimeout(() => {
      if (typeof ym !== undefined) {
        ym(42010699, 'hit', context.route.path)
      }
    }, 200)
  }
}

export default function (context) {
  // Add the userAgent property to the context
  //console.log(context.route.path)
  if (process.browser) {
    if (typeof ym === 'function') {
      setTimeout(async () => {
        console.log(context.route.path)
        await ym(42010699, 'hit', context.route.path)
      }, 0)
    }
  }
}

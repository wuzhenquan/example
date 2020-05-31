const Router = require('koa-router')
const router = new Router()
const fs = require('fs')

router.get('/', ctx => {
  const publicKey = fs.readFileSync(`${process.cwd()}/app/rsa/public.pem`, 'utf-8')
  ctx.body = { publicKey }
})

module.exports = router

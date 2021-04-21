import Router from "@koa/router"
import BooksController from "./BooksController"
import ApiController from "./ApiController"
const apiController = new ApiController()
const booksController = new BooksController()

const router = Router()

function initController(app) {
  router.get("/books/home", booksController.actionHome)
  router.get("/books/list", booksController.actionList)
  router.get("/books/update", booksController.actionUpdate)
  router.get("/books/detail", booksController.actionDetail)
  router.get("/api/getDataList", apiController.actionDataList)
  app
    .use(router.routes())
    // 丰富header头
    .use(router.allowedMethods())
}

module.exports = initController

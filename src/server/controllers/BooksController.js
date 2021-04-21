import BooksModel from "../models/BooksModel"
import Controller from "./Controller"

class BooksController extends Controller {
  constructor() {
    super()
  }

  async actionHome(ctx) {
    const booksModel = new BooksModel()
    const result = await booksModel.getBooksList()
    ctx.body = await ctx.render("./books/home/home.html", {
      data: result.data,
    })
  }

  async actionList(ctx) {
    const booksModel = new BooksModel()
    const result = await booksModel.getBooksList()
    ctx.body = await ctx.render("./books/list/list.html", {
      data: result.data,
    })
  }

  async actionDetail(ctx) {
    const booksModel = new BooksModel()
    const result = await booksModel.getBooksList()
    ctx.body = await ctx.render("./books/detail/detail.html", {
      data: result.data,
    })
  }

  async actionUpdate(ctx) {
    const booksModel = new BooksModel()
    const result = await booksModel.getBooksList()
    ctx.body = await ctx.render("./books/update/update.html", {
      data: result.data,
    })
  }
}

export default BooksController

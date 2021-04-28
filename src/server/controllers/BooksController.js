import Controller from './Controller';
import BooksModel from '../models/BooksModel';

class BooksController extends Controller {
    constructor() {
        super();
    }
    async actionBooksList(ctx) {
        const booksModel = new BooksModel();
        const result = await booksModel.getBooksList()
        ctx.body = await ctx.render('books/pages/list', {
            data: [{
                    id: 1,
                    name: "图书一"
                },
                {
                    id: 2,
                    name: "图书二"
                }
            ]
        });
    }
    async actionBooksCreate(ctx) {
        ctx.body = await ctx.render('books/pages/create')
    }
}
export default BooksController;
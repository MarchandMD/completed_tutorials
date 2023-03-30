let expect = require("chai").expect
let Book = require("../exercises/book")

describe("Book", function () {
    it("should be a function", function () {
        // code goes here
        expect(Book).to.be.a("function")
    })

    it("has a title", function () {
        let book = new Book({ title: "A Farewell to Arms" })

        expect(book.title).to.eq("A Farewell to Arms")
    })

    it("has an author", function () {
        let book = new Book({
            title: "A Farewell to Arms",
            author: "Hemingway",
        })

        expect(book.author).to.eq("Hemingway")
    })

    it("has a number of pages", function () {
        let book = new Book({
            title: "A Farewell to Arms",
            author: "Hemingway",
            pages: 250,
            read: false,
        })

        expect(book.pages).to.eq(250)
    })

  it('returns false if not read', function () {
        let book = new Book({
            title: "A Farewell to Arms",
            author: "Hemingway",
            pages: 250,
            read: false,
        })
        expect(book.read).to.eq(false)
  })
})

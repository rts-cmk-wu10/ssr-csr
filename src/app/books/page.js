import { connect, disconnect } from "@/lib/db"
import Book from "@/models/books"
 
async function getBooks() {
 
    await connect()
 
	const books = await Book.find()

    const newBook = new Book({
        title: "Kadavermarch",
        author: "Dennis Jürgensen"
    })
    await newBook.save()
 
    await disconnect()
 
    return books
}
 
export default async function Books() {
    const books = await getBooks()
    return (
        <>
            <h1 className="text-3xl">Books</h1>
            <ul>
                {books.map(book => <li key={book._id}>{book.title} by {book.author}</li>)}
            </ul>
        </>
    )
}

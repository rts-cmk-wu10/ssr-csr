"use client"

import BookForm from "@/components/bookform"
import { getBooks } from "@/actions/books"
import { useEffect, useState } from "react"
import { useFormState } from "react-dom"
import { createBook, deleteBook } from "@/actions/books"

export default function Books() {
    const [books, setBooks] = useState([])
    const [formState, formAction] = useFormState(createBook)

    async function deleteHandler(event) {
        console.log(event.target.dataset.id)
        if (confirm("Are you sure you want to delete this book?")) {
            await deleteBook(event.target.dataset.id)
            setBooks(await getBooks())
        }
    }

    useEffect(function () {
        getBooks().then(books => setBooks(books))
    }, [formState])

    return (
        <>
            <h1 className="text-3xl">Books</h1>
            <BookForm formAction={formAction} formState={formState} />
            <ul>
                {books.map(book => (
                    <li key={book._id}>
                        {book.title} by {book.author}
                        <button data-id={book._id} onClick={deleteHandler} className="bg-red-500 text-white font-semibold uppercase px-4 py-2 rounded-full">
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}

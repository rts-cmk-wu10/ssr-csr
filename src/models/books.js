// src/models/books.js

import { Schema, model, models } from "mongoose"

const BookSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	author: {
		type: String,
		required: [true, "You must provide an author"]
	},
	pages: Number,
	summary: String,
	cover: String
}, {
	timestamps: true
})

export default models.Book || model("Book", BookSchema)
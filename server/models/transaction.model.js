const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
    userId: {
        type: String,
    },
    type: {
        type: String,
        default: 'expense',
        enum: {
            values: ['expense','income'],
            // message: "Please, choose a Crew Position",
        },
    },
    title: {
        type: String,
        required: [true, "el título de la transacción es requerido."],
    },
    description: {
        type: String,
    },
    amount: {
        type: Number,
        min: [0, 'El valor no puede ser negativo.'],
        required: [true, "El valor es requerido."],
    },
    category: {
        type: String,
        required: [true, "La Categoría es requerida."],
    },
    // color: {
    //     type: String,
    //     // required: [true, "Category is required."],
    // },
    date: {
        type: Date,
        required: [true, "La fecha de la transacción es requerida"],
    },
}, {timestamps: true, versionKey: false})

const Transaction = mongoose.model("transactions", TransactionSchema);
module.exports = Transaction;
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema( {
    firstName: {
        type: String,
        required: [true, "El nombre es requerido."]
    },
    lastName: {
        type: String,
        required: [true, "El apellido es requerido."]
    },
    email: {
        type: String,
        required: [true, "El correo es requerido"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Por favor, use una cuenta de correo válida."
        },
        unique: true
    },
    password: {
        type: String,
        required: [true, "La contraseña es requerida."],
        minlength: [8, "La contraseña debe tener al menos 8 caracteres."]
    },
    cellphone:{
        type: String,
    },
    location:{
        type: String,
    },
    postalCode:{
        type: String,
    },
    profilePictureURL: {
        type: String,
    },
}, {timestamps: true, versionKey: false})

//Apply this when we don't want to storage it in the DB
UserSchema.virtual('confirmPassword')
    .get( ()=> this._confirmPassword )
    .set( value => this._confirmPassword = value )

//Before creating a user: Validate
UserSchema.pre('validate', function(next){
    if(this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Las contraseñas no coinciden.');
    }
    next();
})

//Before creating a user: Bcrypting password
UserSchema.pre('save', function(next){
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});

const User = mongoose.model("users", UserSchema);
module.exports = User;
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const staffSchema = new mongoose.Schema(
    {
        ID: {
            type: String,
            required: true,
            lowercase: true,
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            max: 1024,
            minlength: 6,
        }
    },
    {
        timestamps: true,
    }
);

// play function before save into display: "block",
staffSchema.pre("save", async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

staffSchema.statics.login = async function(ID, password) {
    const user = await this.findOne({ID});
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user;
        }
        throw Error("Incorrect password");
    }
    throw Error("Incorrect ID");
}

const StaffModel = mongoose.model("staff", staffSchema);

module.exports = StaffModel;
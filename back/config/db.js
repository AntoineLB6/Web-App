const mongoose = require("mongoose");

mongoose
    .connect(`mongodb+srv://${process.env.DB_USER_PASS}@cluster0.6kc2l.mongodb.net/web-project`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        }
    )
    .then(() => console.log("MongoDB est connecté."))
    .catch((err) => console.log("Erreur de connection MongoDB", err))
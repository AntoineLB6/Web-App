const mongoose = require("mongoose");

const ficheSchema = new mongoose.Schema(
    {
    _id: mongoose.Schema.Types.ObjectId,
    userID:  {
        "type": String,
        "default": "",
        unique: true,
    },
    infoFiche: {
        name: {
            "type": String,
            "default": ""
        },
        age: {
            "type": Number,
            "default": 0
        },
        sexe: {
            "type": String,
            "default": ""
        },
        orientation: {
            "type": String,
            "default": ""
        },
        category: {
            "type": String,
            "default": ""
        },
        isPNJ: {
            "type": Boolean,
            "default": false
        },
        race: {
            "type": String,
            "default": ""
        },
        familia: {
            "type": String,
            "default": ""
        },
        classe: {
            "type": String,
            "default": ""
        },
        niveau: {
            "type": String,
            "default": ""
        },
        caractere: {
            "type": String,
            "default": ""
        },
        histoire: {
            "type": String,
            "default": ""
        },
        apparence: {
            "type": String,
            "default": ""
        },
        imagePerso: {
            "type": String,
            "default": ""
        },
        imageFond: {
            "type": String,
            "default": ""
        }
    },
    stats: {
        currentStats: {
            hp: { "type": Number, "default": 0 },
            force: { "type": Number, "default": 0 },
            dexterite: { "type": Number, "default": 0 },
            resistance: { "type": Number, "default": 0 },
            agilite: { "type": Number, "default": 0 },
            reserve_magique: { "type": Number, "defaul.t": 0 },
            puissance_magique: { "type": Number, "default": 0 }
        },
        totalStats: {
            hp: { "type": Number, "default": 0 },
            force: { "type": Number, "default": 0 },
            dexterite: { "type": Number, "default": 0 },
            resistance: { "type": Number, "default": 0 },
            agilite: { "type": Number, "default": 0 },
            reserve_magique: { "type": Number, "default": 0 },
            puissance_magique: { "type": Number, "default": 0 }
        }
    },
    balance: {
        "type": Number,
        "default": "0"
    },
    magies: [],
    capacites: [],
    equipement: {
        equiped: {
            tete: {
                "type": String,
                "default": ""
            },
            epaules: {
                "type": String,
                "default": ""
            },
            plastron: {
                "type": String,
                "default": ""
            },
            gants: {
                "type": String,
                "default": ""
            },
            jambieres: {
                "type": String,
                "default": ""
            },
            bottes: {
                "type": String,
                "default": ""
            },
            maindroite: {
                "type": String,
                "default": ""
            },
            maingauche: {
                "type": String,
                "default": ""
            },
            accessoires: {
                "type": String,
                "default": ""
            }
        },
        inventaire: []
    },
},

    {
        timestamps: true,
    }
    );

    const FicheModel = mongoose.model("user", ficheSchema);

    module.exports = FicheModel;
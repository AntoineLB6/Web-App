var mongoose = require('mongoose');
const FicheModel = require("../models/fiche.model");

module.exports.createFiche = async (req, res) => {

    const infoFiche = {
        name: req.body.name,
        age: req.body.age,
        sexe: req.body.sexe,
        orientation: req.body.orientation,
        category: req.body.category,
        isPNJ: req.body.isPNJ,
        race: req.body.race,
        familia: req.body.familia,
        classe: req.body.classe,
        niveau: req.body.niveau,
        caractere: req.body.caractere,
        histoire: req.body.histoire,
        apparence: req.body.apparence,
        imagePerso: req.body.imageperso,
        imageFond: req.body.imagefond,
    }
    const classesdata = require("../assets/classes/classes.json");
    const position1 = classesdata.map(e => e.name.toLowerCase()).indexOf(req.body.classe.toLowerCase());
    const thisclasse = classesdata[position1].stats;

    const racesdata = require("../assets/races/races.json");
    const position2 = racesdata.map(e => e.name.toLowerCase()).indexOf(req.body.race.toLowerCase());
    const thisrace = racesdata[position2].stats;
    for (key1 in thisclasse) {
        for (key2 in thisrace) {
            if (key1 === key2) {
                thisclasse[key1] += thisrace[key2];
            }
        }
    }

    const newUser = new FicheModel({
        _id: mongoose.Types.ObjectId(),
        userID: req.body.userID,
        infoFiche,
        stats: {
            currentStats: thisclasse,
            totalStats: thisclasse,
        },
    });

    try {
        const fiche = await newUser.save();
        return res.status(201).json(fiche);
    } catch (err) {
        return res.status(400).send(err);
    }
}

module.exports.updateFiche = async (req, res) => {
    await FicheModel.findOneAndUpdate(
        { userID: req.body.ficheID },
        { $set: { infoFiche: req.body.fiche } },
        { new: true },
        (err, docs) => {
          if (!err) res.status(201).send("Requête de modification effectuée")
          else {
              console.log("Update error : " + err);
              res.status(500).send(err);
            }
        }
      );
}

module.exports.getCategoryFiche = async (req, res) => {
    const allFiches = await FicheModel.find({ "infoFiche.category": req.body.category });
    if (allFiches.length !== 0) return res.status(201).json(allFiches);
    else return res.status(200).send("Collection vide");
}

module.exports.getAllFiche = async (req, res) => {
    const allFiches = await FicheModel.find();
    if (allFiches.length !== 0) return res.status(201).json(allFiches);
    else return res.status(200).send("Collection vide");
}

module.exports.getFiche = async (req, res) => {
    const fiche = await FicheModel.findOne({ userID: req.body.userID });
    if (fiche) return res.status(201).json(fiche);
    else return res.status(200).send("Utilisateur introuvable");
}
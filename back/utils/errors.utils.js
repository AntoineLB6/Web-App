module.exports.signInErrors = (err) => {
    let errors = { ID: "", password: "" }

    if (err.message.includes("ID"))
    errors.ID = "ID inconnu";

    if (err.message.includes("password"))
    errors.password = "Mot de passe incorrect";

    return errors;
}
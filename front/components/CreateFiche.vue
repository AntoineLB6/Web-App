<template>
    <div>
        <h1>Creation de Fiche RP :</h1>

  <p>
    <label for="userID">User ID</label><br>
    <input id="userID" v-model="infoFiche.userID" type="text" name="userID">
  </p>

  <p>
    <label for="name">Name</label><br>
    <input id="name" v-model="infoFiche.name" type="text" name="name">
  </p>

  <p>
    <label for="age">Age</label><br>
    <input id="age" v-model="infoFiche.age" type="number" name="age" min="0">
  </p>

  <p>
    Sexe<br>
    <input type="radio" id="homme" value="homme" v-model="infoFiche.sexe" name="sexe">
    <label for="homme">Homme</label><br>
    <input type="radio" id="femme" value="femme" v-model="infoFiche.sexe" name="sexe">
    <label for="femme">Femme</label>
  </p>

  <p>
    Orientation Sexuelle<br>
    <input type="radio" id="heterosexuel" value="heterosexuel" v-model="infoFiche.orientation" name="orientation">
    <label for="heterosexuel">Hétérosexuel</label><br>
    <input type="radio" id="homosexuel" value="homosexuel" v-model="infoFiche.orientation" name="orientation">
    <label for="homosexuel">Homosexuel</label><br>
    <input type="radio" id="bisexuel" value="bisexuel" v-model="infoFiche.orientation" name="orientation">
    <label for="bisexuel">Bisexuel</label>
  </p>

  <p>
    <label for="race">Race</label><br>
    <select id="race" v-model="infoFiche.race" name="race">
      <option>Humain</option>
      <option>Demi-Loup</option>
      <option>Demi-Chat</option>
      <option>Demi-Mouton</option>
      <option>Demi-Raton Laveur</option>
      <option>Demi-Chien</option>
      <option>Nain</option>
      <option>Elfe</option>
      <option>Amazone</option>
      <option>Pallum</option>
    </select>
  </p>

  <p>
    <label for="familia">Familia</label><br>
    <select id="familia" v-model="infoFiche.familia" name="familia">
      <option>Loki</option>
      <option>Freya</option>
      <option>Ganesha</option>
      <option>Hephaïstos</option>
      <option>Ishtar</option>
      <option>Hermès</option>
      <option>Seth</option>
    </select>
  </p>

  <p>
    <label for="classe">Classe</label><br>
    <select id="classe" v-model="infoFiche.classe" name="classe">
      <option>Archer</option>
      <option>Assassin</option>
      <option>Guerrier</option>
      <option>Mage</option>
      <option>Pugiliste</option>
    </select>
  </p>

  <p>
    <label for="niveau">Niveau</label><br>
    <input id="niveau" v-model="infoFiche.niveau" type="number" name="niveau" min="0">
  </p>

  <p>
    <label for="caractere">Caractère</label><br>
    <textarea id="caractere" v-model="infoFiche.caractere" name="caractere" rows="7" cols="150" placeholder="Votre Caractère"></textarea>
  </p>

  <p>
    <label for="histoire">Histoire RP</label><br>
    <textarea id="histoire" v-model="infoFiche.histoire" name="histoire" rows="7" cols="150" placeholder="Votre Histoire"></textarea>
  </p>

  <p>
    <label for="apparence">Apparence RP</label><br>
    <textarea id="apparence" v-model="infoFiche.apparence" name="apparence" rows="7" cols="150" placeholder="Votre Apparence"></textarea>
  </p>

  <p>
    <label for="imageperso">Image du Personnage</label><br>
    <input id="imageperso" v-model="infoFiche.imageperso" type="text" name="imageperso">
  </p>

  <p>
    <label for="imagefond">Image de Fond</label><br>
    <input id="imagefond" v-model="infoFiche.imagefond" type="text" name="imagefond">
  </p>

  <p>
    <button id="submit" @click="submitForm">Créer la fiche</button>
  </p>

    </div>
</template>

<script>
  export default { }
</script>
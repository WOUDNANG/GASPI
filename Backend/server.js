const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Création de l'application Express
const app = express();

// Middleware pour gérer les CORS et parser le JSON
app.use(cors());
app.use(bodyParser.json());

// Connexion à MongoDB (remplace <DB_URI> par l'URI de ta base de données MongoDB)
mongoose.connect('<DB_URI>', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connecté à MongoDB'))
  .catch(err => console.log('Erreur de connexion à MongoDB:', err));

// Création du modèle de données pour l'email
const EmailSchema = new mongoose.Schema({
  email: { type: String, required: true }
});

const Email = mongoose.model('Email', EmailSchema);

// Route pour recevoir l'email et l'enregistrer dans la base de données
app.post('/submit-email', async (req, res) => {
  const { email } = req.body;

  // Vérification que l'email est bien renseigné
  if (!email) {
    return res.status(400).json({ message: 'L\'adresse e-mail est obligatoire' });
  }

  try {
    const newEmail = new Email({ email });
    await newEmail.save();
    res.status(200).json({ message: 'E-mail enregistré avec succès' });
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de l\'enregistrement de l\'e-mail' });
  }
});

// Lancer le serveur
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Serveur backend lancé sur http://localhost:${PORT}`);
});
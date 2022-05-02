import { DropDownLanguages } from "./components/DropDownLanguages";
import { Button } from "./components/Buttons";
import ConnectionImage from "./images/Connection.png";

const App = () => {
  return (
    <div id="homepage">
      <DropDownLanguages />
      <h1>urStock</h1>
      <h3>Gérez votre stock en temps réel avec urStock</h3>
      <p>
        Une solution tout en un permettant de gérer votre stock, anticiper les commandes via le fournisseur de votre choix et limiter les pertes économiques &
        écologiques.
      </p>
      <Button message="Se connecter" />
      <Button message="Créer un compte" theme="secondary" />
      <a href="#">Mot de passe oublié</a>
      <img className="homepage-img" src={ConnectionImage} alt="" />
    </div>
  );
};

export default App;

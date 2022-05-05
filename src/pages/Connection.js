import { Button } from "./../components/Buttons";
import { GoBack } from "./../components/GoBack";
import { Input } from "./../components/Inputs";
import ConnectionImage from "./../images/Connection.png";

const Connection = () => {
  return (
    <div id="connection">
      <GoBack href="/" />

      <h1>urStock</h1>

      <h3>Connexion</h3>

      <div className="login-details">
        <Input label="Adresse mail :" placeholder="johndoe@gmail.com"></Input>

        <Input label="Mot de passe :" placeholder="*********" type="password"></Input>

        <a className="forgot-pwd" href="#">
          Mot de passe oublié ?
        </a>
      </div>

      <Button message="Se connecter" />

      <img className="connection-img" src={ConnectionImage} alt="" />
    </div>
  );
};

export default Connection;

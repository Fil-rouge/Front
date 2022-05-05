import { Button } from "./../components/Buttons";
import { GoBack } from "./../components/GoBack";
import { Input } from "./../components/Inputs";

const Register = () => {
  return (
    <div id="register">
      <GoBack href="/" />

      <h1>urStock</h1>

      <h3>Créer un compte</h3>

      <div className="register-details">
        <Input label="Nom :" placeholder="johndoe@gmail.com"></Input>

        <Input label="Prénom :" placeholder="John"></Input>

        <Input label="Email :" type="email" placeholder="johndoe@gmail.com"></Input>

        <Input label="Mot de passe :" placeholder="*********"></Input>

        <Input label="Confirmation de mot de passe :" placeholder="heticFILROUGE22" type="password"></Input>

        <div className="urstock-cgu">
          <input type="checkbox" name="cgu" />
          <label htmlFor="cgu">
            <a href="#">J’ai lu et j’accepte les termes de conditions d’utilisations</a>
          </label>
        </div>
      </div>

      <Button message="Se connecter" />
    </div>
  );
};

export default Register;

import { DropDownLanguages } from "./components/DropDownLanguages";
import { Button } from "./components/Buttons";

const App = () => {
  return (
    <div>
      <DropDownLanguages />
      <div>
        <Button message="Connexion" />
      </div>
      <Button message="Connexion secondary" theme="secondary" />
      <Button message="Connexion" size="full"/>
    </div>
  );
};

export default App;

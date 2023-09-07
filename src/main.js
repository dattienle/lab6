import ContactForm from "./contact";
import ListContact from "./list";
import "./style.css";
const App = () => {
  return (
    <div className="container">
      <div className="left">
        <ContactForm />;
      </div>
      <div className="right">
        <ListContact />
      </div>
    </div>
  );
};
export default App;

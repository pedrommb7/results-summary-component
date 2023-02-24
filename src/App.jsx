import Paragraph from "./components/atoms/Paragraph/paragraph";
import Heading from "./components/atoms/Heading/Heading";
import Button from "./components/atoms/Button/Button";
import AreasScored from "./components/molecules/AreasScored/AreasScored";
import "./assets/styles/main.scss";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <section className="score flex flex__align--center flex--column py--16 px--64">
        <Paragraph text={"Your Result"} />
        76 of 100 
        <Heading className="color-primary--white" type="h1" text={'Great'} />
        <Paragraph className="mt-0"
          text={
            "You scored higher than 65% of the people who have taken these tests."
          }
        />
      </section>

      <section className="summary p--32">
        <Heading type="h2" text={'Summary'} />
        <AreasScored svg='reaction' text='Reaction' score='80 / 100'/>
        <AreasScored svg='memory' text='Memory' score='92 / 100'/>
        <AreasScored svg='verbal' text='Verbal' score='61 / 100'/>
        <AreasScored svg='visual' text='Visual' score='72 / 100'/>
        <Button text={'Continue'}></Button>
      </section>

    </div>
  );
}

export default App;

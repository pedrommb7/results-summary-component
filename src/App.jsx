import Paragraph from "./components/atoms/Paragraph/Paragraph.tsx";
import Heading from "./components/atoms/Heading/Heading.tsx";
import Button from "./components/atoms/Button/Button.tsx";
import ScoreBadge from "./components/molecules/ScoreBadge/ScoreBadge.tsx";
import AreasScored from "./components/molecules/AreasScored/AreasScored.tsx";
import Footer from "./components/organisms/Footer/Footer.tsx";
import data from "./data.json";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <section className="score flex flex__align--center flex--column py--16 px--64">
        <Paragraph className="score__yourresult color-gradient--lightslateblue2" text={"Your Result"} />
        <ScoreBadge className='my--4' />
        <Heading className="mt--16 mb--8 color-primary--white" type="h1" text={'Great'} />
        <Paragraph className="score__text mt--0 mb--24 color-gradient--lightslateblue2"
          text={
            "You scored higher than 65% of the people who have taken these tests."
          }
        />
      </section>

      <section className="summary flex flex--column p--32">
        <Heading className='m--0 mb--20' type="h3" text={'Summary'} />
        {data.map((item) => (
          <AreasScored key={item.id} status={item.category} score={item.score}/>
        ))}
        <Button className="flex__justify--center bgcolor-darkblue color-primary--white border-radius--30 py--16 mt--8" text={'Continue'}></Button>
      </section>
      
      <Footer className="mb--12" />
      
    </div>
  );
}

export default App;

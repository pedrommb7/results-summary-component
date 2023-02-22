import "./App.scss";
import Paragraph from "./components/atoms/Paragraph/paragraph";

function App() {
  return (
    <div className="App">
      <Paragraph text={'Your Result'} />     
      76 of 100 
      Great

      <Paragraph text={'You scored higher than 65% of the people who have taken these tests.'} /> 
      Summary 
      Reaction 80 / 100 Memory 92 / 100 Verbal
      61 / 100 Visual 72 / 100 Continue

      
    </div>
  );
}

export default App;
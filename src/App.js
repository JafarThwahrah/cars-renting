import { BrowserRouter } from "react-router-dom";
import Pages from "./routes/Pages";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />

        <Pages />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

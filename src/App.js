import { BrowserRouter } from "react-router-dom";
import Pages from "./routes/Pages";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { Notifications } from "react-push-notification";

function App() {
  return (
    <div className="App">
      <div className="notification">
        <Notifications />
      </div>
      <BrowserRouter>
        <Header />
        <Pages />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

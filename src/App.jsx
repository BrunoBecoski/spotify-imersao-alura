import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Footer from "./components/Footer";

import "./styles/styles.css"

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App

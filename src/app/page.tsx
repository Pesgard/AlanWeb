import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Datos from "./components/Datos";
import Tareas from "./components/Tareas";

export default function Home() {
  return (
    <main className="m-4">
      <Header/>
      <div className="flex items-start mt-4">
        <Tareas/>
        <Datos/>
      </div>
      <Footer/>
    </main>
  );
}

import Encabezado from "./components/Encabezado";
import MensajeEstado from "./components/MensajeEstado";
import TarjetaCurso from "./components/TarjetaCurso";

function App() {
  const presentacionLista = true;

  const temasWeb = [
    {
      id: 1,
      tema: "HTML",
      descripcion: "HTML permite estructurar el contenido de una página web, como títulos, párrafos, imágenes, enlaces y tablas.",
      importancia: "Es la base de toda página web porque organiza la información que se mostrará en el navegador.",
      disponible: true
    },
    {
      id: 2,
      tema: "CSS",
      descripcion: "CSS se utiliza para dar estilo y diseño a una página web, como colores, tamaños, márgenes, fondos y distribución.",
      importancia: "Es importante porque mejora la apariencia visual y hace que una página sea más atractiva y ordenada.",
      disponible: true
    },
    {
      id: 3,
      tema: "JavaScript",
      descripcion: "JavaScript agrega interactividad a las páginas web, por ejemplo botones, formularios dinámicos, validaciones y eventos.",
      importancia: "Es fundamental porque permite que la página responda a las acciones del usuario.",
      disponible: true
    },
    {
      id: 4,
      tema: "React",
      descripcion: "React es una biblioteca de JavaScript que permite crear interfaces con componentes reutilizables.",
      importancia: "Es útil porque facilita la organización del código y el desarrollo de aplicaciones web modernas.",
      disponible: true
    }
  ];

  return (
    <div className="contenedor">
      <Encabezado />

      <MensajeEstado activo={presentacionLista} />

      <section>
        <h2>Temas importantes de Programación Web</h2>

        {temasWeb.map((temaWeb) => (
          <TarjetaCurso
            key={temaWeb.id}
            tema={temaWeb.tema}
            descripcion={temaWeb.descripcion}
            importancia={temaWeb.importancia}
            disponible={temaWeb.disponible}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
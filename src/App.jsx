import Encabezado from "./components/Encabezado";
import MensajeEstado from "./components/MensajeEstado";
import TarjetaTema from "./components/TarjetaTema";

function App() {
  const presentacionActiva = true;
  const nombreBiblioteca = "React";
  const anioActual = 2026;

  const temasWeb = [
    {
      id: 1,
      tema: "HTML",
      descripcion: "HTML permite estructurar el contenido de una página web como títulos, párrafos, imágenes, enlaces y tablas.",
      importancia: "Es la base de cualquier sitio web porque organiza toda la información que se mostrará al usuario.",
      disponible: true
    },
    {
      id: 2,
      tema: "CSS",
      descripcion: "CSS se usa para dar estilos visuales, como colores, márgenes, tamaños, fondos y distribución.",
      importancia: "Permite que una página sea más atractiva, clara y ordenada.",
      disponible: true
    },
    {
      id: 3,
      tema: "JavaScript",
      descripcion: "JavaScript agrega interactividad a una página web, como botones, formularios dinámicos y validaciones.",
      importancia: "Hace que la página responda a las acciones del usuario.",
      disponible: true
    },
    {
      id: 4,
      tema: "React",
      descripcion: "React es una biblioteca de JavaScript para crear interfaces mediante componentes reutilizables.",
      importancia: "Facilita la organización del código y el desarrollo de aplicaciones modernas.",
      disponible: true
    }
  ];

  return (
    <div className="contenedor">
      <Encabezado />

      <section className="seccion">
        <h2>1. Import and Export</h2>
        <p>
          En esta actividad se importan y exportan componentes como
          <strong> Encabezado</strong>, <strong>MensajeEstado</strong> y
          <strong> TarjetaTema</strong> para organizar mejor el proyecto.
        </p>
      </section>

      <section className="seccion">
        <h2>2. JSX Introduction</h2>
        <p>
          JSX permite escribir estructuras similares a HTML dentro de JavaScript.
        </p>
        <p>
          Biblioteca utilizada: <strong>{nombreBiblioteca}</strong>
        </p>
        <p>
          Año de elaboración: <strong>{anioActual}</strong>
        </p>
      </section>

      <section className="seccion">
        <h2>3. Components</h2>
        <p>
          La aplicación está dividida en componentes reutilizables para separar el encabezado,
          el estado de la exposición y las tarjetas de información.
        </p>
        <Encabezado />
      </section>

      <section className="seccion">
        <h2>4. Conditional Rendering</h2>
        <MensajeEstado activo={presentacionActiva} />
      </section>

      <section className="seccion">
        <h2>5. React Lists</h2>
        <p>
          A continuación se muestra una lista dinámica de temas importantes de programación web
          usando <strong>map()</strong>.
        </p>

        {temasWeb.map((temaWeb) => (
          <TarjetaTema
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
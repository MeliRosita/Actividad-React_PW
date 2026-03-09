import { useState } from "react";
import Encabezado from "./components/Encabezado";
import MensajeEstado from "./components/MensajeEstado";
import TarjetaTema from "./components/TarjetaTema";
import PerfilAlumno from "./components/PerfilAlumno";

function App() {
  const presentacionActiva = true;
  const nombreBiblioteca = "React";
  const anioActual = 2026;

  const [nombre, setNombre] = useState("");
  const [semestre, setSemestre] = useState("");
  const [leGustaReact, setLeGustaReact] = useState(false);
  const [mostrarPerfil, setMostrarPerfil] = useState(false);

  const temasWeb = [
    {
      id: 1,
      tema: "HTML",
      descripcion:
        "HTML permite estructurar el contenido de una página web como títulos, párrafos, imágenes, enlaces y tablas.",
      importancia:
        "Es la base de cualquier sitio web porque organiza toda la información que se mostrará al usuario.",
      disponible: true
    },
    {
      id: 2,
      tema: "CSS",
      descripcion:
        "CSS se usa para dar estilos visuales, como colores, márgenes, tamaños, fondos y distribución.",
      importancia:
        "Permite que una página sea más atractiva, clara y ordenada.",
      disponible: true
    },
    {
      id: 3,
      tema: "JavaScript",
      descripcion:
        "JavaScript agrega interactividad a una página web, como botones, formularios dinámicos y validaciones.",
      importancia:
        "Hace que la página responda a las acciones del usuario.",
      disponible: true
    },
    {
      id: 4,
      tema: "React",
      descripcion:
        "React es una biblioteca de JavaScript para crear interfaces mediante componentes reutilizables.",
      importancia:
        "Facilita la organización del código y el desarrollo de aplicaciones modernas.",
      disponible: true
    }
  ];

  const manejarEnvio = (e) => {
    e.preventDefault();

    if (nombre.trim() === "" || semestre === "") {
      alert("Por favor, completa todos los campos.");
      return;
    }

    setMostrarPerfil(true);
  };

  return (
    <div className="contenedor">
      <Encabezado />

      <section className="seccion">
        <h2>1. Import and Export</h2>
        <p>
          En esta actividad se importan y exportan componentes como
          <strong> Encabezado</strong>, <strong>MensajeEstado</strong>,
          <strong> TarjetaTema</strong> y <strong>PerfilAlumno</strong>.
          Esto ayuda a organizar mejor el proyecto.
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
          En React, los componentes permiten dividir una aplicación en partes más pequeñas
          y reutilizables.
        </p>
        <ul>
          <li><strong>Encabezado:</strong> muestra la información principal.</li>
          <li><strong>MensajeEstado:</strong> muestra el estado de la exposición.</li>
          <li><strong>TarjetaTema:</strong> muestra cada tema importante.</li>
          <li><strong>PerfilAlumno:</strong> muestra un ejemplo práctico de PropTypes.</li>
        </ul>
      </section>

      <section className="seccion">
        <h2>4. Conditional Rendering</h2>
        <MensajeEstado activo={presentacionActiva} />
      </section>

      <section className="seccion">
        <h2>5. React Lists</h2>
        <p>
          A continuación se muestra una lista dinámica de temas importantes de programación web usando <strong>map()</strong>.
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

      <section className="seccion">
        <h2>6. PropTypes</h2>
        <p>
          En esta sección se muestra un ejemplo práctico. El usuario puede ingresar datos
          y esos datos se envían al componente <strong>PerfilAlumno</strong>, el cual usa
          <strong> PropTypes</strong> para validar el tipo de propiedades recibidas.
        </p>

        <form onSubmit={manejarEnvio} className="formulario">
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Escribe un nombre"
          />

          <label>Semestre:</label>
          <input
            type="number"
            value={semestre}
            onChange={(e) => setSemestre(e.target.value)}
            placeholder="Escribe el semestre"
          />

          <label className="checkbox">
            <input
              type="checkbox"
              checked={leGustaReact}
              onChange={(e) => setLeGustaReact(e.target.checked)}
            />
            ¿Le gusta React?
          </label>

          <button type="submit">Mostrar perfil</button>
        </form>

        {mostrarPerfil && (
          <PerfilAlumno
            nombre={nombre}
            semestre={Number(semestre)}
            leGustaReact={leGustaReact}
          />
        )}
      </section>
    </div>
  );
}

export default App;
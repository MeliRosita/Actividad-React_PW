function Encabezado() {
  const materia = "Programación Web";
  const maestro = "Francisco Manzano Pinzon";

  return (
    <header className="encabezado">
      <h1>Actividad React - Temas importantes de Programación Web</h1>

      <p><strong>Materia:</strong> {materia}</p>
      <p><strong>Maestro:</strong> {maestro}</p>

      <p><strong>Integrantes:</strong></p>
      <ul>
        <li>Melina Alejandra Yañez Rodriguez - 230300965</li>
        <li>Jose Miguel Muñoz Balmori - 230300022</li>
      </ul>

      <hr />
    </header>
  );
}

export default Encabezado;
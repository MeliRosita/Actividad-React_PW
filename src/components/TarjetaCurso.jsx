import PropTypes from "prop-types";

function TarjetaCurso({ tema, descripcion, importancia, disponible }) {
  return (
    <div className="tarjeta">
      <h3>{tema}</h3>

      <p><strong>Descripción:</strong> {descripcion}</p>
      <p><strong>Importancia:</strong> {importancia}</p>

      <p>
        <strong>Estado:</strong> {disponible ? "Tema incluido" : "Tema pendiente"}
      </p>
    </div>
  );
}

TarjetaCurso.propTypes = {
  tema: PropTypes.string,
  descripcion: PropTypes.string,
  importancia: PropTypes.string,
  disponible: PropTypes.bool
};

export default TarjetaCurso;
import PropTypes from "prop-types";

function TarjetaTema({ tema, descripcion, importancia, disponible }) {
  return (
    <div className="tarjeta">
      <h4>{tema}</h4>
      <p><strong>Descripción:</strong> {descripcion}</p>
      <p><strong>Importancia:</strong> {importancia}</p>
      <p><strong>Estado:</strong> {disponible ? "Incluido" : "Pendiente"}</p>
    </div>
  );
}

TarjetaTema.propTypes = {
  tema: PropTypes.string,
  descripcion: PropTypes.string,
  importancia: PropTypes.string,
  disponible: PropTypes.bool
};

export default TarjetaTema;
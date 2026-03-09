import PropTypes from "prop-types";

function PerfilAlumno({ nombre, semestre, leGustaReact }) {
  return (
    <div className="tarjeta">
      <h4>Ejemplo de PropTypes</h4>
      <p><strong>Nombre:</strong> {nombre}</p>
      <p><strong>Semestre:</strong> {semestre}</p>
      <p><strong>¿Le gusta React?:</strong> {leGustaReact ? "Sí" : "No"}</p>
    </div>
  );
}

PerfilAlumno.propTypes = {
  nombre: PropTypes.string.isRequired,
  semestre: PropTypes.number.isRequired,
  leGustaReact: PropTypes.bool.isRequired
};

export default PerfilAlumno;
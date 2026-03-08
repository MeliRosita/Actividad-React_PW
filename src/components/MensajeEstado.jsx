function MensajeEstado({ activo }) {
  return (
    <div className="bloque-ejemplo">
      <h3>Conditional Rendering</h3>
      {activo ? (
        <p>La exposición está lista y activa para mostrar los temas importantes de programación web.</p>
      ) : (
        <p>La exposición aún no está disponible.</p>
      )}
    </div>
  );
}

export default MensajeEstado;
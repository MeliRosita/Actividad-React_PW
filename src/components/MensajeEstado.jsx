function MensajeEstado({ activo }) {
  return (
    <div className="estado">
      <h2>Estado de la exposición</h2>

      {activo ? (
        <p>La presentación está lista para mostrar los temas importantes de programación web.</p>
      ) : (
        <p>La presentación todavía no está disponible.</p>
      )}
    </div>
  );
}

export default MensajeEstado;
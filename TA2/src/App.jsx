import Card from './components/Card'; // Asegúrate de que la ruta al componente sea correcta

const App = () => {
  return (
    <div>
      <Card>
        <h2>Título del Tarea</h2>
        <p>Descripción de la tarea.</p>
        <p><strong>Persona Asignada:</strong> Juan Pérez</p>
        <p><strong>Fecha de Inicio:</strong> 2024-09-16</p>
        <p><strong>Fecha de Fin:</strong> 2024-09-30</p>
      </Card>
    </div>
  );
};

export default App;

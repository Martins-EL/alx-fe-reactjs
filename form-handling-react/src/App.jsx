import FormikForm from "./components/FormikForm";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <RegistrationForm />

      <FormikForm />
    </div>
  );
}

export default App;

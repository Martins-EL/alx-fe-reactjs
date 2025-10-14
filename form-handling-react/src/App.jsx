import FormikForm from "./components/formikForm";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <RegistrationForm />

      <formikForm />
    </div>
  );
}

export default App;

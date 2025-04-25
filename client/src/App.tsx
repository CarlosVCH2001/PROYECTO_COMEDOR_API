import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./app/layout";
import HomePage from "./pages/HomePage";
import ReportesGeneral from "./pages/ReportesGeneral";
import { JSX } from "react/jsx-runtime";
function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/reportes"
          element={
            <Layout>
              <ReportesGeneral />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
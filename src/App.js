import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import BasicTable from "./BasicTable";
import { Home } from "./Home";
import FormikForm1 from "./FormikForm";
import FormikForm2 from "./FormikForm2";
import FormikForm3 from "./FormikForm3";

function App() {
  return (
    <div>
      <Router>
        <Route exact component={Home} path="/" />
        <Route exact component={BasicTable} path="/basic-table" />
        <Route exact component={FormikForm1} path="/formik-form1" />
        <Route exact component={FormikForm2} path="/formik-form2" />
        <Route exact component={FormikForm3} path="/formik-form3" />
      </Router>
    </div>
  );
}

export default App;

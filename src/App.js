import { Route, Switch } from "react-router-dom";
import "./App.css";
import JobDetailPage from "./pages/JobDetailPage";
import SearchPage from "./pages/SearchPage";
import JobsProvider from "./provider/JobsProvider";

function App() {
  return (
    <JobsProvider>
      <div className="App">
        <Switch>
          <Route exact path="/" component={SearchPage} />
          <Route path="/jobs/:id" component={JobDetailPage} />
        </Switch>
      </div>
    </JobsProvider>
  );
}

export default App;

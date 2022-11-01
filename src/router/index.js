import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Headers from '../components/Main/Headers';
import Footers from '../components/Main/Footers';
import Home from '../containers/Home';
// import About from '../containers/About';
// import Papers from '../containers/Papers';
// import Sponsorship from "../containers/Sponsorship";
// import Registration from "../containers/Registration";
// import RegistrationSuccess from "../containers/Registration/Success";
// import Publications from "../containers/Publications";
// import ContactUs from "../containers/ContactUs";
import ErrorPage from "../containers/ErrorPage";
import { Layout } from 'antd';
const { Content } = Layout;

function App() {
  return (
    <Router>
      <Layout style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#fff' }}>
        <Headers />
        <Content className="site-layout" style={{ paddingBottom: '2.5rem' }}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            {/* <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/call-for-papers">
              <Papers />
            </Route>
            <Route exact path="/sponsorship">
              <Sponsorship />
            </Route>
            <Route exact path="/publications">
              <Publications />
            </Route>
            <Route exact path="/contact-us">
              <ContactUs />
            </Route>
            <Route exact path="/registration">
              <Registration />
            </Route>
            <Route exact path="/registration/success">
              <RegistrationSuccess />
            </Route>
            <Route exact path="/registration/payment-confirmation">
              <Registration />
            </Route>
            <Route exact path="/registration/check-status">
              <Registration />
            </Route>
            <Route exact path="/registration/info-and-payment-method">
              <Registration />
            </Route> */}
            <Route path="*">
              <ErrorPage />
            </Route>
          </Switch>
        </Content>
        <Footers style={{ position: 'absolute', bottom: 0, width: '100%', height: '2.5rem' }} />
      </Layout>
    </Router>
  );
}

export default App;

import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
console.log("App Component Loaded");

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Dark Mode */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import Login from './pages/Login';
import Menu from './pages/Menu';
import SignUp from './pages/SignUp'; // ✅ Fixed Import
import Register from './pages/Register'; // ✅ Added Import

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/it35-lab/app" component={Login} />
        <Route exact path="/it35-lab/signup" component={SignUp} /> {/* ✅ Fixed */}
        <Route exact path="/it35-lab/register" component={Register} /> {/* ✅ Added */}
        <Route exact path="/it35-lab/menu" component={Menu} />
        <Redirect exact from="/" to="/it35-lab/app" />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;

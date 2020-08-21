import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonMenuToggle
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { mapOutline, listOutline, options } from 'ionicons/icons';
import Login from './pages/Login'
import Overview from './pages/Overview'
import Filter from './components/Filter'
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import AuthContext from './components/AuthProvider'

const App: React.FC = () => {

  const {authValues} = React.useContext(AuthContext);

  return (
    <React.Fragment>
      <IonApp>
        {!authValues.authenticated ? (
          <IonReactRouter>
            <Route path="/login" component={Login} exact={true}/>
            <Route path="/" render={() => <Redirect to="/login"/>} exact/>
          </IonReactRouter>) : (
            <IonReactRouter>
              <IonMenu contentId="main">
                <IonHeader>
                  <IonToolbar>
                    <IonTitle>Ackerschlagverwaltung</IonTitle>
                  </IonToolbar>
                </IonHeader>
                <IonContent>
                  <IonMenuToggle>
                    <IonList>
                      <IonItem button routerLink="/filter">
                        <IonIcon slot="start" icon={options}></IonIcon>
                        <IonLabel>Filter</IonLabel>
                      </IonItem>
                    </IonList>
                  </IonMenuToggle>
                  <IonMenuToggle>
                    <IonList>
                      <IonItem button routerLink="/overview">
                        <IonIcon slot="start" icon={options}></IonIcon>
                        <IonLabel>Overview</IonLabel>
                      </IonItem>
                    </IonList>
                  </IonMenuToggle>
                </IonContent>
              </IonMenu>
              <IonTabs>
                <IonRouterOutlet id="main">
                  <Route path="/filter" exact>
                    <Filter/>
                  </Route>
                  <Route path="/overview">
                    <Overview />
                  </Route>
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                  <IonTabButton href="/map">
                    <IonIcon icon={mapOutline} />
                    <IonLabel>Karte</IonLabel>
                  </IonTabButton>
                  <IonTabButton href="/list">
                    <IonIcon icon={listOutline} />
                    <IonLabel>Liste</IonLabel>
                  </IonTabButton>
                </IonTabBar>
              </IonTabs>
            </IonReactRouter>
          )}
      </IonApp>
    </React.Fragment>);
}
export default App;

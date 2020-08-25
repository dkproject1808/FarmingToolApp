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
import { leafOutline, serverOutline, barChartOutline, constructOutline, documentOutline, settingsOutline } from 'ionicons/icons';
import Login from './pages/Login'
import Overview from './pages/Overview'
import BaseData from './pages/BaseData';
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
import NavTabs from './pages/NavTabs';

const App: React.FC = () => {

  // const { authValues } = React.useContext(AuthContext);

  return (
    <React.Fragment>
      <IonApp>
        {/* {!authValues.authenticated ? (
          <IonReactRouter>
            <Route path="/login" component={Login} exact={true} />
            <Route path="/" render={() => <Redirect to="/login" />} exact />
          </IonReactRouter>) : ( */}
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
                      <IonItem button routerLink="/main/basedata">
                        <IonIcon slot="start" icon={serverOutline}></IonIcon>
                        <IonLabel>Stammdaten</IonLabel>
                      </IonItem>
                    </IonList>
                  </IonMenuToggle>
                  <IonMenuToggle>
                  <IonMenuToggle>
                    <IonList>
                      <IonItem button routerLink="/main/filter">
                        <IonIcon slot="start" icon={leafOutline}></IonIcon>
                        <IonLabel>Ressourcen</IonLabel>
                      </IonItem>
                    </IonList>
                  </IonMenuToggle>
                  <IonMenuToggle>
                  </IonMenuToggle>
                    <IonList>
                      <IonItem button routerLink="/main/overview">
                        <IonIcon slot="start" icon={documentOutline}></IonIcon>
                        <IonLabel>Dokumente</IonLabel>
                      </IonItem>
                    </IonList>
                    <IonList>
                      <IonItem button routerLink="/main/filter">
                        <IonIcon slot="start" icon={constructOutline}></IonIcon>
                        <IonLabel>Mein Betrieb</IonLabel>
                      </IonItem>
                    </IonList>
                    <IonMenuToggle>
                    <IonList>
                      <IonItem button routerLink="/main/filter">
                        <IonIcon slot="start" icon={settingsOutline}></IonIcon>
                        <IonLabel>Einstellungen</IonLabel>
                      </IonItem>
                    </IonList>
                  </IonMenuToggle>
                  </IonMenuToggle>
                </IonContent>
              </IonMenu>
              <IonRouterOutlet id="main">
                <Route path="/filter" exact>
                  <Filter />
                </Route>
                <Route path="/basedata" exact>
                  <BaseData />
                </Route>
                <Route path="/main">
                  <NavTabs />
                </Route>
                <Redirect path="" to="/main" exact />
              </IonRouterOutlet>
            </IonReactRouter>
          {/* )} */}
      </IonApp>
    </React.Fragment>);
}
export default App;

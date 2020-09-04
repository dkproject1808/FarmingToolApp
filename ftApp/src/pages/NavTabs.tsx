import React from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import {
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
} from '@ionic/react';
import { mapOutline, listOutline, homeOutline, squareOutline, documentsOutline, barChartOutline, createOutline} from 'ionicons/icons';
import Map from './Map';
import Overview from './Overview';
import BaseData from "./BaseData";
import Fields from "./Fields";
import Driver from "./BaseDataSubMenue/Driver";
import Machines from "./BaseDataSubMenue/Machines";
import Addresses from "./BaseDataSubMenue/Addresses";

const NavTabs: React.FC = () => {
    return (
        <IonTabs>
            <IonRouterOutlet>
                <Redirect path="/main" to="/main/overview" exact />
                <Switch>
                    <Route path="/main/overview" exact>
                        <Overview />
                    </Route>
                    <Route path="/main/BaseData" exact>
                        <BaseData />
                    </Route>
                    <Route path="/main/fields" exact>
                        <Fields />
                    </Route>
                    <Route path="/main/map" exact>
                        <Map />
                    </Route>
                    <Route path="/main/BaseData/driver" exact>
                        <Driver />
                    </Route>
                    <Route path="/main/BaseData/machines" exact>
                        <Machines />
                    </Route>
                    <Route path="/main/BaseData/addresses" exact>
                        <Addresses />
                    </Route>
                </Switch>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
                <IonTabButton tab="home" href="/main/overview">
                    <IonIcon icon={barChartOutline} />
                    <IonLabel >Übersicht</IonLabel>
                </IonTabButton>
                <IonTabButton tab="map" href="/main/map">
                    <IonIcon icon={mapOutline} />
                    <IonLabel >Karte</IonLabel>
                </IonTabButton>
                <IonTabButton tab="fields" href="/main/fields">
                    <IonIcon icon={squareOutline} />
                    <IonLabel >Felder</IonLabel>
                </IonTabButton>
                <IonTabButton tab="documents" href="/main/overview">
                    <IonIcon icon={createOutline} />
                    <IonLabel>Notizen</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    )
}

export default NavTabs;
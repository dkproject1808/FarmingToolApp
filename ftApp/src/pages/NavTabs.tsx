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
import Filter from '../components/Filter'
import Overview from '../pages/Overview'
import BaseData from "./BaseData";

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
                    <Route path="/main/:courseId">
                        <Filter />
                    </Route>
                </Switch>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
                <IonTabButton tab="home" href="/main/overview">
                    <IonIcon icon={barChartOutline} />
                    <IonLabel >Übersicht</IonLabel>
                </IonTabButton>
                <IonTabButton tab="map" href="/main/filter">
                    <IonIcon icon={mapOutline} />
                    <IonLabel >Karte</IonLabel>
                </IonTabButton>
                <IonTabButton tab="fields" href="/main/overview">
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
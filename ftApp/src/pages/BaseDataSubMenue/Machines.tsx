import React from 'react';
import {Route} from 'react-router-dom';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonBackButton } from "@ionic/react";


const Machines: React.FC = () => {
    return <IonPage>
    <IonHeader>
        <IonToolbar>
            <IonButtons slot="start">
                <IonMenuButton />
            </IonButtons>
        </IonToolbar>
    </IonHeader>
    <IonContent>
        <h2>
            Machines Page
        </h2>
    </IonContent>
</IonPage>
}

export default Machines;
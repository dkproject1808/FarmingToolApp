import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonBackButton, IonGrid, IonImg, IonRow, IonCol, IonItem, IonAvatar, IonIcon, IonInput, IonButton, IonLabel, IonTab, IonTabBar,IonTabButton, IonMenuButton } from '@ionic/react';

const Overview: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton/>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>Overview!
            </IonContent>
        </IonPage>
    )
}
export default Overview;
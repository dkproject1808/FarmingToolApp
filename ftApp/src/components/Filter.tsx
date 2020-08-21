import React from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonBackButton } from "@ionic/react";


const Filter: React.FC = () => {
    return <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonButtons slot="start">
                    <IonBackButton />
                </IonButtons>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <h2>
                The filter page....
            </h2>
        </IonContent>
    </IonPage>
}

export default Filter;
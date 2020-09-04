import React from 'react';
import { IonHeader, IonToolbar, IonContent, IonPage, IonButtons, IonBackButton, IonGrid, IonRow, IonCol, IonButton, IonItem, IonAvatar, IonMenuButton, IonCard, IonCardContent, IonIcon, IonLabel, IonFabButton, IonFab, IonImg, IonThumbnail, IonCardTitle } from '@ionic/react';
import { addOutline, add, speedometer, speedometerOutline } from 'ionicons/icons';

export const DummyData = [
    { id: 'c1', title: 'Test Titel 1' },
    { id: 'c2', title: 'Test Titel 2' },
    { id: 'c3', title: 'Test Titel 3' }
];

const showItemHandler = () => {
    console.log("open");
}

const BaseData: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonGrid>
                        <IonRow>
                            <IonCol className="ion-text-center" size-md="4">
                                <IonButtons>
                                    <IonMenuButton />
                                </IonButtons>
                            </IonCol>
                            <IonCol className="ion-text-center" size-md="4">
                                <IonLabel>
                                    Stammdatenverwaltung
                                </IonLabel>
                            </IonCol>
                            <IonCol size-md="4">
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonToolbar>
            </IonHeader>
            <IonContent>
            <br/>
                <IonItem color="light" button onClick={showItemHandler}>
                    <IonLabel>
                        <IonButton expand="block" href="/main/BaseData/driver">
                            Fahrer
                        </IonButton>
                    </IonLabel>
                </IonItem>
                <br/>
                <IonItem color="light" button onClick={showItemHandler}>
                    <IonLabel>
                        <IonButton expand="block" href="/main/BaseData/Machines">
                            Maschinen
                        </IonButton>
                    </IonLabel>
                </IonItem>
                <br/>
                <IonItem color="light" button onClick={showItemHandler}>
                    <IonLabel>
                        <IonButton expand="block" href="/main/BaseData/addresses">
                            Addressen
                        </IonButton>
                    </IonLabel>
                </IonItem>
            </IonContent>
        </IonPage>
    )
}
export default BaseData;
import React from 'react';
import { IonHeader, IonToolbar, IonContent, IonPage, IonButtons, IonBackButton, IonGrid, IonRow, IonCol, IonButton, IonItem, IonAvatar, IonMenuButton, IonCard, IonCardContent, IonIcon, IonLabel, IonFabButton, IonFab, IonImg, IonThumbnail } from '@ionic/react';
import { addOutline, add } from 'ionicons/icons';

export const DummyData = [
    { id: 'c1', title: 'Test Titel 1' },
    { id: 'c2', title: 'Test Titel 2' },
    { id: 'c3', title: 'Test Titel 3' }
];

const Overview: React.FC = () => {
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
                                    Dashboard
                                </IonLabel>
                            </IonCol>
                            <IonCol size-md="4">

                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonToolbar>
            </IonHeader>
            <IonContent>

            </IonContent>
        </IonPage>
    )
}
export default Overview;
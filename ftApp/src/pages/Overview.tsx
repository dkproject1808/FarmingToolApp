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
                {/* 
                    

                 */}
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
                                    Flächenverwaltung
                                </IonLabel>
                            </IonCol>
                            <IonCol size-md="4">
                                <IonFab vertical="center" horizontal="end">
                                    <IonFabButton color="secondary">
                                        <IonIcon color="light" icon={addOutline} />
                                    </IonFabButton>
                                </IonFab>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonItem>
                    <IonLabel>
                        <h2>Feld25</h2>
                        <p> Ort, Größe, Kultur...</p>
                    </IonLabel>
                </IonItem>
                <IonItem>
                    <IonLabel>
                        <h2>Feld50</h2>
                        <p> Ort, Größe, Kultur...</p>
                    </IonLabel>
                </IonItem>
                <IonItem>
                    <IonLabel>
                        <h2>Feld75</h2>
                        <p> Ort, Größe, Kultur...</p>
                    </IonLabel>
                </IonItem>
                <IonItem>
                <IonThumbnail slot="end">
                            <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
                        </IonThumbnail>
                    <IonLabel>
                        <h2>Feld100</h2>
                        <p> Ort, Größe, Kultur...</p>
                    </IonLabel>
                </IonItem>
                <IonItem>
                    <IonLabel>
                        <h2>Feld125</h2>
                        <p> Ort, Größe, Kultur...</p>
                    </IonLabel>
                </IonItem>
            </IonContent>
        </IonPage>
    )
}
export default Overview;
import React, { useState } from 'react';
import { IonModal, IonHeader, IonToolbar, IonContent, IonButton, IonItem, IonLabel, IonGrid, IonRow, IonCol, IonInput, IonTitle } from '@ionic/react';


const Drivers_EditModal: React.FC<{
    show: boolean;
    onCancel: () => void;
    editedDriver: { id: string; title: string } | null;
}> = props => {
    return (
        <IonModal isOpen={props.show}>
            <IonHeader>
                <IonToolbar>
                    <IonHeader>
                        <IonTitle>{ props.editedDriver ? 'Fahrer bearbeiten': 'Fahrer anlegen'}</IonTitle>
                    </IonHeader>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel color="primary" position="floating">
                                    Vorname
                                </IonLabel>
                                <IonInput value={props.editedDriver?.title} type="text" />
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel color="primary" position="floating">
                                    Nachname
                                </IonLabel>
                                <IonInput value={props.editedDriver?.title} type="text" />
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel color="primary" position="floating">
                                    Führerscheinklasse
                                </IonLabel>
                                <IonInput value={props.editedDriver?.title} type="text" />
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-text-center">
                        <IonCol>
                            <IonButton onClick={props.onCancel} color="warning" expand="block">
                                Abbrechen
                            </IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton color="secondary" expand="block">
                                Speichern
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonModal>
    )
}

export default Drivers_EditModal;
import React, { useState, useRef } from 'react';
import { IonHeader, IonToolbar, IonContent, IonPage, IonButtons, IonBackButton, IonGrid, IonRow, IonCol, IonButton, IonItem, IonAvatar, IonMenuButton, IonCard, IonCardContent, IonIcon, IonLabel, IonFabButton, IonFab, IonImg, IonThumbnail, IonItemSliding, IonItemOptions, IonItemOption, IonTitle, IonText, IonAlert, IonToast, IonModal } from '@ionic/react';
import { addOutline, trash, trashOutline, syncCircleOutline, syncOutline } from 'ionicons/icons';
import { useParams } from 'react-router';
import Driver_EditingModal from '../../components/Drivers_components/Driver_EditModal';

export const DummyData = [
    { id: 'f1', title: 'Test Fahrer 1' },
    { id: 'f2', title: 'Test Fahrer 2' },
    { id: 'f3', title: 'Test Fahrer 3' },
    { id: 'f4', title: 'Test Fahrer 4' },
    { id: 'f5', title: 'Test Fahrer 5' },
];

const Driver: React.FC = () => {
    //Alert States Boolean
    const [deleteState, setDelete] = useState(false);
    //Toast States Boolean
    const [ToastDeleteMessage, setToastDeleteMessage] = useState('');
    //Editing Modal State Boolean
    const [isEditing, setIsEditing] = useState(false);
    const [selectedDriver, setSelectedDriver] = useState<any>();

    const deleteMessageHandler = () => {
        setDelete(false);
        setToastDeleteMessage("Fahrer wurde Erfolgreich gelöscht!")
    }

    const startDeleteDriverHandler = () => {
        setDelete(true);
    }

    const slidingOptionRef = useRef<HTMLIonItemSlidingElement>(null)

    const startEditDriverHandler = (driverId: string, event: React.MouseEvent) => {
        event.stopPropagation()
        setIsEditing(true);
        const driver = DummyData.find(f => f.id === driverId);
        slidingOptionRef.current?.closeOpened();
        if (!driver) {
            return;
        }
        setSelectedDriver(driver);
    }

    const cancelDriverEditingHandler = () => {
        setIsEditing(false);
        setSelectedDriver(null);
    }

    const startAddDriverHandler = () => {
        setIsEditing(true);
        setSelectedDriver(null);
    }

    const cancelDriverAddingHandler = () => {
        setIsEditing(false);
        setSelectedDriver(null);
    }

    return (
        <React.Fragment>
            <Driver_EditingModal editedDriver={selectedDriver} show={isEditing} onCancel={cancelDriverEditingHandler} />
            <IonToast
                color="primary"
                message={ToastDeleteMessage}
                isOpen={!!ToastDeleteMessage}
                duration={2000}
                onDidDismiss={() => {
                    setToastDeleteMessage('');
                }}
            />
            <IonAlert
                isOpen={deleteState}
                subHeader={'Wirklich löschen?'}
                message={'Das löschen des Fahrers kann nicht rückgängig gemacht werden'}
                buttons={[{
                    text: 'Abbrechen',
                    role: 'cancel',
                    handler: () => {
                        setDelete(false);
                    }
                }, {
                    text: 'Bestätigen',
                    handler: deleteMessageHandler
                }]}
            />
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons>
                            <IonMenuButton />
                        </IonButtons>
                        <IonTitle>
                            Fahrerverwaltung
                                </IonTitle>
                        <IonFab vertical="center" onClick={startAddDriverHandler} horizontal="end">
                            <IonFabButton>
                                <IonIcon color="light" icon={addOutline} />
                            </IonFabButton>
                        </IonFab>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    {DummyData.map(driver => (
                        <IonItemSliding key={driver.id}>
                            <IonItemOptions>
                                <IonItemOption onClick={startDeleteDriverHandler} color="danger">
                                    <IonLabel className="ion-text-center">
                                        <IonIcon color="light" slot="icon-only" icon={trash} />
                                        <p>Entfernen</p>
                                    </IonLabel>
                                </IonItemOption>
                                <IonItemOption onClick={startEditDriverHandler.bind(null, driver.id)} color="warning">
                                    <IonLabel className="ion-text-center">
                                        <IonIcon color="light" slot="icon-only" icon={syncOutline} />
                                        <p>Bearbeiten</p>
                                    </IonLabel>
                                </IonItemOption>
                            </IonItemOptions>
                            <IonItem button>
                                <IonLabel>
                                    <h2>{driver.title}</h2>
                                    <p> Vorname, Nachname, Führerscheinklasse...</p>
                                </IonLabel>
                            </IonItem>
                        </IonItemSliding>
                    ))}
                </IonContent>
            </IonPage>
        </React.Fragment>
    )
}
export default Driver;
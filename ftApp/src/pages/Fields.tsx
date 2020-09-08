import React, { useState, useRef } from 'react';
import { IonHeader, IonToolbar, IonContent, IonPage, IonButtons, IonBackButton, IonGrid, IonRow, IonCol, IonButton, IonItem, IonAvatar, IonMenuButton, IonCard, IonCardContent, IonIcon, IonLabel, IonFabButton, IonFab, IonImg, IonThumbnail, IonItemSliding, IonItemOptions, IonItemOption, IonTitle, IonText, IonAlert, IonToast} from '@ionic/react';
import { addOutline } from 'ionicons/icons';

import Fields_EditingModal from '../components/Fields_components/Fields_EditModal';
import Fields_SlidingItems from '../components/Fields_components/Fields_SlidingItems';
import { useParams } from 'react-router';

export const DummyData = [
    { id: 'c1', title: 'Test Feld 1' },
    { id: 'c2', title: 'Test Feld 2' },
    { id: 'c3', title: 'Test Feld 3' },
    { id: 'c4', title: 'Test Feld 4' },
    { id: 'c5', title: 'Test Feld 5' },
];

const Fields: React.FC = () => {

    //Alert States Boolean
    const [deleteState, setDelete] = useState(false);
    //Toast States Boolean
    const [ToastDeleteMessage, setToastDeleteMessage] = useState('');
    //Editing Modal State Boolean
    const [isEditing, setIsEditing] = useState(false);
    const [selectedField, setSelectedField] = useState<any>();

    const deleteMessageHandler = () => {
        setDelete(false);
        setToastDeleteMessage("Feld wurde Erfolgreich gelöscht!")
    }

    const slidingOptionRef = useRef<HTMLIonItemSlidingElement>(null)

    const startDeleteFieldHandler = () => {
        setDelete(true);
    }

    const startEditFieldHandler = (fieldId: string, event: React.MouseEvent) => {
        event.stopPropagation()
        setIsEditing(true);
        const field = DummyData.find(f => f.id === fieldId);
        slidingOptionRef.current?.closeOpened();
        if (!field) {
            return;
        }
        setSelectedField(field);
    }

    const cancelFieldEditingHandler = () => {
        setIsEditing(false);
        setSelectedField(null);
    }

    const startAddFieldHandler = () => {
        setIsEditing(true);
        setSelectedField(null);
    }

    const cancelFieldAddingHandler = () => {
        setIsEditing(false);
        setSelectedField(null);
    }

    return (
        <React.Fragment>
            <Fields_EditingModal editedField={selectedField} show={isEditing} onCancel={cancelFieldEditingHandler} />
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
                message={'Das löschen des Feldes kann nicht rückgängig gemacht werden'}
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
                            Flächenverwaltung
                        </IonTitle>
                        <IonFab vertical="center" horizontal="end">
                            <IonFabButton onClick={startAddFieldHandler}>
                                <IonIcon color="light" icon={addOutline} />
                            </IonFabButton>
                        </IonFab>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    {DummyData.map(field => (
                        <Fields_SlidingItems slidingRef={slidingOptionRef} text={field.title} onStartDelete={startDeleteFieldHandler} onStartEdit={startEditFieldHandler.bind(null, field.id)} key={field.id}/>
                    ))}
                </IonContent>
            </IonPage>
        </React.Fragment>
    )
}
export default Fields;
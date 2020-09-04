import React from 'react';
import {IonItem, IonItemSliding, IonItemOption, IonItemOptions, IonLabel,
IonIcon} from '@ionic/react';
import { addOutline, trash, trashOutline, syncCircleOutline, syncOutline } from 'ionicons/icons';


const Fields_slidingItems: React.FC<{
    slidingRef: React.Ref<HTMLIonItemSlidingElement>;
    onStartDelete: () => void;
    onStartEdit: (event: React.MouseEvent) => void;
    text: string;
}> = props => {
    return(
        <IonItemSliding ref={props.slidingRef}>
        <IonItemOptions>
            <IonItemOption onClick={props.onStartDelete} color="danger">
                <IonLabel className="ion-text-center">
                    <IonIcon color="light" slot="icon-only" icon={trash} />
                    <p>Entfernen</p>
                </IonLabel>
            </IonItemOption>
            <IonItemOption onClick={props.onStartEdit} color="warning">
                <IonLabel className="ion-text-center">
                    <IonIcon color="light" slot="icon-only" icon={syncOutline} />
                    <p>Bearbeiten</p>
                </IonLabel>
            </IonItemOption>
        </IonItemOptions>
        <IonItem button>
            <IonLabel>
                <h2>{props.text}</h2>
                <p> Ort, Größe, Kultur...</p>
            </IonLabel>
        </IonItem>
    </IonItemSliding>
    )
}


export default Fields_slidingItems;
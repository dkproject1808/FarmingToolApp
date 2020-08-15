import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonBackButton } from '@ionic/react';

const Register: React.FC = () =>  {
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/"/>
                    </IonButtons>
                    <IonTitle>
                        Farmingtool 
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <h2>Register works!</h2>
            </IonContent>
        </IonPage>
        )
}
export default Register;
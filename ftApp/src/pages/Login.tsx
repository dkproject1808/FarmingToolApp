import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonPage, IonInput, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonThumbnail, IonIcon, IonImg } from '@ionic/react';
import { image } from 'ionicons/icons';

const Login: React.FC = () =>  {
    return(
        <IonPage>
            <IonContent>
                <div id="background-login">
                <IonImg src="img/Logo_Farmingtool_12.png"/>
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="floating">Email</IonLabel>
                                    <IonInput></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="floating">Password</IonLabel>
                                    <IonInput></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                    <IonButton color="success" routerLink="/register">Register</IonButton>
                </div>
            </IonContent>
        </IonPage>
        )
}
export default Login;
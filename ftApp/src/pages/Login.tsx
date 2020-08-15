import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonPage, IonInput, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonThumbnail, IonIcon } from '@ionic/react';

const Login: React.FC = () =>  {
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle class="ion-text-center">
                        <img width="80" height="80" alt="ft-logo" src="../img/Logo_Farmingtool_12.png"></img>
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div>
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
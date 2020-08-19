import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonBackButton, IonGrid, IonImg, IonRow, IonCol, IonItem, IonAvatar, IonIcon, IonInput, IonButton, IonLabel, IonTab, IonTabBar,IonTabButton } from '@ionic/react';

const Overview: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton/>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div id="background-login">
                    <IonImg src="img/Logo_Farmingtool_12.png" />
                    <IonGrid fixed id="login-grid">
                        <div id="login-window">
                            <IonRow>
                                <IonCol offset="1" size="10">
                                    <IonItem>
                                        <IonInput placeholder="Name"></IonInput>
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol offset="1" size="10">
                                    <IonItem>
                                        <IonInput placeholder="Email"></IonInput>
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol offset="1" size="10">
                                    <IonItem>
                                        <IonInput placeholder="Passwort"></IonInput>
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol offset="1" size="10">
                                    <IonItem>
                                        <IonInput placeholder={'Passwort bestaetigen'}></IonInput>
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol offset="1" size="10">
                                    <IonButton expand="block" color="success" routerLink="/register">Registrieren</IonButton>
                                </IonCol>
                            </IonRow>
                        </div>
                    </IonGrid>
                </div>
            </IonContent>
        </IonPage>
    )
}
export default Overview;
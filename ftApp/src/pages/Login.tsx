import React, { useState, useRef } from 'react';
import { IonContent, IonButton, IonPage, IonInput, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonImg, IonAvatar, IonChip, IonIcon, IonHeader } from '@ionic/react';
import { personOutline, lockClosedOutline, personCircleOutline } from 'ionicons/icons';

import axios from 'axios';
import { Plugins } from '@capacitor/core';
import { isNull, isNullOrUndefined } from 'util';

const Login: React.FC = () => {

    const email = useRef<HTMLIonInputElement>(null);
    const password = useRef<HTMLIonInputElement>(null);

    const { Storage } = Plugins;

    const authRequest = () => {

        const enteredEmail = "" + email.current!.value;
        const enteredPassword = "" + password.current!.value;

        console.log(enteredEmail + "     " + enteredPassword)
        axios.post("http://localhost:8000/api/login", {}, {
            data: {
                email: enteredEmail,
                password: enteredPassword
            },
        }).then((response) => {
            console.log(response);
            if (isNullOrUndefined(getLocalToken())) {
                console.log("Storage erstellen")
                const obj = JSON.parse(response.config.data)
                //console.log(obj.email)
                Storage.set({
                    key: obj.email,
                    value: JSON.stringify({
                        token: response.data.access_token,
                    })
                });
            } else {
                console.log("TOKEN IN DB vorhanden!")
            }
        }, (error) => {
            console.log(error);
        });

    };
    const getLocalToken = () => {
        const value = Storage.get({ key: 'admin@example.com' });
        console.log('Got item: ', value);
        return value;
    }

    const removeLocalToken = () => {
        Storage.remove({ key: 'admin@example.com' });
    }

    return (
        <IonPage>
            <IonContent>
                <IonGrid fixed id="login-grid">
                    <IonRow>
                        <IonCol size-sm="8" offset-sm="2" size-md="6" offset-md="3">
                            <IonGrid fixed id="login-grid" className="ion-no-padding" >
                                <IonRow>
                                    <IonCol size="12">
                                        <IonImg className="center" src="img/Logo_Farmingtool_12.png" />
                                    </IonCol>
                                    <IonCol size="2" offset="5">
                                        <IonAvatar id="profilepic">
                                            <img className="center" src="img/pexels-photo-4918105.png" />
                                        </IonAvatar>
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol offset="1" size="10">
                                        <IonItem>
                                            <IonAvatar slot="start">
                                                <IonIcon className="center" size="large" src={personOutline} />
                                            </IonAvatar>
                                            <IonInput ref={email} type="email" placeholder="Email"></IonInput>
                                        </IonItem>
                                    </IonCol>
                                    <IonCol offset="1" size="10">
                                        <IonItem>
                                            <IonAvatar slot="start">
                                                <IonIcon className="center" size="large" src={lockClosedOutline} />
                                            </IonAvatar>
                                            <IonInput ref={password} type="password" placeholder="Password"></IonInput>
                                        </IonItem>
                                    </IonCol>
                                    <IonCol offset="1" size="10">
                                        <IonButton onClick={authRequest} routerLink="/overview" expand="block" color="success">Login</IonButton>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}
export default Login;
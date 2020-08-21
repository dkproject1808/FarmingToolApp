import React, { useState, useRef } from 'react';
import { IonContent, IonButton, IonPage, IonInput, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonImg, IonAvatar, IonChip, IonIcon, IonHeader, IonText, IonAlert } from '@ionic/react';
import { personOutline, lockClosedOutline, personCircleOutline } from 'ionicons/icons';

import { Plugins } from '@capacitor/core';
import AuthContext from '../components/AuthProvider';
import {useHistory} from "react-router";

const Login: React.FC = () => {
    const {authRequest} = React.useContext(AuthContext);
    const [loginFail, setLoginFail] = useState(false);
    const history = useHistory();

    const email = useRef<HTMLIonInputElement>(null);
    const password = useRef<HTMLIonInputElement>(null);

    const { Storage } = Plugins;

    const login = async () => {

        const enteredEmail = email.current!.value;
        const enteredPassword = password.current!.value;

        let result = await authRequest(enteredEmail, enteredPassword);
        console.log("RESULT::::"+result)
        if(result) {
            history.replace("/overview");
            return result;
        } else {
            setLoginFail(true)
            return result;
        }
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
            <IonAlert
                isOpen={loginFail}
                onDidDismiss={() => setLoginFail(false)}
                subHeader={'Login Failed'}
                message={'Failed to Login! Email or Password might be wrong!'}
                buttons={['Try again']}
            />
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
                                        <IonButton onClick={login} expand="block" color="success">Login</IonButton>
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
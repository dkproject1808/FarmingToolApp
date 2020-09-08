import React, { useState, useRef, ReactFragment } from 'react';
import { IonHeader, IonToolbar, IonContent, IonPage, IonButtons, IonBackButton, IonGrid, IonRow, IonCol, IonButton, IonItem, IonAvatar, IonMenuButton, IonCard, IonCardContent, IonIcon, IonLabel, IonFabButton, IonFab, IonImg, IonThumbnail, IonItemSliding, IonItemOptions, IonItemOption, IonTitle, IonText, IonAlert, IonToast, IonTabButton } from '@ionic/react';
import { addOutline } from 'ionicons/icons';

import Fields_EditingModal from '../components/Fields_components/Fields_EditModal';
import Fields_SlidingItems from '../components/Fields_components/Fields_SlidingItems';
import { useParams } from 'react-router';
import Driver from '../pages/BaseDataSubMenue/Driver';
import DriverEntity from '../models/driver.entity';
import { createConnection } from "typeorm";


const DriverController: React.FC = () => {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");

    function handleFirstnameChange(evt: React.FormEvent<HTMLInputElement>) {
        setFirstname(evt.currentTarget.value)
    }

    function handleLastnameChange(evt: React.FormEvent<HTMLInputElement>) {
        setLastname(evt.currentTarget.value)
    }

    const addDriver = () => {
        createConnection({
            type: "sqlite",
            database: "test",
            entities: [
                DriverEntity
            ],
            synchronize: true,
            logging: false
        }).then(connection => {
            let driver = new DriverEntity();
            driver.firstname = "firstname";
            driver.lastname = "lastname";
            return connection.manager
                .save(driver)
                .then(driver => {
                    console.log("Driver has been saved", driver.id);
                });
        }).catch(error => console.log(error));
    }
    return (
        <Driver onStartAddDriver={addDriver}>

        </Driver>
    );
}

export default DriverController;
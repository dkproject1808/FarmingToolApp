import React from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonBackButton, IonButton } from "@ionic/react";
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { square } from "ionicons/icons";

const Map: React.FC = () => {

    const testDB = () => {

        // SQLite.create({
        //   name: 'data.db',
        //   location: 'default'
        // }).then((result) => {
        //   console.log("DONE");
        //   console.log(result);
        // }).catch((err) => {
        //   console.log("ERROR");
        //   console.log(err);
        // });

        SQLite.create({name: 'data.db', location: 'default'}).then(res => {
            res.executeSql('CREATE TABLE IF NOT EXISTS mages(name VARCHAR(32))', [])
            .then((res) => {
                alert('CREATE MAGES:');
                alert(res.toString());
            })
            .catch(e => alert(e));
            res.executeSql("insert into mages (name) values ('gandalf');", [])
            
            .then((res) => {
                alert('INSERT MAGES:');
                alert(res.toString());
            })
            .catch(e => alert(e));
            res.executeSql('select * from mages', [])
            .then((res) => {
                alert('SELECT MAGES:');
                alert(res.toString());
            })
            .catch(e => alert(e));
        });
        // SQLite.echoTest().then(res => {
        //     alert(JSON.stringify(res));
        // });
        // SQLite.selfTest().then(res => {
        //     alert(JSON.stringify(res));
        // });
        

      }
    return <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <h2>
                This is a Map
            </h2>
            <IonButton onClick={testDB}>
                Press for DB
            </IonButton>
        </IonContent>
    </IonPage>
}

export default Map;
import React, { useState } from "react";
import { IonPage, IonHeader, IonToolbar, IonContent, IonButtons, IonMenuButton, IonBackButton, IonButton,IonItem, IonLabel, useIonViewDidEnter, useIonViewWillEnter } from "@ionic/react";
import { SQLite, SQLiteObject, SQLiteOriginal } from '@ionic-native/sqlite';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { HTTP, HTTPResponse } from '@ionic-native/http';
import { square, reload } from "ionicons/icons";
import { Http2ServerRequest } from "http2";

const Map: React.FC = () => {
    const [dbState, setDBState] = useState<SQLiteObject>()
    const [driverState, setDriverState] = useState<any>()

    useIonViewDidEnter(() => {
        loadDrivers()
      });
      

    // const importDatabase = () => {
    //     const http = HTTP;
    //     http.get('"http://localhost:8000/api/sqldump', { responseType: 'text' }, Headers).then((sqlString: HTTPResponse) => {
    //         SQLitePorter.importSqlToDb(dbState, sqlString.data)
    //     })
    // }

    const loadDrivers = () => {
        SQLite.create({ name: 'ftAppMobile.db', location: 'default' }).then((dbLite: SQLiteObject) => {
            try {
                return dbLite.executeSql("Select * FROM drivers", []).then(data => {
                    let drivers = [];
                    console.log(data)
                    console.log(data.rows.item(1).Vorname)
                    if (data.rows.length > 0) {
                        for (var i = 0; i < data.rows.length; i++) {
                            drivers.push({
                                id: data.rows.item(i).id,
                                vorname: data.rows.item(i).Vorname,
                                nachname: data.rows.item(i).Nachname
                            });
                            console.log(data.rows.item(i).id + ' ' + data.rows.item(i).Nachname)
                        }
                    }
                    setDriverState(drivers);
                    console.log(drivers + " FAHRER")
                    console.log(driverState + ' STATE')
                });
            } catch (error) {
                alert(error)
            }
        })
    }

    const addDriver = () => {
        SQLite.create({ name: 'ftAppMobile.db', location: 'default' }).then((dbLite: SQLiteObject) => {
                return dbLite.executeSql("insert into Drivers (Vorname, Nachname, Führerscheinklasse, BetriebID) values('Detlef', 'Dete','L','1')", [])
        })
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
            <IonButton onClick={addDriver}>
                Add Driver
            </IonButton>
            {driverState?.map((driver: { vorname: React.ReactNode; nachname: React.ReactNode; }) => (
                <IonItem button>
                    <IonLabel>
                        <h2>{driver.vorname}</h2>
                        <h2>{driver.nachname}</h2>
                        <p> Vorname, Nachname, Führerscheinklasse...</p>
                    </IonLabel>
                </IonItem>
            ))}
        </IonContent>
    </IonPage>
}

export default Map;
import React from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonBackButton } from "@ionic/react";
import {useParams} from 'react-router-dom';
import {DummyData} from '../pages/Overview'

const Filter: React.FC = () => {
    const selectedCourseId = useParams<{courseId: string}>().courseId;
    const selectedCourse = DummyData.find(c => c.id === selectedCourseId);
    return <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonButtons slot="start">
                    <IonBackButton />
                </IonButtons>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <h2>
                {selectedCourse ? selectedCourse?.title: 'No Work available'}
            </h2>
        </IonContent>
    </IonPage>
}

export default Filter;
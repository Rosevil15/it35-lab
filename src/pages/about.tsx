import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar, IonIcon, IonItem, IonLabel, IonList } from '@ionic/react';
import { airplane, wifi, bluetooth, call } from 'ionicons/icons';

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>This is the About page.</p>
        <>
      <IonList>
        <IonItem>
          <IonIcon aria-hidden="true" icon={airplane} slot="start"></IonIcon>
          <IonLabel>Airplane Mode</IonLabel>
        </IonItem>
        <IonItem>
          <IonIcon aria-hidden="true" icon={wifi} slot="start"></IonIcon>
          <IonLabel>Wi-Fi</IonLabel>
        </IonItem>
        <IonItem>
          <IonIcon aria-hidden="true" icon={bluetooth} slot="start"></IonIcon>
          <IonLabel>Bluetooth</IonLabel>
        </IonItem>
        <IonItem>
          <IonIcon aria-hidden="true" icon={call} slot="start"></IonIcon>
          <IonLabel>Cellular</IonLabel>
        </IonItem>
      </IonList>

      <IonList>
        <IonItem>
          <IonAvatar aria-hidden="true" slot="start">
            <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </IonAvatar>
          <IonLabel>Rosevil</IonLabel>
        </IonItem>
        <IonItem>
          <IonAvatar aria-hidden="true" slot="start">
            <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </IonAvatar>
          <IonLabel>Ganzan</IonLabel>
        </IonItem>
        <IonItem>
          <IonAvatar aria-hidden="true" slot="start">
            <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </IonAvatar>
          <IonLabel>Louie</IonLabel>
        </IonItem>
        <IonItem>
          <IonAvatar aria-hidden="true" slot="start">
            <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </IonAvatar>
          <IonLabel>Nicko</IonLabel>
        </IonItem>
      </IonList>
    </>
      </IonContent>
    </IonPage>
  );
};

export default About;
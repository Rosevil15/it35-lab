import { 
    IonButtons,
      IonContent, 
      IonHeader, 
      IonInput, 
      IonItem, 
      IonLabel, 
      IonList, 
      IonMenuButton, 
      IonNote, 
      IonPage, 
      IonTextarea, 
      IonTitle, 
      IonToggle, 
      IonToolbar 
  } from '@ionic/react';
  
  const Feed: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Feed</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
        <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>it35 sample</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="light">
        <IonList inset={true}>
          <IonItem>
            <IonInput label="First Name"></IonInput>
          </IonItem>
          <IonItem>
            <IonInput label="Last Name"></IonInput>
          </IonItem>
          <IonItem>
            <IonToggle>
              <IonLabel>Allow Notifications</IonLabel>
              <IonNote color="medium">Unsubscribe at any time</IonNote>
            </IonToggle>
          </IonItem>
        </IonList>

        <IonList inset={true}>
          <IonItem>
            <IonTextarea label="Comments" label-placement="floating" rows={5}></IonTextarea>
          </IonItem>
        </IonList>

        <IonNote color="medium" class="ion-margin-horizontal">
          Your comments will be kept anonymous and will only be used to improve the reliability of our products.
        </IonNote>
      </IonContent>
    </>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Feed;
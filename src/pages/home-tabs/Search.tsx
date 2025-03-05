import { 
      IonAvatar,
    IonButtons,
      IonContent, 
      IonHeader, 
      IonItem, 
      IonLabel, 
      IonList,
      IonMenuButton, 
      IonPage,
      IonSearchbar, 
      IonText, 
      IonTitle, 
      IonToolbar 
  } from '@ionic/react';
  
  const Search: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Search</IonTitle>
          </IonToolbar>
          <IonToolbar>
          <IonSearchbar></IonSearchbar>
          </IonToolbar>
        </IonHeader>
        <IonContent className='ion-padding-top'>
          <IonText color='midium'className='ion-margin'>2 results</IonText>
          <IonList className='ion-margin-top'>
              <IonItem className='ion-margin-bottom'>
                <IonAvatar slot='start'>
                <img src="https://storage.googleapis.com/pod_public/1300/207360.jpg" alt="" />
                </IonAvatar>
                <IonLabel>Naruto</IonLabel>
              </IonItem>

              <IonItem className='ion-margin-bottom'>
                <IonAvatar slot='start'>
                <img src="https://tse1.mm.bing.net/th?id=OIP.rX298mOw30d82kcPsL9cxgHaEK&pid=Api&P=0&h=180" alt="" />
                </IonAvatar>
                <IonLabel>Luffy</IonLabel>
              </IonItem>
          </IonList>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Search;
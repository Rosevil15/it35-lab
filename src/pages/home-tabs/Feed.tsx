import { 
  IonAvatar,
  IonButton,
    IonButtons,
      IonCard,
      IonCardContent,
      IonCardHeader,
      IonCardSubtitle,
      IonCardTitle,
      IonContent, 
      IonHeader, 
      IonIcon, 
      IonItem, 
      IonLabel, 
      IonList, 
      IonMenuButton, 
      IonPage, 
      IonText, 
      IonTitle, 
      IonToolbar 
  } from '@ionic/react';
import { chatbubbleEllipsesOutline, ellipsisHorizontal, heart, paperPlaneOutline } from 'ionicons/icons';
  
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
        <IonList lines='none'>
        <IonItem className='ion-margin-top'>
            <IonAvatar slot='start'>
                <img src="https://storage.googleapis.com/pod_public/1300/207360.jpg"  alt='avatar' />
            </IonAvatar>
            <IonLabel>
                <IonText>
                    Naruto
                </IonText>
                <br />
                <IonText>
                    8 min ago
                </IonText>
            </IonLabel>
        <IonIcon slot='end' icon={ellipsisHorizontal} />
    </IonItem>
    </IonList>
          <IonCard>
          <img alt="Sample" src="https://storage.googleapis.com/pod_public/1300/207360.jpg" />
      <IonCardHeader>
        <IonCardTitle>I will become HOKAGE no matter what!!</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
      
      <IonButton fill="clear">
          <IonIcon slot='start' icon={heart} />
          671
      </IonButton>

      <IonButton fill="clear" color='medium'>
        <IonIcon slot='start' icon={chatbubbleEllipsesOutline} />
        551
      </IonButton>

      <IonButton fill='clear' color='medium'>
            <IonIcon slot='start' icon={paperPlaneOutline} />
        105
        </IonButton>
    </IonCard>

    <IonList lines='none'>
        <IonItem className='ion-margin-top'>
            <IonAvatar slot='start'>
                <img src="https://tse1.mm.bing.net/th?id=OIP.rX298mOw30d82kcPsL9cxgHaEK&pid=Api&P=0&h=180qzytdg8xliuaelun.jpg"  alt='avatar' />
            </IonAvatar>
            <IonLabel>
                <IonText>
                    Monkey D. Luffy
                </IonText>
                <br />
                <IonText>
                    20 min ago
                </IonText>
            </IonLabel>
        <IonIcon slot='end' icon={ellipsisHorizontal} />
    </IonItem>
    </IonList>
    <IonCard>
          <img alt="Sample" src="https://tse1.mm.bing.net/th?id=OIP.rX298mOw30d82kcPsL9cxgHaEK&pid=Api&P=0&h=180qzytdg8xliuaelun.jpg" />
      <IonCardHeader>
        <IonCardTitle>I will become the King of the Pirate</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
      
      <IonButton fill="clear">
          <IonIcon slot='start' icon={heart} />
          525
      </IonButton>

      <IonButton fill="clear" color='medium'>
        <IonIcon slot='start' icon={chatbubbleEllipsesOutline} />
        650
      </IonButton>

      <IonButton fill='clear' color='medium'>
            <IonIcon slot='start' icon={paperPlaneOutline} />
        150
        </IonButton>
    </IonCard>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Feed;
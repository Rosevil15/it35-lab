import { 
  IonButton,
  IonButtons,
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonList,
  IonItem,
  IonInput,
  useIonRouter
} from '@ionic/react';

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const doLogin = () => {
      navigation.push('/it35-lab/app','forward','replace');
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
    
      <IonContent className='ion-padding'>
        <IonList>
   
        <IonItem>
            <IonInput label="Email" type="email" placeholder="email@domain.com"></IonInput>
          </IonItem>

          <IonItem>
            <IonInput label="Password" type="password" value="password"></IonInput>
          </IonItem>

        </IonList>
        <IonButton onClick={() => doLogin()} expand="full">
          Login    
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
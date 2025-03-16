import { IonButton, 
    IonContent, 
    IonHeader, 
    IonInput, 
    IonItem, 
    IonLabel, 
    IonPage, 
    IonTitle, 
    IonToolbar, 
    useIonRouter } from '@ionic/react';
  import { useState } from 'react';
  
  const SignUp: React.FC = () => {
    const navigation = useIonRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const doSignUp = () => {
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      console.log('Sign up with:', email, password);
      navigation.push('/register');
    };
  
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Sign Up</IonTitle>
          </IonToolbar>
        </IonHeader>
  
        <IonContent className="ion-padding">
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput type="email" value={email} onIonInput={(e) => setEmail(e.detail.value!)} />
          </IonItem>
  
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput type="password" value={password} onIonInput={(e) => setPassword(e.detail.value!)} />
          </IonItem>
  
          <IonItem>
            <IonLabel position="floating">Confirm Password</IonLabel>
            <IonInput type="password" value={confirmPassword} onIonInput={(e) => setConfirmPassword(e.detail.value!)} />
          </IonItem>
  
          <IonButton onClick={doSignUp} expand="full">Register</IonButton>
        </IonContent>
      </IonPage>
    );
  };
  
  export default SignUp;
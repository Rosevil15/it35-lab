import React, { useState } from 'react';
import {
  IonButton, 
  IonContent, 
  IonHeader, 
  IonInput, 
  IonItem, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  useIonRouter
} from '@ionic/react';

const SignUp: React.FC = () => {
  const navigation = useIonRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    if (!email || !password || !confirmPassword) {
      alert('Please fill in all fields.');
      return;
    }
    
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
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
          <IonInput
            label='Email'
            labelPlacement='floating'
            value={email}
            onIonInput={(e) => setEmail(e.detail.value!)}
            placeholder='Enter email'
            type='email'
          />
        </IonItem>
        <IonItem>
          <IonInput
            label='Password'
            labelPlacement='floating'
            value={password}
            onIonInput={(e) => setPassword(e.detail.value!)}
            placeholder='Enter password'
            type='password'
          />
        </IonItem>
        <IonItem>
          <IonInput
            label='Confirm Password'
            labelPlacement='floating'
            value={confirmPassword}
            onIonInput={(e) => setConfirmPassword(e.detail.value!)}
            placeholder='Confirm password'
            type='password'
          />
        </IonItem>
        <IonButton onClick={handleSignUp} expand='full'>Register</IonButton>
        <IonButton fill='clear' onClick={() => navigation.push('/login')} expand='full'>Back to Login</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default SignUp;

import React, { useEffect, useState } from 'react';
import {
  IonAlert,
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
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    console.log("SignUp component mounted");
  }, []);

  const handleSignUp = () => {
    console.log("SignUp button clicked with:", email, password, confirmPassword);

    if (!email || !password || !confirmPassword) {
      setAlertMessage('Please fill in all fields.');
      setShowAlert(true);
      return;
    }

    if (password !== confirmPassword) {
      setAlertMessage('Passwords do not match!');
      setShowAlert(true);
      return;
    }

    console.log('Sign up with:', email, password);
    navigation.push('/it35-lab/register'); // ✅ Corrected navigation path
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
        <IonButton fill='clear' onClick={() => navigation.push('/it35-lab/login')} expand='full'>
          Back to Login
        </IonButton>

        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header={'Sign Up Error'}
          message={alertMessage}
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
};

export default SignUp;

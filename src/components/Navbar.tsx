// src/components/Navbar.tsx
import { IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { homeOutline, personOutline, settingsOutline } from 'ionicons/icons';


const Navbar: React.FC = () => {
  return (
    <IonTabBar slot="bottom">
      <IonTabButton tab="home" href="/home">
        <IonIcon icon={homeOutline} />
        <IonLabel>Home</IonLabel>
      </IonTabButton>
      <IonTabButton tab="profile" href="/profile">
        <IonIcon icon={personOutline} />
        <IonLabel>Perfil</IonLabel>
      </IonTabButton>
      <IonTabButton tab="settings" href="/settings">
        <IonIcon icon={settingsOutline} />
        <IonLabel>Ajustes</IonLabel>
      </IonTabButton>
    </IonTabBar>
  );
};

export default Navbar;

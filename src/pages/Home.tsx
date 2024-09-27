import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Cotizaciones from '../components/Cotizaciones';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dolargaucho</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Dolargaucho</IonTitle>
          </IonToolbar>
        </IonHeader>

        {/* Insertamos el componente modularizado de Cotizaciones */}
        <Cotizaciones />
      </IonContent>
    </IonPage>
  );
};

export default Home;

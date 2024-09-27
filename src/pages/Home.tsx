import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/react';
import { useEffect, useState } from 'react';
import { getCotizaciones } from '../services/DolarApi'
import './Home.css';

const Home: React.FC = () => {
  const [cotizaciones, setCotizaciones] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCotizaciones();
      setCotizaciones(data);
    };
    fetchData();
  }, []);

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

        <div className="cotizaciones-section">
          <IonList>
            {cotizaciones.length ? (
              cotizaciones.map((cotizacion) => (
                <IonItem key={cotizacion.nombre}>
                  <IonLabel>
                    {cotizacion.nombre}: Compra {cotizacion.compra} - Venta {cotizacion.venta}
                  </IonLabel>
                </IonItem>
              ))
            ) : (
              <IonLabel>Cargando cotizaciones...</IonLabel>
            )}
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;

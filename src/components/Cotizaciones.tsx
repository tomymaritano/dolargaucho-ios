import { IonList, IonItem, IonLabel } from '@ionic/react';
import { useEffect, useState } from 'react';
import { getCotizaciones } from '../services/DolarApi';
import './Cotizaciones.css';

const Cotizaciones: React.FC = () => {
  const [cotizaciones, setCotizaciones] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCotizaciones();
      setCotizaciones(data);
    };
    fetchData();
  }, []);

  return (
    <div className="cotizaciones-section">
      <IonList>
        {cotizaciones.length ? (
          cotizaciones.map((cotizacion) => (
            <IonItem key={cotizacion.nombre} className="cotizacion-item">
              <IonLabel className="cotizacion-label">
                {cotizacion.nombre}: 
                <span className="compra"> Compra: {cotizacion.compra}</span>
                <span className="venta"> - Venta: {cotizacion.venta}</span>
              </IonLabel>
            </IonItem>
          ))
        ) : (
          <IonLabel>Cargando cotizaciones...</IonLabel>
        )}
      </IonList>
    </div>
  );
};

export default Cotizaciones;

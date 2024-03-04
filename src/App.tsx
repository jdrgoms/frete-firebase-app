import { IonApp, setupIonicReact } from "@ionic/react";
import Home from "./pages/Home";

import "./theme/globals";

setupIonicReact();

export default function App() {
  return (
    <IonApp>
      <Home />
    </IonApp>
  );
}

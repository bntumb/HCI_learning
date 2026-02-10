// App.js
import { ContainerContextProvider } from "./store/container-context";
import ScrollBarArea from "./HorizontalScrollContent"
export default function App() {
  return (
    <ContainerContextProvider>
      <ScrollBarArea />
    </ContainerContextProvider>
  );
}

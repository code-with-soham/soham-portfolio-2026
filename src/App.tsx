import { lazy, Suspense, useState, useEffect } from "react";
import "./App.css";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
import { LoadingProvider } from "./context/LoadingProvider";

const App = () => {
  // Defer character mount until after first paint + idle time
  const [showCharacter, setShowCharacter] = useState(false);

  useEffect(() => {
    // Wait for the main content to render and paint first,
    // then mount the 3D character after the browser is idle
    const timer = requestIdleCallback(
      () => setShowCharacter(true),
      { timeout: 3000 }
    );
    return () => cancelIdleCallback(timer);
  }, []);

  return (
    <>
      <LoadingProvider>
        <Suspense>
          <MainContainer>
            {showCharacter && (
              <Suspense>
                <CharacterModel />
              </Suspense>
            )}
          </MainContainer>
        </Suspense>
      </LoadingProvider>
    </>
  );
};

export default App;

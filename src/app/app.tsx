import { CounterProvider } from "./counter-provider";
import { Layout } from "./layout";
import { CounterOutput } from "./counter-output";
import { CounterActions } from "./counter-actions";

function App() {
  return (
    <CounterProvider>
      <Layout>
        <CounterOutput />
        <CounterActions />
      </Layout>
    </CounterProvider>
  );
}

export { App };

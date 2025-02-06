import "./App.css";
import { Button } from "./components/ui/button";
import { Accordion, AccordionContent, AccordionTrigger, AccordionItem } from "./components/ui/accordion";

function App() {
  return (
    <main>
      <h1>Hello World</h1>
      <Button>Hello</Button>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
}

export default App;

import React, { useState, memo } from "react";
import Container from "react-bootstrap/Container";

const Hija = memo(({ value }) => {
 console.log("mi value es", value);
 return <>🦄</>;
});

export default function App() {
 const [num, setNum] = useState(0);
 const [string] = useState("pepe");

 console.log("muestrame a tu madre");

 return (
  <Container className="mt-4">
   <h1 className="mb-4">Memo</h1>
   <Hija />
   <Hija value={7} />
   <Hija value={num} />
   <Hija value={string} />
   <Hija value={{ item: 4 }} />
   <hr />
   <button onClick={() => setNum((prev) => prev + 1)}>Actualizar</button>
  </Container>
 );
}

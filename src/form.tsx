import React, { useState } from 'react';

export default function Form() {
  const [x, setX] = useState<number>(1);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h1>Report Card App</h1>
      <p>{x}</p>
      <button onClick={() => setX((x) => x + 1)}>Add</button>
    </form>
  )
}

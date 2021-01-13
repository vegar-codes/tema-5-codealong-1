import React, { useState } from 'react';

function HomeContainer() {
  const [url, setUrl] = useState('');
  const [responseData, setResponseData] = useState(null);
  const [responseCode, setResponseCode] = useState(null);
  const [responseText, setResponseText] = useState(null);

  function handleInput(event) {
    setUrl(event.target.value);
  }

  function handleClick(event) {
    event.preventDefault();
    fetch(url)
      .then(response => {
        setResponseCode(response.status);
        setResponseText(response.statusText);

        return response.json();
      })
      .then(data => {
        console.log(data);
        setResponseData(data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <main>
      <form name="test-url-form" action="/" method="GET">
        <label htmlFor="url">URL</label><br />
        <input type="text" name="url" id="url" placeholder="Skriv inn URLen du vil teste" onChange={event => handleInput(event)} />
        <button type="submit" onClick={event => handleClick(event)}>Test</button>
      </form>
      <p>{responseCode} {responseText}</p>
      <pre><code>{JSON.stringify(responseData, null, 2)}</code></pre>
    </main>
  );
}

export default HomeContainer;
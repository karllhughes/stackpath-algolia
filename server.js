const express = require('express');
const port = process.env.PORT || 80;
const algolia = require('algoliasearch');
const client = algolia(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_APP_KEY);

app = express();
app.listen(port);

Date.prototype.addHours = function(h) {
  this.setTime(this.getTime() + (h*60*60*1000));
  return this;
};

app.get('/key', (req, res) => {
  // Normally you would process user authentication here

  // Set to expire in 1 hour
  const expirationTime = new Date().addHours(1).getTime();

  // Create a temporary public key
  const publicKey = client.generateSecuredApiKey(
    process.env.ALGOLIA_SECRET,
    {
      filters: `discipline:physics`,
      validUntil: expirationTime,
    }
  );

  res.json({
    publicKey,
    expirationTime,
  });
});

console.log(`Listening on ${port}`);

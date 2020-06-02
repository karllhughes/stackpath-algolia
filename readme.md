# Stackpath + Algolia

This Node Express app demonstrates using StackPath to generate a private Algolia key on the edge rather than using a traditional server-side Node app. 

## Running this app locally
- Set up an Algolia index using [this CSV file of Nobel Prize Winners](https://github.com/OpenRefine/OpenRefine/blob/master/main/tests/data/nobel-prize-winners.csv)
- Build the Docker image: `docker build -t <YOUR_USERNAME>/stackpath-algolia .`
- Run the container with your Algolia credentials: `docker run --rm -p 8000:80 -e ALGOLIA_APP_ID=GLM061KW6N -e ALGOLIA_APP_KEY=4929bac668ec5858c24ca89e6e176321 -e ALGOLIA_SECRET=d41be0442b015dd57efa4e7c555172c0 -d <YOUR_USERNAME>/stackpath-algolia`


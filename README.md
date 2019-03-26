

# **Prerequisites**

> Docker Engine release 17.06.0+ for 2.3 Compose file format support: https://www.docker.com/products/docker-desktop

> Latest LTS version of Node: https://nodejs.org/en/download/

# **Running the Service Locally**
The service can be run locally as a node service or within the Docker container.

## **Running Locally as a Node Service**

Running the node service requires the PORT to be passed as a environment variable:
```
PORT={PORT_NUMBER} npm start
or
PORT={PORT_NUMBER} node src/server.js 
```

## **Running Locally within a Docker Container**
To start the container, run the following command. 
```
docker-compose up
```
You will probably want to include `-d` flag to run the container in the background or it will run as a foreground process in the terminal window.
```
docker-compose up -d
```
The health-check endpoint can be seen on http://localhost:8000/healthz

See [docs](https://docs.docker.com/compose/reference/up/) for more information on flags.

To stop the container, run the following command:
```
docker-compose down
```
## **Running Unit Tests**
Run the following command:
```
npm test
```



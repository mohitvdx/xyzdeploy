### Setting Up the Project

1. **Install Dependencies**: Run `npm install` to install all project dependencies.
2. **Run Postgres**: You can run Postgres either locally or on the cloud. 
3. For this project, I'm using Aiven Postgres.
   
    If you're setting up the DB using Docker, use the following command:
```jsx
docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
```
1. **Environment Variables**: Copy all `.env.example` files to `.env` and update the `.env` files everywhere with the correct DB URL.
2. **Database Setup**:
    - Go to `packages/db` and run:
        - `npx prisma migrate dev` to migrate the database.
        - `npx prisma db seed` to seed the database.
3. **Start the User App**: Go to `apps/user-app` and run `npm run dev` to start the user app.
4. **Login Credentials**: Try logging in using phone number `1111111111` and password `alice` (as specified in `seed.ts`).

### Docker Setup

1. **Login to Docker Hub**: Run `docker login` to login to Docker Hub from your CLI.
2. **Build Docker Image**: Use the following command to generate the Docker image from `docker/Dockerfile.user`:
```
docker build -t xyz -f docker/Dockerfile.user .
```
3. **List Docker Images**: Use `docker images` command to see all your Docker images locally.
4. **Run Docker Container**: Use the following command to run a container application from the above Docker image:
```
docker run -d --name xyz-app-container -p 3000:3000 xyz
```
5. **Push Docker Image**: Use the following commands to push the image to Docker Hub:

    ```
    docker tag xyz:latest mohitvermaexe/xyz:latest 
    ```

    ```
    docker push mohitvermaexe/xyz:latest   
    ```

Remember to replace `xyz` with your Docker image name in the above commands, replace 'mohitvermaexe' with your username on Dockerhub.

### Accessing the Postgres Database using psql

1. **Install psql**: Use the following command to install psql:
    ```sh
    brew install psql
    ```

2. **Access the Database**: Use the following command to access the database:
    ```sh
    psql "yourconnectionstring"
    ```

3. **View Tables**:
    - To see all tables, use:
        ```sh
        \dt
        ```
    - To see all tables with their data, use:
        ```sh
        \dt+
        ```

4. **View Data of a Particular Table**: Use the following SQL command to see data of a particular table:
    ```sql
    SELECT * FROM "table_name";
    ```

Use `Ctrl+D` to exit the SSH session.

To access the EC2 server:

1. Create the EC2 server and download the key pair file.
2. SSH into your EC2 instance using the following command:

  ```sh
ssh -i /path/to/your-keypair.pem ubuntu@your-ec2-instance.compute.amazonaws.com
```
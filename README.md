# DelDia - project

This is a webb application which uses Angular and Tailwind for the frontend, ASP.NET Core Web API for the backend, and MySQL in a Docker container for the database.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
   - [Frontend Setup](#frontend-setup)
   - [Backend Setup](#backend-setup)
   - [Database Setup](#database-setup)
3. [Running the Project](#running-the-project)
   - [Running the Frontend](#running-the-frontend)
   - [Running the Backend](#running-the-backend)
4. [Connect database to DBeaver](#connect-database-to-dbeaver)

## Prerequisites

Ensure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/) (LTS version 20.x or later)
- [Angular CLI](https://angular.io/cli) (version 17.x or later)
- [.NET Core SDK](https://dotnet.microsoft.com/download/dotnet) (version 8.x or later)
- [.NET Core CLI](https://learn.microsoft.com/en-us/ef/core/cli/dotnet) (version 8.x or later)
- [Docker](https://www.docker.com/get-started) (latest version)

## Installation

#### Frontend Setup

1. Clone the repository

2. Navigate to the frontend project directory:

   ```sh
   cd Client
   ```

3. Install the Angular dependencies:
   ```sh
   npm install
   ```

#### Backend Setup

**For VSCode:**

1. Navigate to the backend project directory:

   ```sh
   cd Server
   ```

2. Restore the .NET Core dependencies:
   ```sh
   dotnet restore
   ```

**For Visual Studio:**

1. Open the _Server.sln_ file

#### Database Setup

1. Ensure Docker is running on your machine.

2. In a new terminal run:

   ```sh
   docker run --name test-mysql -e MYSQL_ROOT_PASSWORD=root -d -p 3306:3306 mysql:latest
   ```

   (NOTE: _This project uses MySQL Docker image version 8.2.0 (see Server/Program.cs_)

3. **To run the migration to DB**: In the backend project (Server) directory run:
   ```sh
   dotnet ef database update
   ```

## Running the Project

#### Running the Frontend

1. Navigate to the frontend directory (Client folder) and start the Angular development server:

   ```sh
   ng serve
   ```

2. In browser navigate to **[http://localhost:4200](http://localhost:4200/)**

#### Running the Backend

1. **In VSCode:** Navigate to the backend directory (Server) and run the .NET Core application:

   ```sh
   dotnet run
   ```

   **In Visual Studio:** _F5 _(Start Debugging) or _Ctrl+F5_ (Start Without Debugging).

2. Access the Swagger interface for the backend API: **[http://localhost:5233/swagger/index.html](http://localhost:5233/swagger/index.html)**

## Connect database to DBeaver

1. Open DBeaver (or a similar database management tool)

2. Create a new connection

   - Click on the New Database Connection button (or navigate to Database > New Database Connection).

   - Select MySQL from the list of database types and click Next.

3. Configure Connection Settings:

- **Host:** localhost
- **Port:** 3306
- **Database:** DeldiaAPIDB
- **Username:** root
- **Password:** root

If there is a connection problem regarding public key:

- In _Edit Connection_
- Click on tab _Driver Properties_
- Click _Add user property_ (small icon with a plus)
- Write _allowPublicKeyRetrieval_ and then OK
- Change value to _true_ and then OK

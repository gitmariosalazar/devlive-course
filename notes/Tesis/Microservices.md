# Create a microservices
- ### Install Nest.js CLI
```bash
npm install -g @nestjs/cli
# Check version
nest --version
```
- ### Create a new project
```bash
nest new project-name
cd project-name
code .
npm run start
```
- ### Test on postman
http://localhost:3000
- ### Update the library's on `package.json`
```bash
ncu -c
ncu
npm install
```
- ### Libraries
```bash
npm install --save @types/morgan morgan
npm install --save @types/nodemon nodemon
npm install dotenv joi
npm install mysql12
npm install @nestjs/swagger swagger-ui-express
npm i @nestjs/typeorm typeorm
```
- ### Environments Variables
```env
DATABASE_PROVIDER=mysql
DATABASE_PORT=3306
DATABASE_USERNAME=mario
DATABASE_NAME=plus
DATABASE_PASSWORD=password-mario
DATABASE_HOSTNAME=127.0.0.1
MONGODB_URI=mongodb+srv://mariosalazar10utn:1001590650ANDmar10@cluster0.iftvxqz.mongodb.net/plus
DATABASE_URL="postgres://default:hlf7QOiuv5aF@ep-holy-unit-a41he1eg-pooler.us-east-1.aws.neon.tech/mshexagonal?pgbouncer=true&connect_timeout=15&sslmode=require"
```

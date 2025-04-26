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
npm run start:dev
```
- ### Test on postman
http://localhost:3000
- ### Test on Swagger Document
http://localhost:3000/api
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
npm install mysql2
npm install @nestjs/swagger swagger-ui-express
npm i @nestjs/typeorm typeorm
npm i class-validator class-transformer
npm i @nestjs/jwt                                                                        
npm i -D @types/bcrypt                                                                   
npm i bcrypt
npm install --save @nestjs/bull bull ioredis bull-board
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
- ### Configure Prisma 
```bash
npm install prisma --save-dev
npm install @prisma/client
```
* ### Initialize prisma
```bash
npx prisma init
```
- ### Move the prisma folder to `./src/shared/prisma`
- #### Migrate database
```bash
npx prisma migrate dev --name init --schema=./src/shared/prisma/schema.prisma
```
- #### Update database structure without loss data 
```bash
npx prisma db push --schema=./src/shared/prisma/schema.prisma
npx prisma migrate dev --name init --schema=./src/shared/prisma/schema.prisma

```
- #### Run `file.sql` MySQL
```bash
Get-Content "C:\Users\Mario Salazar\Downloads\hexagonaback.sql" | mysql -u mario -p hexagonal
mysqldump -u mario -p plus < "C:\Users\Mario Salazar\Downloads\hexagonaback.sql"
```
- #### Backup
```bash
mysqldump -u mario -p hexagonal > C:\backups\hexagonal_backup.sql
mysqldump -u usuario -p --databases base1 base2 base3 > backup_multiple.sql
mysqldump -u usuario -p --no-data nombre_base_de_datos > estructura_backup.sql
mysqldump -u mario -p plus > "C:\Users\Mario Salazar\Downloads\plus.sql"
```
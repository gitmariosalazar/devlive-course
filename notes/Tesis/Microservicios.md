```
📂backend
  │──📂auth-micro-services/    // Microservice auth is running on port https://192.159.12.5:4000
  │    ├─📂src/
  │    │   ├──📂errors/              
  │    │   ├──📂modules/
  │    │   │   ├──📂authentication/
  │    │   │   │   ├──📂application/
  │    │   │   │   ├──📂domain/
  │    │   │   │   └──📂infrastructure/
  │    │   │   └──📂users/
  │    │   │       ├──📂application/...
  │    │   │       ├──📂domain/...
  │    │   │       └──📂infrastructure/..
  │    │   ├──📂settings/
  │    │   │   ├──📜envs.ts
  │    │   │   └──📜index.ts
  │    │   ├──📂shared/
  │    │   │    ├──📂database/
  │    │   │    │   ├──📜mysql.service.ts
  │    │   │    │   ├──📜postgres.service.ts
  │    │   │    │   └──📜add-others.ts
  │    │   │    ├──📂prisma/
  │    │   │    │   ├──📂migrations/
  │    │   │    │   ├──📜prisma.service.ts
  │    │   │    │   └── ▲ schema.prisma
  │    │   │    └──📂typeorm/
  │    │   │        └──📜typeorm.database.ts
  │    │   │───📜app.module.ts
  │    │   │───📜main.ts
  │    │   └───📂test/
  │    └───.env
  │──📂cart-microservice/      // Microservice cart is running on port https://192.159.17.10:3000
  │    ├─📂src/
  │    │   ├──📂errors/              
  │    │   ├──📂modules/
  │    │   │   ├──📂products/
  │    │   │   │   ├──📂application/
  │    │   │   │   ├──📂domain/
  │    │   │   │   └──📂infrastructure/
  │    │   │   └──📂cart/
  │    │   │       ├──📂application/...
  │    │   │       ├──📂domain/...
  │    │   │       └──📂infrastructure/..
  │    │   ├──📂settings/
  │    │   │   ├──📜envs.ts
  │    │   │   └──📜index.ts
  │    │   ├──📂shared/
  │    │   │    ├──📂database/
  │    │   │    │   ├──📜mysql.service.ts
  │    │   │    │   ├──📜postgres.service.ts
  │    │   │    │   └──📜add-others.ts
  │    │   │    ├──📂prisma/
  │    │   │    │   ├──📂migrations/
  │    │   │    │   ├──📜prisma.service.ts
  │    │   │    │   └── ▲ schema.prisma
  │    │   │    └──📂typeorm/
  │    │   │        └──📜typeorm.database.ts
  │    │   │───📜app.module.ts
  │    │   │───📜main.ts
  │    │   └───📂test/
  │    └───.env
  └──📂api-gateway/      // Microservice API GATEWAY is running on port https://172.180.10.15:3000
       ├─📂src/
       │   ├──📂errors/              
       │   ├──📂modules/
       │   │   ├──📂products/
       │   │   │   ├──📂application/
       │   │   │   ├──📂domain/
       │   │   │   └──📂infrastructure/
       │   │   └──📂cart/
       │   │       ├──📂application/...
       │   │       ├──📂domain/...
       │   │       └──📂infrastructure/..
       │   ├──📂settings/
       │   │   ├──📜envs.ts
       │   │   └──📜index.ts
       │   │───📜app.module.ts
       │   │───📜main.ts
       │   └───📂test/
       └───.env
```
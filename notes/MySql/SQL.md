## Create Table
```sql
create table users(
UserId integer not null auto_increment,
Name varchar(100) not null,
Email varchar(100) not null unique,
RegisterDate datetime default now(),
constraint pk_users primary key(UserId)
);

create table Comments(
CommentId integer not null auto_increment,
PostId integer not null,
UserId integer not null,
Content varchar(255),
CommentDate datetime default now(),
constraint pk_comments primary key(CommentId)
);

create table Post(
PostId integer not null auto_increment,
Title varchar(50) not null,
Content varchar(100),
PostDate datetime default now(),
constraint pk_post primary key(PostId)
);
```
## Add `Foreign Key`

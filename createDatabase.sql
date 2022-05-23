create database teamfour;

use teamfour;

create table user(
	id varchar(30) primary key,
    pw varchar(30)
);

create table category(
	category_num int primary key,
	category_name varchar(30)
); 

create table user_category_binding(
	id varchar(30),
    category_num int,
    foreign key(id) references user(id) on update cascade,
    foreign key(category_num) references category(category_num)
	primary key(id, category_num)
);

create table post(
	post_num int primary key,
    post_title varchar(30),
    post_content longtext,
    post_image text,
    post_author varchar(30),
	post_category_num int 
);


create table image(
   post_image text,
   images_path text
);


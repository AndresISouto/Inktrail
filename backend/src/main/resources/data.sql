INSERT INTO books(isbn,book_title,book_author,price,stock,year_of_publication,publisher,image_urls,image_urlm,image_urll) VALUES
("1JKL","sf","sadf",1,1,1,"1","1","1","1"),
("1JKLdsf","sf","sadf",1,1,1,"1","1","1","1"),
("2024","sf","sadf",1,1,1,"1","1","1","1"),
("3hjhjh","sf","sadf",1,1,1,"1","1","1","1"),
("3","sf","sadf",1,1,1,"1","1","1","1"),
("45","sf","sadf",1,1,1,"1","1","1","1"),
("43","sf","sadf",1,1,1,"1","1","1","1"),
("2345","sf","sadf",1,1,1,"1","1","1","1"),
("dgsvdvsgdf","sf","sadf",1,1,1,"1","1","1","1"),
("fsadfc","sf","sadf",1,1,1,"1","1","1","1"),
("fasldchnl","sf","sadf",1,1,1,"1","1","1","1"),
("fasdlcewcsr","sf","sadf",1,1,1,"1","1","1","1"),
("fsadjrmvalcfds","sf","sadf",1,1,1,"1","1","1","1"),
("fsca","sf","sadf",1,1,1,"1","1","1","1"),
("fihhlh","sf","sadf",1,1,1,"1","1","1","1"),
("etwot","sf","sadf",1,1,1,"1","1","1","1"),
("yuri","sf","sadf",1,1,1,"1","1","1","1"),
("yiuyoi","sf","sadf",1,1,1,"1","1","1","1"),
("643564364","sf","sadf",1,1,1,"1","1","1","1"),
("2344","sf","sadf",1,1,1,"1","1","1","1");

INSERT INTO users(email,password,full_name) VALUES
("user@example.com","$2a$10$N.zmdr9k7uOCQb376NoUnuTJ8iAt6Z5EHsM8lE9lBOsl7iKTVEFDa","John Doe");

INSERT INTO user_roles(user_id,role) VALUES
(1,'USER');

INSERT INTO orders(user_id,order_date,status) VALUES
(1,'2024-01-15','PENDING');

INSERT INTO order_item(order_id,book_id,quantity,price_at_time) VALUES
(1,1,2,1.0);

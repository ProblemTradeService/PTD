ALTER TABLE Problem ALTER COLUMN id RESTART WITH 13;

INSERT INTO Problem (id,level,price,owner,category,plaglevel,status) VALUES (1,4,50000,'kim','수열의 극한','매우 낮음','판매중');
INSERT INTO Problem (id,level,price,owner,category,plaglevel,status) VALUES (2,2,100000,'kim','미분의 정의','높음','보유중');
INSERT INTO Problem (id,level,price,owner,category,plaglevel,status) VALUES (3,5,70000,'lee','적분의 정의','낮음','판매중');
INSERT INTO Problem (id,level,price,owner,category,plaglevel,status) VALUES (4,4,20000,'kim','기하와 벡터','높음','판매중');
INSERT INTO Problem (id,level,price,owner,category,plaglevel,status) VALUES (5,3,30000,'lee','수열의 극한','매우 높음','보유중');
INSERT INTO Problem (id,level,price,owner,category,plaglevel,status) VALUES (6,1,20500,'kim','함수의 연속','보통','판매중');
INSERT INTO Problem (id,level,price,owner,category,plaglevel,status) VALUES (7,2,20400,'kim','미적분의 기본정리','매우 낮음','보유중');
INSERT INTO Problem (id,level,price,owner,category,plaglevel,status) VALUES (8,4,26000,'lee','삼각함수의 연속','높음','판매중');
INSERT INTO Problem (id,level,price,owner,category,plaglevel,status) VALUES (9,5,50000,'lee','삼각함수','매우 높음','판매중');
INSERT INTO Problem (id,level,price,owner,category,plaglevel,status) VALUES (10,3,70000,'lee','속도와 가속도','매우 높음','판매중');
INSERT INTO Problem (id,level,price,owner,category,plaglevel,status) VALUES (11,5,60000,'kim','삼각함수','매우 낮음','보유중');
INSERT INTO Problem (id,level,price,owner,category,plaglevel,status) VALUES (12,3,80000,'kim','속도와 가속도','보통','판매중');

INSERT INTO Problem_Similar_List (pid1, pid2, similarity, plagiarize) VALUES (1,1,'매우 높음','매우 낮음');
INSERT INTO Problem_Similar_List (pid1, pid2, similarity, plagiarize) VALUES (2,1,'보통','높음');
INSERT INTO Problem_Similar_List (pid1, pid2, similarity, plagiarize) VALUES (2,2,'매우 높음','매우 낮음');
INSERT INTO Problem_Similar_List (pid1, pid2, similarity, plagiarize) VALUES (3,1,'매우 높음','매우 낮음');
INSERT INTO Problem_Similar_List (pid1, pid2, similarity, plagiarize) VALUES (3,2,'보통','낮음');
INSERT INTO Problem_Similar_List (pid1, pid2, similarity, plagiarize) VALUES (3,3,'매우 높음','매우 낮음');
INSERT INTO Problem_Similar_List (pid1, pid2, similarity, plagiarize) VALUES (4,1,'매우 낮음','높음');
INSERT INTO Problem_Similar_List (pid1, pid2, similarity, plagiarize) VALUES (4,2,'매우 높음','높음');
INSERT INTO Problem_Similar_List (pid1, pid2, similarity, plagiarize) VALUES (4,3,'매우 낮음','매우 낮음');
INSERT INTO Problem_Similar_List (pid1, pid2, similarity, plagiarize) VALUES (4,4,'매우 높음','매우 낮음');



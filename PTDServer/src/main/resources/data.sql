ALTER TABLE Problem ALTER COLUMN id RESTART WITH 13;

INSERT INTO Problem (id,level,price,owner,category,plaglevel) VALUES (1,4,50000,'kim','수열의 극한','매우 낮음');
INSERT INTO Problem (id,level,price,owner,category,plaglevel) VALUES (2,2,100000,'choi','미분의 정의','높음');
INSERT INTO Problem (id,level,price,owner,category,plaglevel) VALUES (3,5,70000,'Lee','적분의 정의','낮음');
INSERT INTO Problem (id,level,price,owner,category,plaglevel) VALUES (4,4,20000,'kim','기하와 벡터','높음');
INSERT INTO Problem (id,level,price,owner,category,plaglevel) VALUES (5,3,30000,'dong','수열의 극한','매우 높음');
INSERT INTO Problem (id,level,price,owner,category,plaglevel) VALUES (6,1,20500,'mun','함수의 연속','보통');
INSERT INTO Problem (id,level,price,owner,category,plaglevel) VALUES (7,2,20400,'jung','미적분의 기본정리','매우 낮음');
INSERT INTO Problem (id,level,price,owner,category,plaglevel) VALUES (8,4,26000,'kwang','삼각함수의 연속','높음');
INSERT INTO Problem (id,level,price,owner,category,plaglevel) VALUES (9,5,50000,'do','수열의 극한','매우 높음');
INSERT INTO Problem (id,level,price,owner,category,plaglevel) VALUES (10,3,70000,'oh','속도와 가속도','매우 높음');
INSERT INTO Problem (id,level,price,owner,category,plaglevel) VALUES (11,5,60000,'ku','수열의 극한','매우 낮음');
INSERT INTO Problem (id,level,price,owner,category,plaglevel) VALUES (12,3,80000,'koko','속도와 가속도','보통');

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



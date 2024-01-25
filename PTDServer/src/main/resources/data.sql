ALTER TABLE Problem ALTER COLUMN id RESTART WITH 6;

INSERT INTO Problem (id,level,price,owner,category,plaglevel, status) VALUES (1,3,50000,'kim','이차곡선','[매우 낮음]','판매중');
INSERT INTO Problem (id,level,price,owner,category,plaglevel, status) VALUES (2,2,100000,'kim','도함수의 활용(1)','[매우 낮음]','판매중');
INSERT INTO Problem (id,level,price,owner,category,plaglevel, status) VALUES (3,5,70000,'lee','이차곡선','[매우 높음]','판매중');
INSERT INTO Problem (id,level,price,owner,category,plaglevel, status) VALUES (4,4,20000,'kim','도함수의 활용(1)','[매우 낮음]','판매중');
INSERT INTO Problem (id,level,price,owner,category,plaglevel, status) VALUES (5,3,30000,'choi','도함수의 활용(1)','[높음]','판매중');
-- INSERT INTO Problem (id,level,price,owner,category,plaglevel, status) VALUES (6,1,20500,'mun','함수의 연속','보통','판매중');
-- INSERT INTO Problem (id,level,price,owner,category,plaglevel, status) VALUES (7,2,20400,'jung','미적분의 기본정리','매우 낮음','판매중');
-- INSERT INTO Problem (id,level,price,owner,category,plaglevel, status) VALUES (8,4,26000,'kwang','삼각함수의 연속','높음','판매중');
-- INSERT INTO Problem (id,level,price,owner,category,plaglevel, status) VALUES (9,5,50000,'do','수열의 극한','매우 높음','판매중');
-- INSERT INTO Problem (id,level,price,owner,category,plaglevel, status) VALUES (10,3,70000,'oh','속도와 가속도','매우 높음','판매중');
-- INSERT INTO Problem (id,level,price,owner,category,plaglevel, status) VALUES (11,5,60000,'ku','수열의 극한','매우 낮음','보유중');
-- INSERT INTO Problem (id,level,price,owner,category,plaglevel, status) VALUES (12,3,80000,'koko','속도와 가속도','보통','보유중');

INSERT INTO User_Balance (id, username, balance) VALUES (1,'kim',150000);
INSERT INTO User_Balance (id, username, balance) VALUES (2,'park',150000);
INSERT INTO User_Balance (id, username, balance) VALUES (3,'lee',300000);
INSERT INTO User_Balance (id, username, balance) VALUES (4,'choi',250000);
--
INSERT INTO Problem_Similar_List (pid1, pid2, similarity, plagiarize) VALUES (2,1,null,'[매우 낮음]');
INSERT INTO Problem_Similar_List (pid1, pid2, similarity, plagiarize) VALUES (3,1,'[낮음]','[매우 높음]');
INSERT INTO Problem_Similar_List (pid1, pid2, similarity, plagiarize) VALUES (3,2,null,'[매우 낮음]');
INSERT INTO Problem_Similar_List (pid1, pid2, similarity, plagiarize) VALUES (4,1,null,'[매우 낮음]');
INSERT INTO Problem_Similar_List (pid1, pid2, similarity, plagiarize) VALUES (4,2,'[높음]','[매우 낮음]');
INSERT INTO Problem_Similar_List (pid1, pid2, similarity, plagiarize) VALUES (4,3,null,'[매우 낮음]');
INSERT INTO Problem_Similar_List (pid1, pid2, similarity, plagiarize) VALUES (5,1,null,'[매우 낮음]');
INSERT INTO Problem_Similar_List (pid1, pid2, similarity, plagiarize) VALUES (5,2,'[높음]','[매우 낮음]');
INSERT INTO Problem_Similar_List (pid1, pid2, similarity, plagiarize) VALUES (5,3,null,'[매우 낮음]');
INSERT INTO Problem_Similar_List (pid1, pid2, similarity, plagiarize) VALUES (5,4,'[높음]','[높음]');




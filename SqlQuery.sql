CREATE DATABASE FareCompare;

CREATE TABLE PRICECOMPARE
(
	id integer primary key,
	airlinename nvarchar(50),
	airlineclass nvarchar(50),
	fare integer
)
GO

INSERT INTO PRICECOMPARE VALUES (1, 'Quantas Airlines', 'Firstclass', 200)
INSERT INTO PRICECOMPARE VALUES (2, 'Quantas Airlines', 'Economyclass', 300)
INSERT INTO PRICECOMPARE VALUES (3, 'Quantas Airlines', 'Businessclass', 400)
INSERT INTO PRICECOMPARE VALUES (4, 'Virgin Money', 'Firstclass', 200)
INSERT INTO PRICECOMPARE VALUES (5, 'Virgin Money', 'Economyclass', 300)
INSERT INTO PRICECOMPARE VALUES (6, 'Virgin Money', 'Businessclass', 400)
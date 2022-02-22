CREATE TABLE "gallery" (
	"id" SERIAL PRIMARY KEY,
	"path" VARCHAR (250) NOT NULL,
	"description" VARCHAR (80) NOT NULL,
	"likes" INTEGER
	);
	
INSERT INTO "gallery" ("path","description","likes")
VALUES 
('images/goat_small.jpg','Photo of a goat taken at Glacier National Park',0),
('images/mee.jpeg','Looking Good', 0),
('images/cutie.jpeg','Miss Cute',2),
('images/jenny.jpeg','BLACK PINK IN YO AREA',4);

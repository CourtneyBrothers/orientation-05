-- Query all of the entries in the Genre table
SELECT * FROM Genre

-- Using the INSERT statement, add one of your favorite artists to the Artist table.
INSERT INTO Artist (
ArtistId,
 ArtistName,
 YearEstablished

)
VALUES
 (
 '90000',
 'Elvis Presley',
 '1935'
 );
 
 
-- Using the INSERT statement, add one, or more, albums by your artist to the Album table.

 INSERT INTO "Album" ( "Title", "ReleaseDate", "AlbumLength", "Label", "ArtistId", "GenreId")
 VALUES ("The final cut", "1983", 4645, "Columbia", "31", "2");

-- Using the INSERT statement, add some songs that are on that album to the Song table.
INSERT INTO "Song" ("SongId", "Title", "SongLength", "ReleaseDate", "GenreId", "ArtistId", "AlbumId")
 VALUES ("330303", "Hypnotized", "2", "2018", "HipHop", "4", "13213");

-- Write a SELECT query that provides the song titles, album title, and artist name for all of the data you just entered in. Use the LEFT JOIN keyword sequence to connect the tables, and the WHERE keyword to filter the results to the album and artist you added. Here is some more info on joins that might help.
INSERT INTO Song
SELECT null, "Second Sight", 5768, 1986, g.GenreId, ar.ArtistId, al.AlbumId
FROM Artist ar, Genre g, Album al
WHERE ar.ArtistName = "The Model Citizens"
and g.Label = "Rock"
and al.Title = "Georgetown Station"	

-- Write a SELECT statement to display how many songs exist for each album. You'll need to use the COUNT() function and the GROUP BY keyword sequence.
SELECT COUNT(song.SongId) "song count",album.title  Album
FROM song
Join album
on song.albumid = album.albumid
Group By album.Title
 

-- Write a SELECT statement to display how many songs exist for each artist. You'll need to use the COUNT() function and the GROUP BY keyword sequence.
SELECT COUNT(song.SongId) "song count",artist.ArtistName Name
FROM song
Join artist
on song.artistId = artist.artistid
Group By artist.ArtistName
 

-- Write a SELECT statement to display how many songs exist for each genre. You'll need to use the COUNT() function and the GROUP BY keyword sequence.
SELECT COUNT(song.genreId) "song count",genre.Label Genre
FROM song
Join Genre
on song.genreId = genre.genreId
Group By genre.label
 

-- Using MAX() function, write a select statement to find the album with the longest duration. The result should display the album title and the duration.
SELECT
 MAX(AlbumLength), Album.Title
FROM
 Album;

-- Using MAX() function, write a select statement to find the song with the longest duration. The result should display the song title and the duration.

SELECT
 MAX(SongLength), Song.Title
FROM
 Song;

-- Modify the previous query to also display the title of the album.
SELECT
 MAX(SongLength), Song.Title as Song, Album.Title as Album
FROM
 Song JOIN Album 
 ON Album.AlbumId = song.AlbumId;

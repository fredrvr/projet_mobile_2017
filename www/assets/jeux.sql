CREATE TABLE IF NOT EXISTS `Console` ( `idConsole` INTEGER NOT NULL, `nomCategorie` TEXT, PRIMARY KEY(`idConsole`) );
CREATE TABLE IF NOT EXISTS `Jeux` ( `id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE, `Nom` TEXT, `Categorie` TEXT, `Editeur` TEXT, `Image` TEXT, `Date` TEXT, `Note` INTEGER, `Prix` INTEGER, `Console` INTEGER NOT NULL, `Vente` INTEGER, `Panier` INTEGER, FOREIGN KEY(`Console`) REFERENCES `Console`(`idConsole`) );
INSERT INTO `Console`  (`nomCategorie`) VALUES (\'Sport\');
INSERT INTO `Jeux` (`Nom`, `Categorie`, `Editeur`, `Image`, `Date`, `Note`, `Prix`,`Console`, `Vente`, `Panier`) VALUES ('Fifa 18', 'Sport', 'EA Sport', 'img/jaquette/fifa18_ps4.png', '2017-09-29', 16, 69,1,0,0);


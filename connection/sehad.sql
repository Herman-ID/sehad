-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 22 Nov 2018 pada 09.18
-- Versi Server: 10.1.10-MariaDB
-- PHP Version: 7.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sehad`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `jamu`
--

CREATE TABLE `jamu` (
  `id` int(11) NOT NULL,
  `nama` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `jamu`
--

INSERT INTO `jamu` (`id`, `nama`) VALUES
(1, 'Kunyit Asam'),
(2, 'Beras kencur'),
(3, 'Sinom'),
(4, 'Cabe Puyang'),
(5, 'Pahitan'),
(6, 'Uyup-Uyup'),
(7, 'Kunci sirih');

-- --------------------------------------------------------

--
-- Struktur dari tabel `jamu_komposisi`
--

CREATE TABLE `jamu_komposisi` (
  `jamu_id` int(11) NOT NULL,
  `tumbuhan_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `jamu_komposisi`
--

INSERT INTO `jamu_komposisi` (`jamu_id`, `tumbuhan_id`) VALUES
(1, 9),
(1, 2);

-- --------------------------------------------------------

--
-- Struktur dari tabel `jawaban`
--

CREATE TABLE `jawaban` (
  `pertanyaan_id` int(11) NOT NULL,
  `jawaban` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktur dari tabel `pertanyaan`
--

CREATE TABLE `pertanyaan` (
  `id` int(11) NOT NULL,
  `pertanyaan` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tumbuhan`
--

CREATE TABLE `tumbuhan` (
  `id` int(11) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `latin` varchar(100) NOT NULL,
  `ordo` varchar(45) NOT NULL,
  `famili` varchar(45) NOT NULL,
  `genus` varchar(45) NOT NULL,
  `spesies` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `tumbuhan`
--

INSERT INTO `tumbuhan` (`id`, `nama`, `latin`, `ordo`, `famili`, `genus`, `spesies`) VALUES
(1, 'Kumis Kucing', 'Orthosiphon Aristatus', 'Lamiales', 'Lamiaceae', 'Orthosiphon', 'O. Aristatus'),
(2, 'Lat Citrus aurantifolia', 'Jeruk Nipis', 'Sapindales', 'Rutaceae', 'Citrus', 'C. aurantifolia'),
(9, 'jahe', 'Zingiber officinale', 'Zingiberales', 'Zingiberaceae', 'Zingiber', ''),
(10, 'jahe', 'Zingiber officinale', 'Zingiberales', 'Zingiberaceae', 'Zingiber', ''),
(11, 'jahe 2', 'Zingiber officinale', 'Zingiberales', 'Zingiberaceae', 'Zingiber', ''),
(12, 'jahe 3', 'Zingiber officinale', 'Zingiberales', 'Zingiberaceae', 'Zingiber', ''),
(13, 'jahe 4', 'Zingiber officinale', 'Zingiberales', 'Zingiberaceae', 'Zingiber', ''),
(14, 'jahe 5', 'Zingiber officinale', 'Zingiberales', 'Zingiberaceae', 'Zingiber', ''),
(15, 'jahe 6', 'Zingiber officinale', 'Zingiberales', 'Zingiberaceae', 'Zingiber', ''),
(16, 'jahe 7', 'Zingiber officinale', 'Zingiberales', 'Zingiberaceae', 'Zingiber', ''),
(17, 'jahe 8', 'Zingiber officinale', 'Zingiberales', 'Zingiberaceae', 'Zingiber', ''),
(18, 'jahe 9', 'Zingiber officinale', 'Zingiberales', 'Zingiberaceae', 'Zingiber', ''),
(19, 'jahe 10', 'Zingiber officinale', 'Zingiberales', 'Zingiberaceae', 'Zingiber', ''),
(20, 'jahe 11', 'Zingiber officinale', 'Zingiberales', 'Zingiberaceae', 'Zingiber', ''),
(21, 'jahe 12', 'Zingiber officinale', 'Zingiberales', 'Zingiberaceae', 'Zingiber', ''),
(22, 'jahe 13', 'Zingiber officinale', 'Zingiberales', 'Zingiberaceae', 'Zingiber', ''),
(23, 'jahe 14', 'Zingiber officinale', 'Zingiberales', 'Zingiberaceae', 'Zingiber', '');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tumbuhan_link`
--

CREATE TABLE `tumbuhan_link` (
  `tumbuhan_id` int(11) NOT NULL,
  `wikipedia` mediumtext NOT NULL,
  `alodokter` mediumtext,
  `unsplash` mediumtext
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `tumbuhan_link`
--

INSERT INTO `tumbuhan_link` (`tumbuhan_id`, `wikipedia`, `alodokter`, `unsplash`) VALUES
(1, 'https://id.wikipedia.org/wiki/Kumis_kucing', NULL, NULL),
(2, 'https://id.wikipedia.org/wiki/Jeruk_nipis', NULL, NULL);

-- --------------------------------------------------------

--
-- Stand-in structure for view `v_jamu_komposisi`
--
CREATE TABLE `v_jamu_komposisi` (
`jamu_id` int(11)
,`tumbuhan_id` int(11)
,`nama` varchar(100)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `v_tumbuhan`
--
CREATE TABLE `v_tumbuhan` (
`id` int(11)
,`nama` varchar(100)
,`latin` varchar(100)
,`ordo` varchar(45)
,`famili` varchar(45)
,`genus` varchar(45)
,`spesies` varchar(45)
,`wikipedia` mediumtext
,`alodokter` mediumtext
,`unsplash` mediumtext
);

-- --------------------------------------------------------

--
-- Struktur untuk view `v_jamu_komposisi`
--
DROP TABLE IF EXISTS `v_jamu_komposisi`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_jamu_komposisi`  AS  select `a`.`jamu_id` AS `jamu_id`,`a`.`tumbuhan_id` AS `tumbuhan_id`,`b`.`nama` AS `nama` from (`jamu_komposisi` `a` left join `tumbuhan` `b` on((`a`.`tumbuhan_id` = `b`.`id`))) ;

-- --------------------------------------------------------

--
-- Struktur untuk view `v_tumbuhan`
--
DROP TABLE IF EXISTS `v_tumbuhan`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_tumbuhan`  AS  select `a`.`id` AS `id`,`a`.`nama` AS `nama`,`a`.`latin` AS `latin`,`a`.`ordo` AS `ordo`,`a`.`famili` AS `famili`,`a`.`genus` AS `genus`,`a`.`spesies` AS `spesies`,`b`.`wikipedia` AS `wikipedia`,`b`.`alodokter` AS `alodokter`,`b`.`unsplash` AS `unsplash` from (`tumbuhan` `a` left join `tumbuhan_link` `b` on((`a`.`id` = `b`.`tumbuhan_id`))) ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `jamu`
--
ALTER TABLE `jamu`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jamu_komposisi`
--
ALTER TABLE `jamu_komposisi`
  ADD KEY `fk_jamu_has_tumbuhan_tumbuhan1_idx` (`tumbuhan_id`),
  ADD KEY `fk_jamu_has_tumbuhan_jamu1_idx` (`jamu_id`);

--
-- Indexes for table `jawaban`
--
ALTER TABLE `jawaban`
  ADD PRIMARY KEY (`pertanyaan_id`);

--
-- Indexes for table `pertanyaan`
--
ALTER TABLE `pertanyaan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tumbuhan`
--
ALTER TABLE `tumbuhan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tumbuhan_link`
--
ALTER TABLE `tumbuhan_link`
  ADD PRIMARY KEY (`tumbuhan_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `jamu`
--
ALTER TABLE `jamu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `tumbuhan`
--
ALTER TABLE `tumbuhan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `jamu_komposisi`
--
ALTER TABLE `jamu_komposisi`
  ADD CONSTRAINT `fk_jamu_has_tumbuhan_jamu1` FOREIGN KEY (`jamu_id`) REFERENCES `jamu` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_jamu_has_tumbuhan_tumbuhan1` FOREIGN KEY (`tumbuhan_id`) REFERENCES `tumbuhan` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Ketidakleluasaan untuk tabel `jawaban`
--
ALTER TABLE `jawaban`
  ADD CONSTRAINT `fk_table1_pertanyaan1` FOREIGN KEY (`pertanyaan_id`) REFERENCES `pertanyaan` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Ketidakleluasaan untuk tabel `tumbuhan_link`
--
ALTER TABLE `tumbuhan_link`
  ADD CONSTRAINT `fk_tumbuhan_link_tumbuhan1` FOREIGN KEY (`tumbuhan_id`) REFERENCES `tumbuhan` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 28 Nov 2018 pada 02.31
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
  `tumbuhan_id` int(11) NOT NULL,
  `dosis` varchar(11) NOT NULL,
  `satuan` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
-- Struktur dari tabel `penyakit`
--

CREATE TABLE `penyakit` (
  `penyakit_id` mediumint(8) NOT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `keyword` mediumtext CHARACTER SET latin1
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `penyakit`
--

INSERT INTO `penyakit` (`penyakit_id`, `nama`, `keyword`) VALUES
(1, 'Pendarahan', 'Pendarahan ringan,mimisan,darah'),
(2, 'migrain', 'migran, pendarahan, mimisan');

-- --------------------------------------------------------

--
-- Struktur dari tabel `penyakit_obat`
--

CREATE TABLE `penyakit_obat` (
  `penyakit_obat_id` mediumint(8) NOT NULL,
  `penyakit_id` mediumint(8) NOT NULL,
  `tumbuhan_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `penyakit_obat`
--

INSERT INTO `penyakit_obat` (`penyakit_obat_id`, `penyakit_id`, `tumbuhan_id`) VALUES
(1, 1, 31);

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
  `spesies` varchar(45) NOT NULL,
  `keyword` mediumtext
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `tumbuhan`
--

INSERT INTO `tumbuhan` (`id`, `nama`, `latin`, `ordo`, `famili`, `genus`, `spesies`, `keyword`) VALUES
(25, 'Kumis Kucing', 'Orthosiphon Aristatus', 'Lamiales', 'Lamiaceae', 'Orthosiphon', 'O. Aristatus', 'daun kumis kucing, kumis kucing'),
(26, 'Jeruk Nipis', 'Lat Citrus aurantifolia', 'Sapindales', 'Rutaceae', 'Citrus', 'C. aurantifolia', 'jeruk nipis, jeruk mipis'),
(27, 'Temu Lawak', 'Curcuma xanthorrhiza', 'Zingiberales', ' 	Zingiberaceae', ' 	Curcuma', 'Curcuma xanthorrhiza', 'temu lawak, koneng temen, koneng gede'),
(28, 'Asam Jawa', 'Tamarindus indica L.', ' 	Fabales', 'Fabaceae', 'Tamarindus', 'T. indica', 'asem jawa, asam jawa'),
(29, 'Belimbing Sayur', 'Averrhoa bilimbi L.', 'Oxalidales', 'Oxalidaceae', 'Averrhoa', 'A. bilimbi', 'belimbing sayur, balingbing sayur'),
(30, 'Lidah Buaya', 'Aloe vera', 'Asparagales', 'Xanthorrhoeaceae', 'Aloe', 'A. vera', 'lidah buaya'),
(31, 'Sirih', 'Piper betle', 'Piperales', 'Piperaceae', 'Piper', 'P.betle', 'daun sirih, sirih,sereuh'),
(32, 'Tempuyung', 'Sonchus arvensis', '', '', '', '', 'tempuyung'),
(33, 'Kecibeling', 'Strobilanthes crispa', 'Lamiales', 'Acanthaceae', 'Strobilanthes', 'S. crispa', 'kecibeling'),
(34, 'Sambiloto', 'Andrographis paniculata', 'Lamiales', 'Acanthaceae', 'Andrographis', 'A. paniculata', 'sambiloto'),
(35, 'Akar Manis', 'Glycyrrhiza glabra', 'fabales', 'fabaceae', 'Glycyrrhiza', 'G. glabra', 'akar manis'),
(36, 'Patah Tulang', 'Euphorbia ticuralli', 'Malpighiales', 'Euphorbiaceae', 'Euphorbia', 'E.tirucalli', 'patah tulang, daun patah tulang, batang patah tulang'),
(37, 'Kelor', 'Moringa oleifera', 'Brassicales', 'Moringaceae', 'Moringa', 'M.oleifera', 'daun kelor, kelor'),
(38, 'Pegagan', 'Centella asiacita', 'Apiales', 'Mackinlayaceae', 'Centella', 'C. asiatica', 'pegagan'),
(39, 'Salam', 'Syzygium polyanthum', 'Myrtales', 'Myrtaceae', 'Syzygium', 'P. betle', 'daun salam, salam, '),
(40, 'Kunyit', 'Curcuma longa', 'Zingiberales', 'Zingiberaceae', 'Curcuma', 'C. longa', 'kunyit, koneng');

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
(25, 'Kumis_kucing', 'https://hellosehat.com/hidup-sehat/nutrisi/manfaat-kumis-kucing/', 'kumis kucing'),
(26, 'Jeruk_nipis', 'https://hellosehat.com/hidup-sehat/tips-sehat/8-manfaat-air-jeruk-nipis-bagi-kesehatan/', 'Citru, Fruit, Green, Lime'),
(27, 'Temu_lawak', 'https://hellosehat.com/hidup-sehat/fakta-unik/manfaat-temulawak-cream-obat/', 'temulawak'),
(28, 'Asam_jawa', 'https://hellosehat.com/hidup-sehat/nutrisi/manfaat-asam-jawa-untuk-diet/', 'asam jawa'),
(29, 'Belimbing_sayur', 'https://hellosehat.com/hidup-sehat/fakta-unik/manfaat-belimbing-wuluh/', 'belimbing sayur, belimbing wuluh, belimbing buluh, belimbing botol, belimbing besi, atau belimbing asam)'),
(30, 'Lidah_buaya', 'https://hellosehat.com/hidup-sehat/fakta-unik/8-manfaat-lidah-buaya-yang-serba-guna/', 'lidah buaya, aloevera'),
(31, 'Sirih', 'https://hellosehat.com/hidup-sehat/fakta-unik/manfaat-daun-sirih-hijau-sirih-merah/', 'daun sirih '),
(32, 'Daun_Tempuyung', 'https://hellosehat.com/pusat-kesehatan/demam-berdarah-dengue-dbd/manfaat-kesehatan-jambu-biji/', ''),
(33, 'Kecibeling', 'https://www.alodokter.com/komunitas/topic/mau-tanya-dokter-3', 'keji beling, pecah beling'),
(34, 'Sambiloto', 'https://hellosehat.com/hidup-sehat/fakta-unik/berbagai-khasiat-sambiloto/', 'sambiloto'),
(35, 'Akar_manis', 'https://www.alodokter.com/jangan-tergoda-kenali-dulu-fakta-obat-herbal-hernia-berikut', 'akar manis'),
(36, 'Patah_tulang_(tumbuhan)', 'https://www.alodokter.com/search?s=daun%20patah%20tulang', 'daun patah tulang'),
(37, 'Kelor', 'https://hellosehat.com/hidup-sehat/fakta-unik/7-manfaat-daun-kelor/', 'daun kelor'),
(38, 'Pegagan', 'https://hellosehat.com/hidup-sehat/fakta-unik/manfaat-pegagan-herbal/', 'pegagan'),
(39, 'Salam_(tumbuhan)', 'https://hellosehat.com/hidup-sehat/fakta-unik/manfaat-daun-salam/', 'Daun salam'),
(40, 'Kunyit', 'https://hellosehat.com/hidup-sehat/nutrisi/manfaat-kunyit-untuk-pencernaan/', NULL);

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
-- Stand-in structure for view `v_penyakit_obat`
--
CREATE TABLE `v_penyakit_obat` (
`penyakit_obat_id` mediumint(8)
,`penyakit_id` mediumint(8)
,`tumbuhan_id` int(11)
,`id` int(11)
,`nama` varchar(100)
,`latin` varchar(100)
,`ordo` varchar(45)
,`famili` varchar(45)
,`genus` varchar(45)
,`spesies` varchar(45)
,`wikipedia` mediumtext
,`alodokter` mediumtext
,`unsplash` mediumtext
,`keyword` mediumtext
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
,`keyword` mediumtext
);

-- --------------------------------------------------------

--
-- Struktur untuk view `v_jamu_komposisi`
--
DROP TABLE IF EXISTS `v_jamu_komposisi`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_jamu_komposisi`  AS  select `a`.`jamu_id` AS `jamu_id`,`a`.`tumbuhan_id` AS `tumbuhan_id`,`b`.`nama` AS `nama` from (`jamu_komposisi` `a` left join `tumbuhan` `b` on((`a`.`tumbuhan_id` = `b`.`id`))) ;

-- --------------------------------------------------------

--
-- Struktur untuk view `v_penyakit_obat`
--
DROP TABLE IF EXISTS `v_penyakit_obat`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_penyakit_obat`  AS  select `a`.`penyakit_obat_id` AS `penyakit_obat_id`,`a`.`penyakit_id` AS `penyakit_id`,`a`.`tumbuhan_id` AS `tumbuhan_id`,`b`.`id` AS `id`,`b`.`nama` AS `nama`,`b`.`latin` AS `latin`,`b`.`ordo` AS `ordo`,`b`.`famili` AS `famili`,`b`.`genus` AS `genus`,`b`.`spesies` AS `spesies`,`b`.`wikipedia` AS `wikipedia`,`b`.`alodokter` AS `alodokter`,`b`.`unsplash` AS `unsplash`,`b`.`keyword` AS `keyword` from (`penyakit_obat` `a` left join `v_tumbuhan` `b` on((`a`.`tumbuhan_id` = `b`.`id`))) ;

-- --------------------------------------------------------

--
-- Struktur untuk view `v_tumbuhan`
--
DROP TABLE IF EXISTS `v_tumbuhan`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_tumbuhan`  AS  select `a`.`id` AS `id`,`a`.`nama` AS `nama`,`a`.`latin` AS `latin`,`a`.`ordo` AS `ordo`,`a`.`famili` AS `famili`,`a`.`genus` AS `genus`,`a`.`spesies` AS `spesies`,`b`.`wikipedia` AS `wikipedia`,`b`.`alodokter` AS `alodokter`,`b`.`unsplash` AS `unsplash`,`a`.`keyword` AS `keyword` from (`tumbuhan` `a` left join `tumbuhan_link` `b` on((`a`.`id` = `b`.`tumbuhan_id`))) ;

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
-- Indexes for table `penyakit`
--
ALTER TABLE `penyakit`
  ADD PRIMARY KEY (`penyakit_id`);

--
-- Indexes for table `penyakit_obat`
--
ALTER TABLE `penyakit_obat`
  ADD PRIMARY KEY (`penyakit_obat_id`),
  ADD KEY `penyakit_id` (`penyakit_id`),
  ADD KEY `tumbuhan_id` (`tumbuhan_id`);

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
-- AUTO_INCREMENT for table `penyakit`
--
ALTER TABLE `penyakit`
  MODIFY `penyakit_id` mediumint(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `penyakit_obat`
--
ALTER TABLE `penyakit_obat`
  MODIFY `penyakit_obat_id` mediumint(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `tumbuhan`
--
ALTER TABLE `tumbuhan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;
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
-- Ketidakleluasaan untuk tabel `penyakit_obat`
--
ALTER TABLE `penyakit_obat`
  ADD CONSTRAINT `penyakit_obat_ibfk_1` FOREIGN KEY (`penyakit_id`) REFERENCES `penyakit` (`penyakit_id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `penyakit_obat_ibfk_2` FOREIGN KEY (`tumbuhan_id`) REFERENCES `tumbuhan` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `tumbuhan_link`
--
ALTER TABLE `tumbuhan_link`
  ADD CONSTRAINT `fk_tumbuhan_link_tumbuhan1` FOREIGN KEY (`tumbuhan_id`) REFERENCES `tumbuhan` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

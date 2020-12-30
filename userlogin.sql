-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 30, 2020 at 06:39 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `node_demo`
--

-- --------------------------------------------------------

--
-- Table structure for table `userlogin`
--

CREATE TABLE `userlogin` (
  `id` int(255) NOT NULL,
  `firstname` varchar(700) NOT NULL,
  `lastname` varchar(700) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `email` varchar(200) NOT NULL,
  `area_code` varchar(100) NOT NULL,
  `password` varchar(700) NOT NULL,
  `number` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `userlogin`
--

INSERT INTO `userlogin` (`id`, `firstname`, `lastname`, `gender`, `email`, `area_code`, `password`, `number`) VALUES
(1, 'Nilesh', 'Pande', 'male', 'np3225@gmail.com', '', '$2b$10$Ufxn.Tv6/xn5bug8wotSueznrBzl52Usm6YKOXJA1aHZZnRivMzyy', '2673129396'),
(13, 'xNsfsdilesh', 'xPande', 'male', 'xnp3225@gmail.com', '', '$2b$10$X26UheY3pm6u40h8PqD9peFf9Fz/wB2tr7mZG0qFH/uKYzNCOBUai', '2673129396');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `userlogin`
--
ALTER TABLE `userlogin`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `userlogin`
--
ALTER TABLE `userlogin`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

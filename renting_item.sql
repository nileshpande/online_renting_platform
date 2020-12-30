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
-- Table structure for table `renting_item`
--

CREATE TABLE `renting_item` (
  `id` int(255) NOT NULL,
  `user_id` int(255) NOT NULL,
  `item_name` varchar(255) NOT NULL,
  `rent_price` float NOT NULL,
  `manfacture_date` datetime NOT NULL,
  `actual_cost` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='name, rent price, manufacture date,  actual cost of the pric';

--
-- Dumping data for table `renting_item`
--

INSERT INTO `renting_item` (`id`, `user_id`, `item_name`, `rent_price`, `manfacture_date`, `actual_cost`) VALUES
(1, 0, 'test fsdfsd1', 11, '2020-12-29 15:18:19', 122),
(3, 0, 'fridge', 11, '2020-12-29 09:48:19', 122),
(4, 13, 'fridge', 11, '2020-12-29 09:48:19', 122);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `renting_item`
--
ALTER TABLE `renting_item`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `renting_item`
--
ALTER TABLE `renting_item`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

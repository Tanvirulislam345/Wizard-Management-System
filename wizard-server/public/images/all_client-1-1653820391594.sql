-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 18, 2022 at 09:43 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wizard_software`
--

-- --------------------------------------------------------

--
-- Table structure for table `all_client`
--

CREATE TABLE `all_client` (
  `id` int(11) NOT NULL,
  `ClientId` varchar(100) NOT NULL,
  `FullName` varchar(100) NOT NULL,
  `CompanyName` varchar(100) NOT NULL,
  `Gender` varchar(100) NOT NULL,
  `Date` varchar(100) NOT NULL,
  `BillingMethod` varchar(100) NOT NULL,
  `Address` varchar(100) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Password` varchar(20) NOT NULL,
  `Contact` varchar(100) NOT NULL,
  `Description` longtext NOT NULL,
  `Profile` varchar(100) NOT NULL,
  `File` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `all_client`
--

INSERT INTO `all_client` (`id`, `ClientId`, `FullName`, `CompanyName`, `Gender`, `Date`, `BillingMethod`, `Address`, `Email`, `Password`, `Contact`, `Description`, `Profile`, `File`) VALUES
(1, 'Quia quaerat ipsum ', 'Cally Scott', 'Talley Campbell LLC', 'Female', '1995-04-08', 'Cash', 'Consequatur aut repu', 'kohixa@mailinator.com', '3hf74t7a', '+1 (492) 554-4726', 'Quia et architecto v', '', ''),
(2, 'Quis lorem dolores d', 'Sandra Allison', 'Lindsay Holland Trading', 'Female', '2016-01-29', 'Card', 'Cupiditate quidem ip', 'lugyqanucy@mailinator.com', 'ph0023mk', '+1 (899) 512-2368', 'Ut sit consequuntur ', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `all_client`
--
ALTER TABLE `all_client`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `ClientId` (`ClientId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `all_client`
--
ALTER TABLE `all_client`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

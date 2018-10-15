/*
 Navicat Premium Data Transfer

 Source Server         : mysql_root
 Source Server Type    : MySQL
 Source Server Version : 80012
 Source Host           : localhost:3306
 Source Schema         : react

 Target Server Type    : MySQL
 Target Server Version : 80012
 File Encoding         : 65001

 Date: 15/10/2018 22:02:21
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `nickname` varchar(20) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `identifier` varchar(32) DEFAULT NULL,
  `token` varchar(32) DEFAULT NULL,
  `email` varchar(32) NOT NULL,
  `regip` varchar(15) DEFAULT NULL,
  `regdate` int(11) DEFAULT NULL,
  `lastip` varchar(15) DEFAULT NULL,
  `lastdate` int(11) DEFAULT NULL,
  `UsActiveCode` varchar(36) DEFAULT NULL,
  `UsActiveTime` int(11) DEFAULT NULL,
  `UsMark` int(11) DEFAULT NULL,
  `UsAuthorityStr` varchar(200) DEFAULT NULL,
  `captcha` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES (1, 'hello1234', NULL, '$2a$10$STSAkjVmNIktVw9ZFldctO6i06Xr0F4UDf2bZoek4Znli9IzhE8Ci', NULL, NULL, '1111@qq.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (2, 'hello11', NULL, '$2a$10$BDVnMz3P2411YT9D4KtBvO74aG3mvlc4UwSH/XVw.R.MbCdS0cs8W', NULL, NULL, '1@qq.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (3, 'hello11111', NULL, '$2a$10$.CQWBnuq6GEZIdP5ENZVFevYtCLF8xNAK32kwaf3aol8gn74DuCR6', NULL, NULL, '111111@qq.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (4, 'e3222', NULL, '$2a$10$MaJxyGOtWE2485Mx5TLV3ObdqIlbTckdsq5udbfH6h3a6HdFmiBmG', NULL, NULL, '1111121@qq.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (5, 'hello111111', NULL, '$2a$10$2zpO5m05ufflRaRiYrMJduxHDbUmIJkSbxO9QRXxR.AdYiee1PCDW', NULL, NULL, '111112111@qq.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (6, 'hello1111111', NULL, '$2a$10$.EHOvDHoWDWg9TRfzxPRM.Aycnw3Q33UkrDRZmrGmrxTIb9SYq9Si', NULL, NULL, '1111232311@qq.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (7, '12131', NULL, '$2a$10$/.WW94FOGUtWGKD7DRA1E.BA5555gmbYEhlwBtuUcny9q4N9knRfq', NULL, NULL, '1111122111@qq.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (8, 'tetet', NULL, '$2a$10$VV.qP55ic35kwUM7b.JjIeta0UsvB.xjjUJA5BBB/fQOUVRwR/4Ru', NULL, NULL, '121212@qq.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (9, '34324234', NULL, '$2a$10$V0czvz4rszmpAkAL6y8YSeGd/ejQS5/quKyWDWcUDpcq4W1JFmwXS', NULL, NULL, '121312321@qq.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (10, 'ewqe212', NULL, '$2a$10$S.EMlz1zl8RFO0Puoqvxp.jSxDdRo/EKiisW68M3qfAdYLYIBVfoW', NULL, NULL, '321312@qq.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (11, 'hello', NULL, '$2a$10$I45wJ7I7L5hz.BhhyvbrducA3LAOK8X.GRU9.yiWPoN8E9e9uFPUm', NULL, NULL, '1111112111@qq.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (12, '2121212', NULL, '$2a$10$3pg6AV1Oi3rwnoFjBilPRe9XULeVJwf9q2Gx5oKwyqFUM74L1GT2O', NULL, NULL, '2321@qq.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (13, 'captcha11', NULL, '$2a$10$Gx1LufWsJwL.bMTEvPBD2.YBP.RgmCNTSHp7qgKwY6FqrbEPEH75a', NULL, NULL, 'wqwq@11.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (14, 'tetsetsf', NULL, '$2a$10$trYSTpH522uEwslcHlaRTuU18Vyn2zMKEm5KyP6WmkPfS9e4d2n/e', NULL, NULL, '2@qqqq.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '21212');
INSERT INTO `user` VALUES (15, 'hello22222222', NULL, '$2a$10$4nvMoIVIRnVcujar6vXX3.yWgo.LjBA3fyf23mPu6bBKn/QaFGH1a', NULL, NULL, '1@qe.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1111111');
INSERT INTO `user` VALUES (16, 'rrrr1111', NULL, '$2a$10$yyS3bZFZz.rK0A6WpPe73eM/0KqBoaRiFNSKsQtziVPPFDSb2PKPO', NULL, NULL, '231@c.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '121212');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;

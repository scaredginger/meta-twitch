CREATE TABLE `channels` (
  `id` BIGINT NOT NULL,
  `displayName` varchar(1024) DEFAULT NULL,
  `name` varchar(1024) DEFAULT NULL,
  `banner` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `displayName` (`displayName`),
  KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `streams` (
  `id` BIGINT NOT NULL,
  `channelID` BIGINT DEFAULT NULL,
  `description` varchar(32767) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `game` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `channelID` (`channelID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `streamMoments` (
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `streamID` BIGINT  NOT NULL,
  `viewers` int(11) DEFAULT NULL,
  PRIMARY KEY (`time`,`streamID`),
  KEY `streamID` (`streamID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `followerCount` (
  `channelID` BIGINT NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `followers` BIGINT DEFAULT NULL,
  PRIMARY KEY (`channelID`,`time`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

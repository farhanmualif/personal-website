/*
  Warnings:

  - Added the required column `createdAt` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `ProductCategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `ProductCategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `Role` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `Role` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `Store` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `Store` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product` ADD COLUMN `createdAt` DATETIME(3) NOT NULL,
    ADD COLUMN `updateAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `productcategory` ADD COLUMN `createdAt` DATETIME(3) NOT NULL,
    ADD COLUMN `updateAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `role` ADD COLUMN `createdAt` DATETIME(3) NOT NULL,
    ADD COLUMN `updateAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `store` ADD COLUMN `createdAt` DATETIME(3) NOT NULL,
    ADD COLUMN `updateAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `createdAt` DATETIME(3) NOT NULL,
    ADD COLUMN `updateAt` DATETIME(3) NOT NULL;

/*
  Warnings:

  - You are about to drop the column `Image` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `reviewproduct` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `reviewproduct` table. All the data in the column will be lost.
  - You are about to drop the column `storeId` on the `reviewstore` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `reviewstore` table. All the data in the column will be lost.
  - You are about to drop the column `Image` on the `store` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `reviewproduct` DROP FOREIGN KEY `ReviewProduct_productId_fkey`;

-- DropForeignKey
ALTER TABLE `reviewproduct` DROP FOREIGN KEY `ReviewProduct_userId_fkey`;

-- DropForeignKey
ALTER TABLE `reviewstore` DROP FOREIGN KEY `ReviewStore_storeId_fkey`;

-- DropForeignKey
ALTER TABLE `reviewstore` DROP FOREIGN KEY `ReviewStore_userId_fkey`;

-- AlterTable
ALTER TABLE `product` DROP COLUMN `Image`,
    ADD COLUMN `image` VARCHAR(191) NOT NULL DEFAULT 'default.png',
    ADD COLUMN `reviewId` INTEGER NULL;

-- AlterTable
ALTER TABLE `reviewproduct` DROP COLUMN `productId`,
    DROP COLUMN `userId`;

-- AlterTable
ALTER TABLE `reviewstore` DROP COLUMN `storeId`,
    DROP COLUMN `userId`;

-- AlterTable
ALTER TABLE `store` DROP COLUMN `Image`,
    ADD COLUMN `image` VARCHAR(191) NOT NULL DEFAULT 'store_image.png',
    ADD COLUMN `reviewId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Store` ADD CONSTRAINT `Store_reviewId_fkey` FOREIGN KEY (`reviewId`) REFERENCES `ReviewStore`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_reviewId_fkey` FOREIGN KEY (`reviewId`) REFERENCES `ReviewProduct`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

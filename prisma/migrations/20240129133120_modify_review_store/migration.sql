/*
  Warnings:

  - You are about to drop the column `reviewId` on the `store` table. All the data in the column will be lost.
  - Added the required column `storeId` to the `ReviewStore` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `store` DROP FOREIGN KEY `Store_reviewId_fkey`;

-- AlterTable
ALTER TABLE `cart` MODIFY `userId` VARCHAR(191) NOT NULL DEFAULT '2';

-- AlterTable
ALTER TABLE `reviewstore` ADD COLUMN `storeId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `store` DROP COLUMN `reviewId`;

-- AddForeignKey
ALTER TABLE `ReviewStore` ADD CONSTRAINT `ReviewStore_storeId_fkey` FOREIGN KEY (`storeId`) REFERENCES `Store`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

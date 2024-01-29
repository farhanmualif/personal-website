/*
  Warnings:

  - You are about to drop the column `reviewId` on the `product` table. All the data in the column will be lost.
  - Added the required column `productId` to the `ReviewProduct` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `Product_reviewId_fkey`;

-- AlterTable
ALTER TABLE `product` DROP COLUMN `reviewId`;

-- AlterTable
ALTER TABLE `reviewproduct` ADD COLUMN `productId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `ReviewProduct` ADD CONSTRAINT `ReviewProduct_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

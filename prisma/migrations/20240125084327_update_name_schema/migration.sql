/*
  Warnings:

  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `account` DROP FOREIGN KEY `Account_userId_fkey`;

-- DropForeignKey
ALTER TABLE `cart` DROP FOREIGN KEY `Cart_userId_fkey`;

-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_customerId_fkey`;

-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_sellerId_fkey`;

-- DropForeignKey
ALTER TABLE `session` DROP FOREIGN KEY `Session_userId_fkey`;

-- DropForeignKey
ALTER TABLE `store` DROP FOREIGN KEY `Store_ownerId_fkey`;

-- AlterTable
ALTER TABLE `account` MODIFY `userId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `cart` MODIFY `userId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `order` MODIFY `sellerId` VARCHAR(191) NOT NULL,
    MODIFY `customerId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `session` MODIFY `userId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `store` MODIFY `ownerId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `user` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `Account` ADD CONSTRAINT `Account_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Session` ADD CONSTRAINT `Session_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Store` ADD CONSTRAINT `Store_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cart` ADD CONSTRAINT `Cart_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_sellerId_fkey` FOREIGN KEY (`sellerId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

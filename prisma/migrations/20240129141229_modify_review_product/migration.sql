/*
  Warnings:

  - Added the required column `userId` to the `ReviewProduct` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `reviewproduct` ADD COLUMN `userId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `ReviewProduct` ADD CONSTRAINT `ReviewProduct_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

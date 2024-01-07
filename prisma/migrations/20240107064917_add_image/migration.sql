-- AlterTable
ALTER TABLE `product` ADD COLUMN `Image` VARCHAR(191) NOT NULL DEFAULT 'default.png';

-- AlterTable
ALTER TABLE `store` ADD COLUMN `Image` VARCHAR(191) NOT NULL DEFAULT 'store_image.png';

-- AlterTable
ALTER TABLE `user` ADD COLUMN `Image` VARCHAR(191) NOT NULL DEFAULT 'profile_image.png';

/*
  Warnings:

  - A unique constraint covering the columns `[uuid]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Product_uuid_key` ON `Product`(`uuid`);

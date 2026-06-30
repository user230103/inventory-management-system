const { PrismaClient } = require('@prisma/client');
// Nếu bạn giữ nguyên config output cũ của bạn thì dòng trên đổi thành:
// const { PrismaClient } = require('../generated/prisma');

const prisma = new PrismaClient();

module.exports = prisma;
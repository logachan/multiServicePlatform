"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BulkEmailService = void 0;
const common_1 = require("@nestjs/common");
const bull_1 = require("@nestjs/bull");
let BulkEmailService = class BulkEmailService {
    mailQueue;
    constructor(mailQueue) {
        this.mailQueue = mailQueue;
    }
    create(createBulkEmailDto) {
        return 'This action adds a new bulkEmail';
    }
    async sendAll(body) {
        let emailDataArray = body?.emails;
        for (let email of emailDataArray) {
            console.log("boddddd", body?.content);
            await this.mailQueue.add({ email: email, content: body?.content });
        }
        return {
            mesaage: "Emails sent Successfully!",
            data: emailDataArray
        };
    }
    findAll() {
        return {
            message: "All Bulk mail returns Here!",
            data: "abc"
        };
    }
    findOne(id) {
        return `This action returns a #${id} bulkEmail`;
    }
    update(id, updateBulkEmailDto) {
        return `This action updates a #${id} bulkEmail`;
    }
    remove(id) {
        return `This action removes a #${id} bulkEmail`;
    }
};
exports.BulkEmailService = BulkEmailService;
exports.BulkEmailService = BulkEmailService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, bull_1.InjectQueue)('mail-queue')),
    __metadata("design:paramtypes", [Object])
], BulkEmailService);
//# sourceMappingURL=bulk-email.service.js.map
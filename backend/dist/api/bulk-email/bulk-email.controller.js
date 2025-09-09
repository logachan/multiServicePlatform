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
exports.BulkEmailController = void 0;
const common_1 = require("@nestjs/common");
const bulk_email_service_1 = require("./bulk-email.service");
const create_bulk_email_dto_1 = require("./dto/create-bulk-email.dto");
let BulkEmailController = class BulkEmailController {
    bulkEmailService;
    constructor(bulkEmailService) {
        this.bulkEmailService = bulkEmailService;
    }
    sendAll(body) {
        return this.bulkEmailService.sendAll(body);
    }
    create(createBulkEmailDto) {
        return this.bulkEmailService.create(createBulkEmailDto);
    }
    findAll() {
        return this.bulkEmailService.findAll();
    }
    findOne(id) {
        return this.bulkEmailService.findOne(+id);
    }
    update(id, updateBulkEmailDto) {
        return this.bulkEmailService.update(+id, updateBulkEmailDto);
    }
    remove(id) {
        return this.bulkEmailService.remove(+id);
    }
};
exports.BulkEmailController = BulkEmailController;
__decorate([
    (0, common_1.Post)('sendAll'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BulkEmailController.prototype, "sendAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_bulk_email_dto_1.CreateBulkEmailDto]),
    __metadata("design:returntype", void 0)
], BulkEmailController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BulkEmailController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BulkEmailController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_bulk_email_dto_1.CreateBulkEmailDto]),
    __metadata("design:returntype", void 0)
], BulkEmailController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BulkEmailController.prototype, "remove", null);
exports.BulkEmailController = BulkEmailController = __decorate([
    (0, common_1.Controller)('bulk-email'),
    __metadata("design:paramtypes", [bulk_email_service_1.BulkEmailService])
], BulkEmailController);
//# sourceMappingURL=bulk-email.controller.js.map
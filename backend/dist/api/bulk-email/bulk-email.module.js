"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BulkEmailModule = void 0;
const common_1 = require("@nestjs/common");
const bulk_email_service_1 = require("./bulk-email.service");
const bulk_email_controller_1 = require("./bulk-email.controller");
const mail_queue_module_1 = require("../../mail-queue/mail-queue.module");
let BulkEmailModule = class BulkEmailModule {
};
exports.BulkEmailModule = BulkEmailModule;
exports.BulkEmailModule = BulkEmailModule = __decorate([
    (0, common_1.Module)({
        imports: [mail_queue_module_1.MailQueueModule],
        controllers: [bulk_email_controller_1.BulkEmailController],
        providers: [bulk_email_service_1.BulkEmailService],
    })
], BulkEmailModule);
//# sourceMappingURL=bulk-email.module.js.map
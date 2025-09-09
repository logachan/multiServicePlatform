"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailQueueModule = void 0;
const bull_1 = require("@nestjs/bull");
const common_1 = require("@nestjs/common");
const mail_service_1 = require("../api/mail/mail.service");
const mail_queue_processor_1 = require("../processers/mail-queue.processor");
let MailQueueModule = class MailQueueModule {
};
exports.MailQueueModule = MailQueueModule;
exports.MailQueueModule = MailQueueModule = __decorate([
    (0, common_1.Module)({
        imports: [
            bull_1.BullModule.registerQueue({
                name: 'mail-queue',
            }),
        ],
        providers: [mail_queue_processor_1.MailQueueProcessor, mail_service_1.MailService],
        exports: [bull_1.BullModule],
    })
], MailQueueModule);
//# sourceMappingURL=mail-queue.module.js.map
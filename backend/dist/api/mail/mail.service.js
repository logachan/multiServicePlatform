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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailService = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
const path = require("path");
const fs = require("fs");
const hb = require("handlebars");
let MailService = class MailService {
    mailService;
    constructor(mailService) {
        this.mailService = mailService;
    }
    async sendBulkEmail(email, content) {
        try {
            const templatePath = path.resolve(process.cwd(), 'src', 'emailtemplates', 'send_Bulk_email.hbs');
            const attachmentPath = path.resolve(process.cwd(), 'src', 'attachments', 'Logachander B_SE.pdf');
            const template = fs.readFileSync(templatePath, "utf8");
            const compiledTemplate = hb.compile(template);
            let data = "123";
            const html = compiledTemplate(data);
            const info = await this.mailService.sendMail({
                to: email,
                subject: "Job Application Software Developer",
                html: content,
                attachments: [
                    {
                        filename: 'LogachanderB_SE.pdf',
                        path: attachmentPath,
                        contentType: 'application/pdf',
                    },
                ]
            });
            return info;
        }
        catch (err) {
            throw new Error(err);
        }
    }
};
exports.MailService = MailService;
exports.MailService = MailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mailer_1.MailerService])
], MailService);
//# sourceMappingURL=mail.service.js.map
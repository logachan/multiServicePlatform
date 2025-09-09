"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const dotenv = require("dotenv");
const common_1 = require("@nestjs/common");
dotenv.config();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.setGlobalPrefix("api");
    app.enableVersioning({
        type: common_1.VersioningType.URI,
        defaultVersion: ["1"],
    });
    await app.listen(process.env.PORT ?? 3000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map
import {AppModule} from "./app/app.module";
import {NestFactory} from "@nestjs/core";

// Bootstrap the application
async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(4000);
}

bootstrap();
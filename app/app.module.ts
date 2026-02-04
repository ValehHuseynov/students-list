import {Module} from "@nestjs/common";
import {AppService} from "./app.service";
import {AppController} from "./app.controller";
import {EmailModule} from "./email/email.module";
import {StudentsModule} from "./strudents/students.module";
import {ClassesModule} from "./classes/classes.module";
import {TeachersModule} from "./teachers/teachers.module";

@Module({
    imports: [EmailModule,StudentsModule,ClassesModule,TeachersModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {};
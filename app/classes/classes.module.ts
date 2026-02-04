import {Module} from "@nestjs/common";
import {ClassesService} from "./classes.service";
import {ClassesController} from "./classes.controller";
import {StudentsModule} from "../strudents/students.module";

@Module({
    imports: [StudentsModule],
    controllers: [ClassesController],
    providers: [ClassesService],
})
export class ClassesModule {};

import { Controller ,Get,Post,Body} from '@nestjs/common';
import {StudentsService} from "./students.service";
import {IStudent} from "./interfaces/strudent.interface";

@Controller('students')
export class StudentsController {

    constructor(private studentsServices: StudentsService) {}
    @Get()
    findAll(): IStudent[] {
        return this.studentsServices.findAll();
    }

    @Post()
    create(@Body() student: IStudent) {
       this.studentsServices.create(student);
    }
}
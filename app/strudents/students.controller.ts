import { Controller ,Get,Post,Body,Put,Param,Delete,HttpCode,NotFoundException} from '@nestjs/common';
import {Response} from "express";
import {StudentsService} from "./students.service";
import {IStudent} from "./interfaces/strudent.interface";
@Controller('students')
export class StudentsController {
    private students: IStudent[] = [{id: 1,name: "Example name", age: 55}];
    constructor(private studentsServices: StudentsService) {}

    @Get()
    findAll(): IStudent[] {
        return this.students;
    }

    @Get(':id')
    @HttpCode(200)
    findOne(@Param('id') id: string) {
        const student = this.students.find(s => s.id === +id);
        if(!student) {
            throw new NotFoundException(`Student with ID ${id} not found`);
        }
        console.log(student);
        return student;
    }

    @Post()
    @HttpCode(202)
    create(@Body() student: IStudent) {
       this.students.push(student);
    }

    @Put(':id')
    update(@Param('id') id: string,@Body() body: IStudent): string {
        console.log(id,body);
        return `This will update student with ID ${id} with the following data: ${JSON.stringify(body)}`;
    }

    @Delete(':id')
    delete(@Param('id') id: string): string {
        return `This will delete student with ID ${id}`;
    }
}
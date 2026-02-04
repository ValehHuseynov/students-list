import {Injectable} from "@nestjs/common";
import {IStudent} from "./interfaces/strudent.interface";

@Injectable()
export class StudentsService {
    private readonly students: IStudent[] = [];

    create(student:IStudent) {
        this.students.push(student);
        return this.students;
    }

    findAll() : IStudent[] {
        return this.students;
    }
}
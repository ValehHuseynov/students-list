import {Module} from '@nestjs/common';
import {TeachersService} from "./teachers.service";

@Module({
    controllers: [],
    providers: [TeachersService],
})
export class TeachersModule {};
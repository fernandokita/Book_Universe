import { IsNumber, isNumber, IsString, isString } from "class-validator";

export class CreateAssemblyDto {
    @IsNumber()
    id: number;

    @IsString()
    name: string;
}

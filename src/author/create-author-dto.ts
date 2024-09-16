import { IsNumber, isNumber, IsString, isString } from "class-validator"

export class CreateAuthorDto {
    @IsNumber()
    readonly id: number;

    @IsString()
    readonly name: string;
}

import { PartialType } from "@nestjs/mapped-types";
import { CreatePartDto } from "./create-part-dto";
import { IsNumber, IsString } from "class-validator";

export class UpdatePartDto extends PartialType(CreatePartDto){
    @IsNumber()
    id: number;

    @IsString()
    part_number: string;
}

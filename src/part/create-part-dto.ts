import { IsNumber, IsString} from "class-validator";

export class CreatePartDto {
    @IsNumber()
    id: number;

    @IsString()
    part_number: string;
}

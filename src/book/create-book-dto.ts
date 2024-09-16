import { IsDate, isDate, IsNumber, isNumber, isString } from "class-validator"

export class CreateBookDto {
    @IsNumber()
    readonly id: number

    @IsNumber()
    readonly author_id: number

    @IsDate()
    readonly published_at: Date
}

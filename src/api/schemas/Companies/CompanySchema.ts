import { IsNotEmpty,  IsString, MinLength, MaxLength } from 'class-validator';
export class CompanySchema {
    @IsString()
    @IsNotEmpty()
    ragsoc: string;
  
    @MaxLength(20)
    @MinLength(2)
    @IsString()
    @IsNotEmpty()
    piva: string;
  
    @MaxLength(20)
    @MinLength(2)
    @IsString()
    @IsNotEmpty()
    via: string;
  
    @MaxLength(20)
    @MinLength(6)
    @IsString()
    @IsNotEmpty()
    cap: string;

    @MaxLength(20)
    @MinLength(6)
    @IsString()
    @IsNotEmpty()
    provincia:string

}
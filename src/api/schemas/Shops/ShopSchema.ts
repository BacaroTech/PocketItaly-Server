import { IsNotEmpty, IsEmail, IsString, MinLength, MaxLength } from 'class-validator';
export class ShopSchema {
    @IsString()
    @IsNotEmpty()
    ragsoc: string;
  
    @MaxLength(20)
    @MinLength(2)
    @IsString()
    @IsNotEmpty()
    piva: string;
  
    @IsEmail()
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


    @IsString()
    //@IsNotEmpty()
    latitude:string

    @IsString()
    //@IsNotEmpty()
    longitude:string

}
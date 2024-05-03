import {
    IsNotEmpty,
    IsOptional,
    IsString,
  } from 'class-validator';
  
  export class SendTokenBody {
    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    tokenId: number;

    @IsNotEmpty()
    @IsString()
    latitude: string;

    @IsNotEmpty()
    @IsString()
    longitude: string;

    @IsOptional()
    @IsString()
    productBatch: string

  }
     
  export class ValidateTokenBody {
    @IsNotEmpty()
    tokenId: number;

    @IsNotEmpty()
    @IsString()
    serialCode: string;

  }
   
  export class ReportTokenBody {

    @IsNotEmpty()
    companyId: number;

    @IsNotEmpty()
    productId:number

  }

     
  export class GenerateTokenBody {

    @IsNotEmpty()
    companyId: number;

    @IsNotEmpty()
    productId:number

    @IsString()
    serialCode:string

  }
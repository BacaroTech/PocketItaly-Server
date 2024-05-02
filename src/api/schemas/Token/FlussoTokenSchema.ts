import {
    IsNotEmpty,
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
    tokenId: number;

    
    @IsNotEmpty()
    @IsString()
    report: string;

  }
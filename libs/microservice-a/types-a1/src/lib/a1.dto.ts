import { ApiProperty } from '@nestjs/swagger'; 

export class A1Dto {
    @ApiProperty()
    property1: string;

    @ApiProperty()
    property2: string;
}
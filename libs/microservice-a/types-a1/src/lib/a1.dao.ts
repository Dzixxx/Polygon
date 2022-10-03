import { ApiProperty } from '@nestjs/swagger'; 

export class A1Dao {
    @ApiProperty()
    property1: string;

    @ApiProperty()
    property2: string;
}
import { ApiProperty } from '@nestjs/swagger'; 

export class A2Dao {
    @ApiProperty()
    property1: string;

    @ApiProperty()
    property2: string;
}
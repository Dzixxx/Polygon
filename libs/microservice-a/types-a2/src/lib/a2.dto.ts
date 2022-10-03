import { ApiProperty } from '@nestjs/swagger'; 
import { A1Dto } from '@polygon/microservice-a/types-a1';

export class A2Dto {
    @ApiProperty()
    property1: string;

    @ApiProperty()
    property2: string;

    @ApiProperty({ type: A1Dto })
    a1: A1Dto;
}
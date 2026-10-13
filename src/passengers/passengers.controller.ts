import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

@Controller('passengers')
export class PassengersController {

  @Get()
  findAll() {
    return 'Get all passengers';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Get passenger ${id}`;
  }

  @Post()
  create(@Body() body: any) {
    return {
      message: 'Passenger created',
      data: body,
    };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return {
      message: `Passenger ${id} updated`,
      data: body,
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return {
      message: `Passenger ${id} deleted`,
    };
  }
}
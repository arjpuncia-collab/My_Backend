import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

@Controller('bookings')
export class BookingsController {

  @Get()
  findAll() {
    return 'Get all bookings';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Get booking ${id}`;
  }

  @Post()
  create(@Body() body: any) {
    return {
      message: 'Booking created',
      data: body,
    };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return {
      message: `Booking ${id} updated`,
      data: body,
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return {
      message: `Booking ${id} deleted`,
    };
  }
}
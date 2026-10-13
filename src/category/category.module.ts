import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { categoryService } from './category.service';
import { categoryController } from './category.controller';
import { DatabaseModule } from '../database/database.module';


@Module({
  imports: [
    DatabaseModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [categoryController, categoryController],
  providers: [categoryService, categoryService],
  exports: [categoryService, categoryService],
})
export class CategoryModule {}
import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
   return this.productsService.create(createProductDto);
  }

  @Get()
  async findAll() {
    const data = await this.productsService.findAll()
    return {
      message: 'Petición correcta.',
      data
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: number) {
  //   return this.productsService.remove(id);
  // }
}

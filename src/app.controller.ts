import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { ProductEntity } from './product/entities/product.entity';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private productService: InMemoryDBService<ProductEntity>) { }

  @Get('product')
  getProducts() {
    return this.productService.getAll();
  }

  @Post('product')
  AddProduct(@Body() product: ProductEntity): ProductEntity {
    return this.productService.create(product);
  }

  @Put('product')
  EditProduct(@Body() product: ProductEntity) {
    return this.productService.update(product);
  }

  @Delete('product/:id')
  DeleteProduct(@Param('id') id: number) {
    return this.productService.delete(+id)
  }

  @Get('product/:id')
  GetProductById(@Param('id') id: number) {
    return this.productService.query(data => data.id === +id)
  }
}

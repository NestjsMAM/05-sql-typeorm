import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product} from './entities/product.entity';

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
  ) {}

  create(createProductDto: CreateProductDto) {
    // const product = new Product();
    // product.name = 'otro';
    // product.price = 200;
    const product =  this.productsRepository.create(createProductDto);
    return this.productsRepository.save(product);
    // return 'This action adds a new product';
  }

  findAll() {
    return this.productsRepository.find();
    // return `This action returns all products`;
  }

  async findOne(id: number) {
    const product = await this.productsRepository.findOne(id);
    if (!product) throw new NotFoundException()
    return product
    // return `This action   returns a #${id} product`;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.productsRepository.update(id, updateProductDto );
    if (!product) throw new NotFoundException()
    return product
    // return `This action updates a #${id} product`;
  }

  // async remove( product: Product) {
  //   const productb = await this.productsRepository.remove(product);
  //   if (!productb) throw new NotFoundException()
  //   return productb
  //   // return `This action removes a #${id} product`;
  // }
}

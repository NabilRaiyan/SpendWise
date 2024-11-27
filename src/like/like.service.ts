import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from 'src/product/entity';
import { UserEntity } from 'src/user/entity';
import { Repository } from 'typeorm';
import { LikeEntity } from './entity/like.entity';

@Injectable()
export class LikeService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
    private readonly likeRepository: Repository<LikeEntity>,
  ) {}

  // insert like
  async insertLike(
    userId: number,
    productId: number,
    likeCount: number,
  ): Promise<LikeEntity> {

    const 
  }
}

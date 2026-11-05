import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from './entities/profile.entity.js';
import { ProfileController } from './profile.controller.js';
import { ProfileContract } from './profile.interface.js';
import { ProfileRepository } from './profile.repository.js';
import { ProfileService } from './profile.service.js';

@Module({
  imports: [TypeOrmModule.forFeature([Profile])],
  providers: [
    ProfileService,
    {
      provide: ProfileContract,
      useClass: ProfileRepository,
    },
  ],
  controllers: [ProfileController],
  exports: [ProfileService],
})
export class ProfileModule {}

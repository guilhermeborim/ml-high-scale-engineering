import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto.js';
import { ProfilePO } from './entities/profile.js';
import { ProfileContract } from './profile.interface.js';

@Injectable()
export class ProfileService {
  constructor(private readonly profileRepository: ProfileContract) {}

  async createProfile(dto: CreateProfileDto) {
    console.log(dto);
    const profile = ProfilePO.create({
      name: dto.name,
      email: dto.email,
      password: dto.password,
      phone: dto.phone,
      cpf: dto.cpf ?? null,
      cnpj: dto.cnpj ?? null,
    });

    return this.profileRepository.create(profile);
  }
}

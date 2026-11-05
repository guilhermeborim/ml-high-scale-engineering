import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from './entities/profile.entity.js';
import { ProfilePO } from './entities/profile.js';
import { ProfileContract } from './profile.interface.js';

@Injectable()
export class ProfileRepository implements ProfileContract {
  constructor(
    @InjectRepository(Profile)
    private readonly repository: Repository<Profile>,
  ) {}

  async create(data: ProfilePO): Promise<ProfilePO> {
    const profileEntity = this.repository.create({
      name: data.getName(),
      email: data.getEmail(),
      password: data.getPassword(),
      phone: data.getPhone(),
      cpf: data.getCpf(),
      cnpj: data.getCnpj(),
    });

    const savedProfile = await this.repository.save(profileEntity);

    return ProfilePO.create({
      name: savedProfile.name,
      email: savedProfile.email,
      password: savedProfile.password,
      phone: savedProfile.phone,
      cpf: savedProfile.cpf,
      cnpj: savedProfile.cnpj,
    });
  }
}

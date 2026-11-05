import { Body, Controller, Post } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto.js';
import { ProfileService } from './profile.service.js';

@Controller({
  version: '1',
  path: 'profile',
})
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  create(@Body() createProfileDto: CreateProfileDto) {
    console.log('createProfileDto', createProfileDto);
    return this.profileService.createProfile(createProfileDto);
  }
}

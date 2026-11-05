import { ProfilePO } from './entities/profile.js';

export abstract class ProfileContract {
  abstract create(data: ProfilePO): Promise<ProfilePO>;
}

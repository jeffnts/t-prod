import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';
import { TasksModule } from './tasks/tasks.module';
import { TimesModule } from './times/times.module';

@Module({
  imports: [AuthModule, UsersModule, ProjectsModule, TasksModule, TimesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

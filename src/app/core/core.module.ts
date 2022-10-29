import { ErrorHandler, NgModule } from '@angular/core';
import { GlobalErrorHandler } from './handlers/error-logger.handler';

@NgModule({
  imports: [],
  exports: [],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
  ],
})
export class CoreModule {}

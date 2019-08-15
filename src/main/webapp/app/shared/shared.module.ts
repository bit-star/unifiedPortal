import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UnifiedPortalSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [UnifiedPortalSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [UnifiedPortalSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UnifiedPortalSharedModule {
  static forRoot() {
    return {
      ngModule: UnifiedPortalSharedModule
    };
  }
}

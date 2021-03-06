/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/debug_context';
import * as import1 from '../../../../src/app-components/404/notfound404.component';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view';
import * as import4 from '@angular/core/src/linker/element';
import * as import5 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/di/injector';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/change_detection';
import * as import9 from '../../../../src/app-components/services/appstate.service';
import * as import10 from '../../../../src/app-components/services/authentication.service';
import * as import11 from '@angular/core/src/metadata/view';
import * as import12 from '@angular/core/src/linker/component_factory';
const nodeDebugInfos_NotFound404Component_Host0:import0.StaticNodeDebugInfo[] = [new import0.StaticNodeDebugInfo([import1.NotFound404Component],import1.NotFound404Component,{})];
var renderType_NotFound404Component_Host:import2.RenderComponentType = (null as any);
class _View_NotFound404Component_Host0 extends import3.DebugAppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import4.AppElement;
  _NotFound404Component_0_4:import1.NotFound404Component;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement) {
    super(_View_NotFound404Component_Host0,renderType_NotFound404Component_Host,import7.ViewType.HOST,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_NotFound404Component_Host0);
  }
  createInternal(rootSelector:string):import4.AppElement {
    this._el_0 = this.selectOrCreateHostElement('NotFound404',rootSelector,this.debug(0,0,0));
    this._appEl_0 = new import4.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_NotFound404Component0(this.viewUtils,this.injector(0),this._appEl_0);
    this._NotFound404Component_0_4 = new import1.NotFound404Component(this.parentInjector.get(import9.AppState),this.parentInjector.get(import10.Authentication));
    this._appEl_0.initComponent(this._NotFound404Component_0_4,[],compView_0);
    compView_0.create(this._NotFound404Component_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import1.NotFound404Component) && (0 === requestNodeIndex))) { return this._NotFound404Component_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._NotFound404Component_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      this.debug(0,0,0);
      if ((this.numberOfChecks === 0)) { this._NotFound404Component_0_4.ngAfterViewInit(); }
    }
  }
}
function viewFactory_NotFound404Component_Host0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement):import3.AppView<any> {
  if ((renderType_NotFound404Component_Host === (null as any))) { (renderType_NotFound404Component_Host = viewUtils.createRenderComponentType('',0,import11.ViewEncapsulation.None,[],{})); }
  return new _View_NotFound404Component_Host0(viewUtils,parentInjector,declarationEl);
}
export const NotFound404ComponentNgFactory:import12.ComponentFactory<import1.NotFound404Component> = new import12.ComponentFactory<import1.NotFound404Component>('NotFound404',viewFactory_NotFound404Component_Host0,import1.NotFound404Component);
const styles_NotFound404Component:any[] = [];
const nodeDebugInfos_NotFound404Component0:import0.StaticNodeDebugInfo[] = [
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{})
]
;
var renderType_NotFound404Component:import2.RenderComponentType = (null as any);
class _View_NotFound404Component0 extends import3.DebugAppView<import1.NotFound404Component> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _text_7:any;
  _text_8:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement) {
    super(_View_NotFound404Component0,renderType_NotFound404Component,import7.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_NotFound404Component0);
  }
  createInternal(rootSelector:string):import4.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'div',this.debug(0,0,0));
    this.renderer.setElementAttribute(this._el_0,'class','card-panel');
    this._text_1 = this.renderer.createText(this._el_0,'\n   ',this.debug(1,0,24));
    this._el_2 = this.renderer.createElement(this._el_0,'h1',this.debug(2,1,3));
    this._text_3 = this.renderer.createText(this._el_2,'404 Page Not Found!',this.debug(3,1,7));
    this._text_4 = this.renderer.createText(this._el_0,'\n   ',this.debug(4,1,31));
    this._el_5 = this.renderer.createElement(this._el_0,'p',this.debug(5,2,3));
    this._text_6 = this.renderer.createText(this._el_5,'Check the website address and try again',this.debug(6,2,6));
    this._text_7 = this.renderer.createText(this._el_0,'\n',this.debug(7,2,49));
    this._text_8 = this.renderer.createText(parentRenderNode,'\n',this.debug(8,3,6));
    this.init([],[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7,
      this._text_8
    ]
    ,[],[]);
    return (null as any);
  }
}
export function viewFactory_NotFound404Component0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement):import3.AppView<import1.NotFound404Component> {
  if ((renderType_NotFound404Component === (null as any))) { (renderType_NotFound404Component = viewUtils.createRenderComponentType('C:/Development/angular2-webpack2-dotnet-starter/src/app-components/404/NotFound404.template.html',0,import11.ViewEncapsulation.None,styles_NotFound404Component,{})); }
  return new _View_NotFound404Component0(viewUtils,parentInjector,declarationEl);
}
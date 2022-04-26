import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  Optional,
  Self,
  ViewChild,
} from '@angular/core';

import { NgControl } from '@angular/forms';
import { AbstractTuiControl, TuiNativeFocusableElement } from '@taiga-ui/cdk';
import { TuiPrimitiveTextfieldComponent } from '@taiga-ui/core';

@Component({
  selector: 'app-forgot-pw-page',
  templateUrl: './forgot-pw-page.component.html',
  styleUrls: ['./forgot-pw-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgotPwPageComponent  extends AbstractTuiControl<string> {

  pin = "";
  newPassword1 = "";
  newPassword2 = "";

  @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;
 
    private isPasswordHidden = true;
 
    constructor( 
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
    ) {
        super(control, changeDetectorRef);
    }
 
    get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return this.computedDisabled || !this.textfield
            ? null
            : this.textfield.nativeFocusableElement;
    }
 
    get focused(): boolean {
        return !!this.textfield && this.textfield.focused;
    }
 
    get icon(): string {
        return this.isPasswordHidden ? 'tuiIconHideLarge' : 'tuiIconShowLarge';
    }
 
    get hint(): string {
        return this.isPasswordHidden ? 'Show password' : 'Hide password';
    }
 
    get inputType(): string {
        return this.isPasswordHidden ? 'password' : 'text';
    }
 
    onValueChange(textValue: string) {
        this.updateValue(textValue);
    }
 
    onFocused(focused: boolean) {
        this.updateFocused(focused);
    }
 
    togglePasswordVisibility() {
        this.isPasswordHidden = !this.isPasswordHidden;
    }
 
    protected getFallbackValue(): string {
        return '';
    }

    changePasword(){
      console.log("zurücksetzen");
    }

}

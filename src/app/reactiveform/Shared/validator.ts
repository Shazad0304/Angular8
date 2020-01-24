 import {AbstractControl} from '@angular/forms';

 export function forbiddenvali(control: AbstractControl){

    const forbid  = /admin/.test(control.value);
    return forbid ? {'forbidName':{value:control.value}} : null;
 }


 export function matchPass(control: AbstractControl){

   const pass = control.get('password');
   const cpass  = control.get('cpassword');

   if(pass.pristine || cpass.pristine){
      return null;
   }

   return pass && cpass && pass.value != cpass.value ? {'misMatch':true} : null;
}
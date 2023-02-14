

export function validation_details(value) {
       var format = /[!@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?0-9]+/;
       if (value == "" || value != "not_selected") {
         if (value) {
           if (!value.startsWith(" ")) {
             if (value.length >= 2) {
               if (!format.test(value)) {
                   if (!value.endsWith(" ")) {
                     return {
                       class: "pass",
                     };
                   } else
                     return {
                       class: "warn",
                       msg: (
                         <>
                           <small class="text-danger">
                             Cannot end with a white space
                           </small>
                         </>
                       ),
                     };
                 } else
                   
              
                 return {
                   class: "warn",
                   msg: (
                     <>
                       <small class="text-danger">
                         Cannot contain symbol or number.
                       </small>
                     </>
                   ),
                 };
             } else
               return {
                 class: "warn",
                 msg: (
                   <>
                     <small class="text-danger">Min 2 tetter.</small>
                   </>
                 ),
               };
           } else
             return {
               class: "warn",
               msg: (
                 <>
                   <small class="text-danger">Cannot start with empty space</small>
                 </>
               ),
             };
         } else
           return {
             class: "warn",
             msg: (
               <>
                 <small class="text-danger">Required</small>
               </>
             ),
           };
       }
       if (value == "not_selected") return "";
     }

export function validation_email(value) {
       if (value == "" || value != "not_selected") {
         // console.log(value);
         var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{3,4})+$/; //{3,4}is used to change the count of word after .com or net
         if (value) {
           if (regex.test(value)) {
             return {
               class: "pass",
             };
           } else {
             return {
               class: "warn",
               msg: (
                 <>
                   <small class="text-danger">Please enter a valid E-mail</small>
                 </>
               ),
             };
           }
         } else {
           return {
             class: "warn",
             msg: (
               <>
                 <small class="text-danger">This field is required.</small>
               </>
             ),
           };
         }
       }
       if (value == "not_selected") return "";
     }



     export function validation_mobile_number(value) {
       if (value == "" || value != "not_selected") {
         console.log(value);
         var phoneno = /^\d{10}$/;
         if (value) {
           if (phoneno.test(value)) {
             return {
               class: "pass",
             };
           } else {
             return {
               class: "warn",
               msg: (
                 <>
                   <small class="text-danger">
                     Please Enter A Valid Phone Number
                   </small>
                 </>
               ),
             };
           }
         } else
           return {
             class: "warn",
             msg: (
               <>
                 <small class="text-danger">This field is required.</small>
               </>
             ),
           };
       }
       if (value == "not_selected") return "";
     }
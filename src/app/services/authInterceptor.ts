import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
//chaque requete http intercepté par token
//requete http associé par token
//helps us to modify the HTTP Request by intercepting it before the Request is sent to the back end
//we did it because chaque requete doit etre authorized
//send token from browser to server by interceptor
// yjib token mn back yhotu f local storage baed ujibu m local storage w yhotu al ay requete besh tmchi ll back :)
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   // console.log(localStorage.getItem('token'))
   // console.log(req.url)
    const accessToken = localStorage.getItem('token');
    // console.log(localStorage.getItem("accessToken"));
    if (accessToken) {
      //clone http request plus add modification to the request cloned
      const cloned = req.clone({
        setHeaders: { Authorization: localStorage.getItem('token') }//key value
      });
      return next.handle(cloned);
    }
    else {
      //block middleware chain
      return next.handle(req)
    }
    throw new Error("Method not implemented.");
  }
}
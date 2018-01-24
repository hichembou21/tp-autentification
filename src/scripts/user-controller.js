import { ModelUser } from "./model-user";
import { FormView } from "./form";
import { User } from "./user";


export class UserController {

    constructor() {
        this.modelUser = new ModelUser();
        this.view = new FormView();
        let _this = this;

        let form = document.querySelector(".form-sign-up");
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            let name = document.querySelector("#input-name").value;
            let surname = document.querySelector("#input-surname").value;
            let birthdate = document.querySelector("#input-birthdate").value;
            let email = document.querySelector("#input-email").value;
            let password = document.querySelector("#input-password").value;

            _this.modelUser.addUser(new User(name, surname, birthdate, email, password));            
        });
    }
}
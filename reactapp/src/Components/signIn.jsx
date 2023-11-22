import React from 'react'

export default function SignIn() {
    return (
        <div>
            <div class="login-box">
                <h1>Login</h1>
                <form name="login">
                    <div class="textbox">
                        <i class="fas fa-user"></i>

                        Username
                        <input type="text" name="userid" />
                    </div>

                    <div class="textbox">
                        <i class="fas fa-lock"></i>
                        Password<input type="password" name="pswrd" />
                    </div>
                    <input type="button" onclick="check(this.form)" value="Login" />
                    <input type="reset" value="Cancel" />
                </form>

            </div>
        </div >
    )
}

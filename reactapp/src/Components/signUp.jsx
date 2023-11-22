import React from 'react'

export default function SignIn() {
    return (
        <div>
            <div class="login-box">
                <h1>Create Account</h1>
                <form name="signup">
                    <div class="textbox">
                        <i class="fas fa-user"></i>

                        Username
                        <input type="text" name="userid" />
                    </div>

                    <div class="textbox">
                        <i class="fas fa-lock"></i>
                        Email<input type="email" name="email" />
                    </div>
                    <div class="textbox">
                        <i class="fas fa-lock"></i>
                        Password<input type="password" name="pswrd" />
                    </div>
                    <input type="button" onclick="check(this.form)" value="Signup" />
                    
                </form>

            </div>
        </div >
    )
}

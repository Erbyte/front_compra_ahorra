import LoginButton from "./login-button";
import Search from "./search";
import ShoppingCartButton from "./shopping-cart-button";
import SignUpButton from "./sign-up-button";

export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="javascript:void(0)">Compra&Ahorra</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="mynavbar">
                    <ul class="navbar-nav me-auto">
                        <Search />
                    </ul>
                    <SignUpButton />
                    <LoginButton />
                    <ShoppingCartButton />
                </div>
            </div>
        </nav>
    )
}
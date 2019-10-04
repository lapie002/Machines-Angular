export class AuthService {
  isAuth = false;

  getIsAuth(): boolean {
    return this.isAuth;
  }

  signIn() {
    return new Promise( (resolve, reject) => {
      setTimeout(
        () => {
          this.isAuth = true;
        }, 4000
      );
    });
  }

  signOut() {
    this.isAuth = false;
  }
}

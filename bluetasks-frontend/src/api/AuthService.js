class AuthService {
  login(username, password) {
    console.log(`Login: ${username}; Senha: ${password}`);
  }
}

export default new AuthService();

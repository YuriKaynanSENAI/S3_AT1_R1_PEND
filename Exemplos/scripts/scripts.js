console.log("JAVASCRIPT CONECTADO!");

//CLASSE - MOLDE PARA CRIAR OBJETOS.
class Veiculo {
  //CONSTRUCTOR - É UM MÉTODO ESPECIAL DO JAVASCRIPT.
  constructor(marca, modelo) {
    //THIS - É UMA PALAVRA-CHAVE ESPECIAL, QUE SE REFERE AO PRÓPRIO OBJETO CRIADO.
    this.marca = marca;
    this.modelo = modelo;
  }
}

// OBJETO - É UMA INBTANCIA DA CLASSE.
const carro = new Veiculo("Toyota", "Corolla");
console.log(carro.marca);

/*---------------------------------------------------------------------------------------*/

class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
}

const Celular = new Produto("Nokia", 1500);
const Notebook = new Produto("Notebook", 5000);

console.log(
  `Nome do produto:${Celular.nome} - Preço do produto:${Celular.preco}`
);

console.log(Notebook.nome);

/*---------------------------------------------------------------------------------------*/

class ContaBancaria {
  constructor(saldoInicial) {
    this.saldoInicial = saldoInicial;
  }
  //MÉTODO - SÃO FUNÇÕES DENTRO DE UMA CLASSE, SERVEM PARA EXECUTAR AÇÕES
  //OU MANIPULAR OSS ATRIBUTOS!
  depositar(valor) {
    //this.saldo = this.saldo + valor;
    this.saldo += valor;
  }

  getSaldo() {
    return ` Seu saldo é: R$${this.saldo.toFixed(2)}`;
  }
}
const conta = new ContaBancaria(1000);
console.log(conta.getSaldo());
conta.depositar(1000);
console.log(conta.getSaldo());

/*---------------------------------------------------------------------------------------*/

class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  //MÉTODO - SÃO FUNÇÕES DENTRO DE UMA CLASSE, SERVEM PARA EXECUTAR AÇÕES
  //OU MANIPULAR OSS ATRIBUTOS!
  apresentacao() {
    return `Olá  meu nome é ${this.nome}, tenho ${this.idade} anos!`;
  }
}

const minhaApresentcao = new Pessoa("Yuri", 17);
console.log(minhaApresentcao.apresentacao());

/*---------------------------------------------------------------------------------------*/

class Steam {
  //ATRIBUTO ENCAPSULADO - TRADUZINDO PRIVADO
  //APENAS A CLASSE E OS MÉTODO DENTRO DA CLASSE TEM ACESSO
  #saldo;

  constructor(saldoInicialSteam) {
    this.#saldo = saldoInicialSteam;
  }

  depositarValorSteam(valor) {
    if (valor > 0) {
      this.#saldo += valor;
    } else {
      console.log("O depósito é inválido!");
    }
  }

  getSaldoSteam() {
    return `Seus slado atual na Steam é ${this.#saldo}`;
  }
}

const steam = new Steam(1000);
steam.depositarValorSteam(300);
console.log(steam.getSaldoSteam());

/*---------------------------------------------------------------------------------------*/

class Usuario {
  constructor(senha) {
    //this.senha = "123456789"
    this.senha = senha;
  }

  // MÉTODO ENCAPSULADO - TRADUZINDO ELE ESTA PRIVADO,
  // APENASS OS ATRIBUTOS DENTRO DESTA CLASSE TEM ACESSO A ELE!
  #verificarForcaSenha(senha) {
    return senha.length > 6 ? true : false;
  }

  criarConta() {
    if (this.#verificarForcaSenha(this.senha)) {
      return console.log("Conta criada!");
    }

    return console.log("Conta inválida");
  }
}

const user = new Usuario("123456789");
user.criarConta();

/*---------------------------------------------------------------------------------------*/

// EXTENDS - PALAVRA-CHAVE UTILIZADA EM JAVASCRIPT PARA CIRAR UMA CLASSE FILHA
//QUE HERDA UMA CLASSE PAI, NESTE CASO CARRO (FILHA) HERDA VEICULO (PAI)
class Carro extends Veiculo {
  constructor(marca, modelo, portas) {
    //SUPER - UTILIZADO PARA CHAMAR O CONTRUCTOR DA CLASSE PAI
    //E REUTILIZAR SEUS ATRIBUTOS
    super(marca, modelo);
    this.portas = portas;
  }

  info() {
    console.log(
      `A marca do seu carro é: ${this.marca}, seu modelo é: ${this.modelo} e ele possui ${this.portas} portas `
    );
  }
}

const meuCarro = new Carro("Honda", "Civic", 4);
meuCarro.info();

/*---------------------------------------------------------------------------------------*/

class Funcionario {
  constructor(nome, salario) {
    this.nome = nome;
    this.salario = salario;
  }

  mostrarDados() {
    console.log(
      `Funcionários: ${this.nome}, salário: ${this.salario.toFixed(2)}`
    );
  }
}

// EXTENDS - PALAVRA-CHAVE UTILIZADA EM JAVASCRIPT PARA CIRAR UMA CLASSE FILHA
//QUE HERDA UMA CLASSE PAI, NESTE CASO GERENTE (FILHA) HERDA FUNCIONARIO (PAI)
class Gerente extends Funcionario {
  constructor(nome, salario, tipo) {
    //SUPER - UTILIZADO PARA CHAMAR O CONTRUCTOR DA CLASSE PAI
    //E REUTILIZAR SEUS ATRIBUTOS
    super(nome, salario);
    this.tipo = tipo;
  }

  mostrarSetor() {
    console.log(`${this.nome} é  gerente do setor ${this.tipo}`);
  }
}

const gerente = new Gerente("Alcindo", 10000, "TI");
gerente.mostrarDados();
gerente.mostrarSetor();

console.log("JS CONECTADO!");

class Funcionario {
  constructor(nome, salario, dataAdmissao) {
    this.nome = nome;
    this.salario = salario;
    this.dataAdmissao = dataAdmissao;
    this.bonus = (salario * 10) / 100;
  }

  calcularBonus() {
    console.log(
      `${this.nome} terá um bônus de 10% equivalente a R$${this.bonus.toFixed(
        2
      )}`
    );
  }

  exibirDetalhes() {
    console.log(
      `Funcionário: ${this.nome}, salário: R$${this.salario.toFixed(
        2
      )}, foi admitido: ${this.dataAdmissao}, bônus de: R$${this.bonus.toFixed(
        2
      )}`
    );
  }
}

class Gerente extends Funcionario {
  constructor(nome, salario, dataAdmissao, departamento) {
    super(nome, salario, dataAdmissao);
    this.departamento = departamento;
    this.bonus = (salario * 20) / 100;
  }

  calcularBonus() {
    console.log(
      `O gerente ${
        this.nome
      } terá um bônus de 20% equivalente a R$${this.bonus.toFixed(2)}`
    );
  }

  exibirDetalhes() {
    console.log(
      `Gerente: ${this.nome}, salário: R$${this.salario.toFixed(
        2
      )}, foi admitido: ${this.dataAdmissao}, bônus de: R$${this.bonus.toFixed(
        2
      )}, trabalha no departamento de ${this.departamento}`
    );
  }
}
const gerente = new Gerente("Alcindo", 1000, "01/04/2025", "TI");
gerente.calcularBonus();
gerente.exibirDetalhes();

const funcionario = new Funcionario("Yuri", 1000, "01/04/2025");
funcionario.calcularBonus();
funcionario.exibirDetalhes();

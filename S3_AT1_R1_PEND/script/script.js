// Classe Gerente que herda de Funcionario
class Gerente extends Funcionario {
  constructor(nome, salario, dataAdmissao, departamento) {
    super(nome, salario, dataAdmissao); // Chama o construtor da classe base
    this.departamento = departamento; // Adiciona um novo atributo: departamento
    this.bonus = (salario * 20) / 100; // Gerentes recebem 20% de bônus em vez de 10%
  }

  // Sobrescrevendo o método calcularBonus para exibir a nova porcentagem
  calcularBonus() {
    console.log(
      `O gerente ${
        this.nome
      } terá um bônus de 20% equivalente a R$${this.bonus.toFixed(2)}`
    );
  }

  // Sobrescrevendo o método exibirDetalhes para incluir o departamento
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

// Criando um objeto Gerente e chamando seus métodos
"Alcindo", 1000, "01/04/2025", "TI";
gerente.calcularBonus(); // Exibe o bônus do gerente
gerente.exibirDetalhes(); // Exibe os detalhes do gerente

// Criando um objeto Funcionario e chamando seus métodos
const funcionario = new Funcionario("Yuri", 1000, "01/04/2025");
funcionario.calcularBonus(); // Exibe o bônus do funcionário
funcionario.exibirDetalhes(); // Exibe os detalhes do funcionário

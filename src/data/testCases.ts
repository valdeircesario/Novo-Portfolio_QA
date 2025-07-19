import { TestCase } from '../types';

export const testCases: TestCase[] = [
  {
    id: 1,
    name: 'Autenticação de Login',
    status: 'passed',
    description: 'Verificar se os usuários conseguem fazer login com credenciais válidas'
  },
  {
    id: 2,
    name: 'Funcionalidade de Reset de Senha',
    status: 'passed',
    description: 'Garantir que o email de reset de senha é entregue e a nova senha funciona'
  },
  {
    id: 3,
    name: 'Resultados de Busca de Produtos',
    status: 'failed',
    description: 'Verificar se a funcionalidade de busca retorna produtos relevantes'
  },
  {
    id: 4,
    name: 'Cálculo do Carrinho de Compras',
    status: 'passed',
    description: 'Validar o cálculo do preço total incluindo impostos e frete'
  },
  {
    id: 5,
    name: 'Processo de Checkout',
    status: 'pending',
    description: 'Testar o processo completo de checkout do carrinho até a confirmação'
  },
  {
    id: 6,
    name: 'Layout Responsivo Mobile',
    status: 'passed',
    description: 'Verificar se o site se adapta adequadamente aos tamanhos de tela mobile'
  },
];
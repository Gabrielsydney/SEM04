import CalculadoraImc from './components/calculadoraImc'
import Pessoa from './components/pessoa'

export default function App(){

  return(
    <div>
      <h1>QUESTÃO 1 </h1>
      <Pessoa nome='Ana' sobrenome='Silva' cpf='000000000-01' telefone='(84) 00000-0001' email='ana@gmail.com'/>
      <h1>-----------------------------------</h1>
      <Pessoa nome='Beto' sobrenome='Andrade' cpf='000000000-02' telefone='(84) 00000-0002' email='beto@gmail.com'/>
      <h1>-----------------------------------</h1>
      <Pessoa nome='Chico' sobrenome='Bento' cpf='000000000-03' telefone='(84) 00000-0003' email='chico@gmail.com'/>
      <h1>-----------------------------------</h1>
      <Pessoa nome='Daniela' sobrenome='Mota' cpf='000000000-04' telefone='(84) 00000-0004' email='dani@gmail.com'/>
      <h1>-----------------------------------</h1>
      <Pessoa nome='Emanuel' sobrenome='Santana' cpf='000000000-05' telefone='(84) 00000-0005' email='manu@gmail.com'/>
      <h1>-----------------------------------</h1>
      <h1>QUESTÃO 2</h1>
      <CalculadoraImc kg='70' h='1.75' />
    </div>
  )
}
import { Widget } from "./components/Widget";

export function App() {
  return <Widget/>;
}




/** 
 * interface ButtonProps {
  text?: string; // A ? torna a propriedade como opcional.
}
// as cores podem ser configuradas colocando no lugar do  bg-violet-500, isto: bg-[#8257e6] - isso é um código de cor hexadecimal.
function Button(props: ButtonProps) {
  return <button className = "bg-violet-500 px-4 h-10 rounded text-violet-100 hover:bg-violet-700 transition-colors">{props.text ?? 'Default'}</button>; // Se não for passado o text o valar Default assumirá o lugar.
}                                                                                          
                                                                                          
function App() {                                                                                       
  return (                                                                              
    <div className = "flex gap-2">
      <Button text = "Enviar"/>
      <Button text = "ok" />
      <Button />                         
    </div>
  ) // Isto é um JSX.
}

export default App
*/


/**
 * A function App é um componente react, pois retorna um html.
 * Por padrão, o nome de um componente ou função inicia-se com 
 * letra maiúscula: function App(){}.
 * Os componentes ou função inicia-se com letra maiúscula e as
 * tags html são inscritas com letra minuscula. 
 * Exemplo:
 * function App() {
 * return <h1>Hello Rocketseat</h1 - Retorno de uma tag html que (JSX)
 * }
 * Aprendemos até aqui o core do reactjs, ou seja, sobre os componentes, sobre JSX e 
 * sobre o props.
 */

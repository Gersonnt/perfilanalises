import { Component } from "react/cjs/react.production.min";
import logoImg from '../logo-l3a.jfif'
import emailjs from 'emailjs-com'


class  Questions extends Component {
    state = {
        q1 : "x",
        q2 : "x",
        q3 : "x",
        q4 : "x",
        q5 : "x",
        q6 : "x",
        q7 : "x",
        q8 : "x",
        q9 : "x",
        q10 : "x",
        q11 : "x",
        q12 : "x",
        q13 : "x",
        q14 : "x",
        q15 : "x",
        q16 : "x",
        q17 : "x",
        q18 : "x",
        q19 : "x",
        q20 : "x",
        q21 : "x",
        q22 : "x",
        q23 : "x",
        q24 : "x",
        q25 : "x",
        personName : 'x',
    }
    onChange = e =>{
    this.setState({[e.target.name] : e.target.value})
    };
    

    render(){

        function onSubmit(e) {
            if(gato + lobo + aguia + tubarao === 100){    
                e.preventDefault(); 
                emailjs.sendForm('service_1enkxen', 'template_ydmyun9', e.target, 'user_kBs8m9T2EoaDaI8yVqXbh')
                .then((result) => {  
                     
                    alert('Obrigado por responder, entraremos em contato em breve!');
                    // eslint-disable-next-line
                    setTimeout("location.href = 'http://www.l3asistemas.com.br';",100);               
                }, (error) => {
                    alert('Erro');
                });
            }else{
                    e.preventDefault();
                    alert('Por favor, responda à todas as perguntas antes de enviar!')
            }
            
        }

        const {
        q1,
        q2,
        q3,
        q4,
        q5,
        q6,
        q7,
        q8,
        q9,
        q10,
        q11,
        q12,
        q13,
        q14,
        q15,
        q16,
        q17,
        q18,
        q19,
        q20,
        q21,
        q22,
        q23,
        q24,
        q25,
        personName
        } = this.state;

        var isActive = Array(25);
        var lobo = 0;
        var aguia = 0;
        var gato = 0;
        var tubarao = 0;

        
        
        

        function resultadoPerfil(){

            for(let i = 0; i < 26; i++){
                if(isActive[i] === "I" & i < 25){
                    aguia = aguia + 1;
                }if(isActive[i] === "C" & i < 25){
                    lobo = lobo + 1;
                }if(isActive[i] === 'O' & i < 25){
                    tubarao = tubarao +1;
                }if(isActive[i] === 'A' & i < 25){
                    gato = gato + 1;
                }else{
                    
                }
            }
            aguia = aguia * 4;
            lobo = lobo * 4;
            tubarao = tubarao * 4;
            gato = gato * 4;
        
            return {
                aguia,
                lobo,
                gato,
                tubarao
            }
        }

        return (
            
        
            <div className='App'>
            <form onSubmit={onSubmit}>
                <header className="App-header">
                    <h1><a href="http://www.l3asistemas.com.br"><img alt="L3A Engenharia" className="logo" src={logoImg}></img></a></h1>
                </header>
                <div className="form-edit">
                <div>
                    <h2>Eu sou...</h2>
                    
                    <input  type="radio"
                            value="I"
                            name="q1"
                            checked={q1 === "I" ? isActive[0] = q1 : ""}
                            onChange={this.onChange}
                        
                        /><label>Idealista, criativo e visionário</label><br></br>

                    <input  type="radio"
                            value="C"
                            name="q1"
                            checked={q1 === "C" ? isActive[0] = q1 : ""}
                            onChange={this.onChange}
                        
                        /><label>Divertido, espiritual e benéfico</label><br></br>

                    <input  type="radio"
                            value="O"
                            name="q1"
                            checked={q1 === "O" ? isActive[0] = q1 : ""}
                            onChange={this.onChange}
                        
                        /><label>Confiável, meticuloso e previsível</label><br></br>

                    <input  type="radio"
                            value="A"
                            name="q1"
                            checked={q1 === "A" ? isActive[0] = q1 : ""}
                            onChange={this.onChange}
                        
                        /><label>Focado, determinado e persistente</label><br></br>                 
                    
                </div>          
                    
                <div>
                    <h2>Eu gosto de...</h2>
                    
                    <input  type="radio"
                            value="I"
                            name="q2"
                            checked={q2 === "I" ? isActive[1] = q2 : ""}
                            onChange={this.onChange}
                        
                        /><label>Explorar novas rotas</label><br></br>
                    <input  type="radio"
                            value="C"
                            name="q2"
                            checked={q2 === "C" ? isActive[1] = q2 : ""}
                            onChange={this.onChange}
                        
                        /><label>Conversar com os passageiros</label><br></br>
                    <input  type="radio"
                            value="O"
                            name="q2"
                            checked={q2 === "O" ? isActive[1] = q2 : ""}
                            onChange={this.onChange}
                        
                        /><label>Planejar a viagem</label><br></br>
                    <input  type="radio"
                            value="A"
                            name="q2"
                            checked={q2 === "A" ? isActive[1] = q2 : ""}
                            onChange={this.onChange}
                        
                        /><label>Ser piloto</label><br></br>
                    
                </div>
                
                <div>
                    <h2>Se você quiser se dar bem comigo...</h2>
                    
                    <input  type="radio"
                            value="I"
                            name="q3"
                            checked={q3 === "I" ? isActive[2] = q3 : ""}
                            onChange={this.onChange} 
                        /><label>Me dê liberdade</label><br></br>
                    <input  type="radio"
                            value="C"
                            name="q3"
                            checked={q3 === "C" ? isActive[2] = q3 : ""}
                            onChange={this.onChange} 
                        /><label>Seja amigável, carinhoso e compreensivo</label><br></br>
                    <input  type="radio"
                            value="O"
                            name="q3"
                            checked={q3 === "O" ? isActive[2] = q3 : ""}
                            onChange={this.onChange}
                        
                        /><label>Me deixe saber sua expectativa</label><br></br>
                    <input  type="radio"
                            value="A"
                            name="q3"
                            checked={q3 === "A" ? isActive[2] = q3 : ""}
                            onChange={this.onChange}
                        
                        /><label>Lidere, siga ou saia do caminho</label><br></br>
                
                </div>

                <div>
                    <h2>Para conseguir obter bons resultados é preciso...</h2>
                    
                    <input  type="radio"
                            value="I"
                            name="q4"
                            checked={q4 === "I" ? isActive[3] = q4 : ""}
                            onChange={this.onChange} 
                        /><label>Ter incertezas</label><br></br>
                    <input  type="radio"
                            value="C"
                            name="q4"
                            checked={q4 === "C" ? isActive[3] = q4 : ""}
                            onChange={this.onChange} 
                        /><label>Diversão e celebração</label><br></br>
                    <input  type="radio"
                            value="O"
                            name="q4"
                            checked={q4 === "O" ? isActive[3] = q4 : ""}
                            onChange={this.onChange}
                        
                        /><label>Controlar o essencial</label><br></br>
                    <input  type="radio"
                            value="A"
                            name="q4"
                            checked={q4 === "A" ? isActive[3] = q4 : ""}
                            onChange={this.onChange}
                        
                        /><label>Planejar e obter recursos</label><br></br>
                
                </div>  

                <div>
                    <h2>Eu me divirto quando...</h2>
                    
                    <input  type="radio"
                            value="I"
                            name="q5"
                            checked={q5 === "I" ? isActive[4] = q5 : ""}
                            onChange={this.onChange} 
                    
                        /><label>Tenho novidades</label><br></br>
                    <input  type="radio"
                            value="C"
                            name="q5"
                            checked={q5 === "C" ? isActive[4] = q5 : ""}
                            onChange={this.onChange} 
                        /><label>Estou com os outros</label><br></br>
                    <input  type="radio"
                            value="O"
                            name="q5"
                            checked={q5 === "O" ? isActive[4] = q5 : ""}
                            onChange={this.onChange}
                        
                        /><label>Determino as regras</label><br></br>
                    <input  type="radio"
                            value="A"
                            name="q5"
                            checked={q5 === "A" ? isActive[4] = q5 : ""}
                            onChange={this.onChange}
                        
                        /><label>Estou me exercitando</label><br></br>
                
                </div>    
                
                <div>
                    <h2>Eu penso que...</h2>
                    
                    <input  type="radio"
                            value="I"
                            name="q6"
                            checked={q6 === "I" ? isActive[5] = q6 : ""}
                            onChange={this.onChange} 
                    
                        /><label>É bom ser manso, mas andar com um porrete</label><br></br>
                    <input  type="radio"
                            value="C"
                            name="q6"
                            checked={q6 === "C" ? isActive[5] = q6 : ""}
                            onChange={this.onChange} 
                    
                        /><label>Unidos venceremos, divididos perderemos</label><br></br>

                    <input  type="radio"
                            value="O"
                            name="q6"
                            checked={q6 === "O" ? isActive[5] = q6 : ""}
                            onChange={this.onChange}
                        
                        /><label>Um homem prevenido vale por dois</label><br></br>
                    <input  type="radio"
                            value="A"
                            name="q6"
                            checked={q6 === "A" ? isActive[5] = q6 : ""}
                            onChange={this.onChange}
                        
                        /><label>O ataque é melhor que a defesa</label><br></br>
                
                </div>    
                
                <div>
                    <h2>Minha preocupação é...</h2>
                    
                    <input  type="radio"
                            value="I"
                            name="q7"
                            checked={q7 === "I" ? isActive[6] = q7 : ""}
                            onChange={this.onChange} 
                        /><label>Gerar a ideia global</label><br></br>
                    <input  type="radio"
                            value="C"
                            name="q7"
                            checked={q7 === "C" ? isActive[6] = q7 : ""}
                            onChange={this.onChange} 
                        /><label>Fazer com que as pessoas gostem</label><br></br>
                    <input  type="radio"
                            value="O"
                            name="q7"
                            checked={q7 === "O" ? isActive[6] = q7 : ""}
                            onChange={this.onChange}
                        
                        /><label>Fazer com que funcione</label><br></br>
                    <input  type="radio"
                            value="A"
                            name="q7"
                            checked={q7 === "A" ? isActive[6] = q7 : ""}
                            onChange={this.onChange}
                        
                        /><label>Fazer com que aconteça</label><br></br>
                
                </div>    
                
                <div>
                    <h2>Eu prefiro...</h2>
                    
                    <input  type="radio"
                            value="I"
                            name="q8"
                            checked={q8 === "I" ? isActive[7] = q8 : ""}
                            onChange={this.onChange} 
                        /><label>Perguntas a respostas</label><br></br>
                    <input  type="radio"
                            value="C"
                            name="q8"
                            checked={q8 === "C" ? isActive[7] = q8 : ""}
                            onChange={this.onChange} 
                        /><label>Que todos tenham a chance de ser ouvido</label><br></br>
                    <input  type="radio"
                            value="O"
                            name="q8"
                            checked={q8 === "O" ? isActive[7] = q8 : ""}
                            onChange={this.onChange}
                        
                        /><label>Ter todos os detalhes</label><br></br>
                    <input  type="radio"
                            value="A"
                            name="q8"
                            checked={q8 === "A" ? isActive[7] = q8 : ""}
                            onChange={this.onChange}
                        
                        /><label>Vantagens a meu favor</label><br></br>
                
                </div>    
                
                <div>
                    <h2>Eu gosto de...</h2>
                    
                    <input  type="radio"
                            value="I"
                            name="q9"
                            checked={q9 === "I" ? isActive[8] = q9 : ""}
                            onChange={this.onChange} 
                        /><label>Tornar as pessoas confortáveis</label><br></br>
                    <input  type="radio"
                            value="C"
                            name="q9"
                            checked={q9 === "C" ? isActive[8] = q9 : ""}
                            onChange={this.onChange} 
                        /><label>Construir memórias</label><br></br>
                    <input  type="radio"
                            value="O"
                            name="q9"
                            checked={q9 === "O" ? isActive[8] = q9 : ""}
                            onChange={this.onChange}
                        
                        /><label>Fazer sentido</label><br></br>
                    <input  type="radio"
                            value="A"
                            name="q9"
                            checked={q9 === "A" ? isActive[8] = q9 : ""}
                            onChange={this.onChange}
                        
                        /><label>Fazer progresso</label><br></br>
                
                </div>    
                
                <div>
                    <h2>Eu gosto de chegar...</h2>
                    
                    <input  type="radio"
                            value="I"
                            name="q10"
                            checked={q10 === "I" ? isActive[9] = q10 : ""}
                            onChange={this.onChange} 
                        /><label>Em outro lugar</label><br></br>
                    <input  type="radio"
                            value="C"
                            name="q10"
                            checked={q10 === "C" ? isActive[9] = q10 : ""}
                            onChange={this.onChange} 
                        /><label>Junto</label><br></br>
                    <input  type="radio"
                            value="O"
                            name="q10"
                            checked={q10 === "O" ? isActive[9] = q10 : ""}
                            onChange={this.onChange}
                        
                        /><label>Na hora</label><br></br>
                    <input  type="radio"
                            value="A"
                            name="q10"
                            checked={q10 === "A" ? isActive[9] = q10 : ""}
                            onChange={this.onChange}
                        
                        /><label>Na frente</label><br></br>
                
                </div>    
                
                <div>
                    <h2>Um ótimo dia para mim é quando...</h2>
                    
                    <input  type="radio"
                            value="I"
                            name="q11"
                            checked={q11 === "I" ? isActive[10] = q11 : ""}
                            onChange={this.onChange} 
                        /><label>Desfruto de coisas novas e estimulantes</label><br></br>
                    <input  type="radio"
                            value="C"
                            name="q11"
                            checked={q11 === "C" ? isActive[10] = q11 : ""}
                            onChange={this.onChange} 
                        /><label>Me divirto com meus amigos</label><br></br>
                    <input  type="radio"
                            value="O"
                            name="q11"
                            checked={q11 === "O" ? isActive[10] = q11 : ""}
                            onChange={this.onChange}
                        
                        /><label>Tudo segue conforme planejado</label><br></br>
                    <input  type="radio"
                            value="A"
                            name="q11"
                            checked={q11 === "A" ? isActive[10] = q11 : ""}
                            onChange={this.onChange}
                        
                        /><label>Consigo fazer muitas coisas</label><br></br>
                
                </div>    
                
                <div>
                    <h2>Eu vejo a morte como...</h2>
                    
                    <input  type="radio"
                            value="I"
                            name="q12"
                            checked={q12 === "I" ? isActive[11] = q12 : ""}
                            onChange={this.onChange} 
                        /><label>Uma grande aventura misteriosa</label><br></br>
                    <input  type="radio"
                            value="C"
                            name="q12"
                            checked={q12 === "C" ? isActive[11] = q12 : ""}
                            onChange={this.onChange} 
                        /><label>Oportunidade para rever os falecidos</label><br></br>
                    <input  type="radio"
                            value="O"
                            name="q12"
                            checked={q12 === "O" ? isActive[11] = q12 : ""}
                            onChange={this.onChange}
                        
                        /><label>Um modo de receber recompensas</label><br></br>
                    <input  type="radio"
                            value="A"
                            name="q12"
                            checked={q12 === "A" ? isActive[11] = q12 : ""}
                            onChange={this.onChange}
                        
                        /><label>Algo que sempre chega muito cedo</label><br></br>
                
                </div>    
                
                <div>
                    <h2>Minha filosofia de vida é...</h2>
                    
                    <input  type="radio"
                            value="I"
                            name="q13"
                            checked={q13 === "I" ? isActive[12] = q13 : ""}
                            onChange={this.onChange} 
                        /><label>Para ganhar, é necessário inventar novas regras</label><br></br>
                    <input  type="radio"
                            value="C"
                            name="q13"
                            checked={q13 === "C" ? isActive[12] = q13 : ""}
                            onChange={this.onChange} 
                        /><label>Para eu ganhar, ninguém precisa perder</label><br></br>
                    <input  type="radio"
                            value="O"
                            name="q13"
                            checked={q13 === "O" ? isActive[12] = q13 : ""}
                            onChange={this.onChange}
                        
                        /><label>Para ganhar é preciso seguir as regras</label><br></br>
                    <input  type="radio"
                            value="A"
                            name="q13"
                            checked={q13 === "A" ? isActive[12] = q13 : ""}
                            onChange={this.onChange}
                        
                        /><label>Há ganhadores e perdedores, e eu acredito ser um ganhador</label><br></br>
                
                </div>    
                
                <div>
                    <h2>Eu sempre gostei de...</h2>
                    
                    <input  type="radio"
                            value="I"
                            name="q14"
                            checked={q14 === "I" ? isActive[13] = q14 : ""}
                            onChange={this.onChange} 
                        /><label>Explorar</label><br></br>
                    <input  type="radio"
                            value="C"
                            name="q14"
                            checked={q14 === "C" ? isActive[13] = q14 : ""}
                            onChange={this.onChange} 
                        /><label>Realizar uma abordagem natural</label><br></br>
                    <input  type="radio"
                            value="O"
                            name="q14"
                            checked={q14 === "O" ? isActive[13] = q14 : ""}
                            onChange={this.onChange}
                        
                        /><label>Evitar surpresas</label><br></br>
                    <input  type="radio"
                            value="A"
                            name="q14"
                            checked={q14 === "A" ? isActive[13] = q14 : ""}
                            onChange={this.onChange}
                        
                        /><label>Focalizar a meta</label><br></br>
                
                </div>    
                
                <div>
                    <h2>Eu gosto de mudanças se...</h2>
                    
                    <input  type="radio"
                            value="I"
                            name="q15"
                            checked={q15 === "I" ? isActive[14] = q15 : ""}
                            onChange={this.onChange} 
                        /><label>Me der mais liberdade e variedade</label><br></br>
                    <input  type="radio"
                            value="C"
                            name="q15"
                            checked={q15 === "C" ? isActive[14] = q15 : ""}
                            onChange={this.onChange} 
                        /><label>For divertido e puder ser compartilhado</label><br></br>
                    <input  type="radio"
                            value="O"
                            name="q15"
                            checked={q15 === "O" ? isActive[14] = q15 : ""}
                            onChange={this.onChange}
                        
                        /><label>Melhorar ou me der mais controle</label><br></br>
                    <input  type="radio"
                            value="A"
                            name="q15"
                            checked={q15 === "A" ? isActive[14] = q15 : ""}
                            onChange={this.onChange}
                        
                        /><label>Me der uma vantagem competitiva</label><br></br>
                
                </div>    
                
                <div>
                    <h2>Não existe nada de errado em...</h2>
                    
                    <input  type="radio"
                            value="I"
                            name="q16"
                            checked={q16 === "I" ? isActive[15] = q16 : ""}
                            onChange={this.onChange} 
                        /><label>Mudar de ideia</label><br></br>
                    <input  type="radio"
                            value="C"
                            name="q16"
                            checked={q16 === "C" ? isActive[15] = q16 : ""}
                            onChange={this.onChange} 
                        /><label>Colocar os outros na frente</label><br></br>
                    <input  type="radio"
                            value="O"
                            name="q16"
                            checked={q16 === "O" ? isActive[15] = q16 : ""}
                            onChange={this.onChange}
                        
                        /><label>Ser consistente</label><br></br>
                    <input  type="radio"
                            value="A"
                            name="q16"
                            checked={q16 === "A" ? isActive[15] = q16 : ""}
                            onChange={this.onChange}
                        
                        /><label>Se colocar na frente</label><br></br>
                
                </div>    
                
                <div>
                    <h2>Eu gosto de buscar conselhos de...</h2>
                    
                    <input  type="radio"
                            value="I"
                            name="q17"
                            checked={q17 === "I" ? isActive[16] = q17 : ""}
                            onChange={this.onChange} 
                        /><label>Lugares, os mais estranhos</label><br></br>
                    <input  type="radio"
                            value="C"
                            name="q17"
                            checked={q17 === "C" ? isActive[16] = q17 : ""}
                            onChange={this.onChange} 
                        /><label>Anciões e conselheiros</label><br></br>
                    <input  type="radio"
                            value="O"
                            name="q17"
                            checked={q17 === "O" ? isActive[16] = q17 : ""}
                            onChange={this.onChange}
                        
                        /><label>Autoridades no assunto</label><br></br>
                    <input  type="radio"
                            value="A"
                            name="q17"
                            checked={q17 === "A" ? isActive[16] = q17 : ""}
                            onChange={this.onChange}
                        
                        /><label>Pessoas bem-sucedidas</label><br></br>
                
                </div>    
                
                <div>
                    <h2>Meu lema é...</h2>
                    
                    <input  type="radio"
                            value="I"
                            name="q18"
                            checked={q18 === "I" ? isActive[17] = q18 : ""}
                            onChange={this.onChange} 
                        /><label>Fazer o que precisa ser feito</label><br></br>
                    <input  type="radio"
                            value="C"
                            name="q18"
                            checked={q18 === "C" ? isActive[17] = q18 : ""}
                            onChange={this.onChange} 
                        /><label>Fazer junto com o grupo</label><br></br>
                    <input  type="radio"
                            value="O"
                            name="q18"
                            checked={q18 === "O" ? isActive[17] = q18 : ""}
                            onChange={this.onChange}
                        
                        /><label>Fazer bem feito</label><br></br>
                    <input  type="radio"
                            value="A"
                            name="q18"
                            checked={q18 === "A" ? isActive[17] = q18 : ""}
                            onChange={this.onChange}
                        
                        /><label>Simplesmente fazer</label><br></br>
                
                </div>    
                
                <div>
                    <h2>Eu gosto de...</h2>
                    
                    <input  type="radio"
                            value="I"
                            name="q19"
                            checked={q19 === "I" ? isActive[18] = q19 : ""}
                            onChange={this.onChange} 
                        /><label>Complexidade, mesmo se confuso</label><br></br>
                    <input  type="radio"
                            value="C"
                            name="q19"
                            checked={q19 === "C" ? isActive[18] = q19 : ""}
                            onChange={this.onChange} 
                        /><label>Calor humano e animação</label><br></br>
                    <input  type="radio"
                            value="O"
                            name="q19"
                            checked={q19 === "O" ? isActive[18] = q19 : ""}
                            onChange={this.onChange}
                        
                        /><label>Ordem e sistematização</label><br></br>
                    <input  type="radio"
                            value="A"
                            name="q19"
                            checked={q19 === "A" ? isActive[18] = q19 : ""}
                            onChange={this.onChange}
                        
                        /><label>Coisas claras e simples</label><br></br>
                
                </div>    
                
                <div>
                    <h2>Tempo para mim é...</h2>
                    
                    <input  type="radio"
                            value="I"
                            name="q20"
                            checked={q20 === "I" ? isActive[19] = q20 : ""}
                            onChange={this.onChange} 
                        /><label>Irrelevante</label><br></br>
                    <input  type="radio"
                            value="C"
                            name="q20"
                            checked={q20 === "C" ? isActive[19] = q20 : ""}
                            onChange={this.onChange} 
                        /><label>Um grande ciclo</label><br></br>
                    <input  type="radio"
                            value="O"
                            name="q20"
                            checked={q20 === "O" ? isActive[19] = q20 : ""}
                            onChange={this.onChange}
                        
                        /><label>Uma flecha que leva ao inevitável</label><br></br>
                    <input  type="radio"
                            value="A"
                            name="q20"
                            checked={q20 === "A" ? isActive[19] = q20 : ""}
                            onChange={this.onChange}
                        
                        /><label>Algo que detesto desperdiçar</label><br></br>
                
                </div>    
                
                <div>
                    <h2>Se eu fosse bilionário...</h2>
                    
                    <input  type="radio"
                            value="I"
                            name="q21"
                            checked={q21 === "I" ? isActive[20] = q21 : ""}
                            onChange={this.onChange} 
                        /><label>Faria o que desse na cabeça</label><br></br>
                    <input  type="radio"
                            value="C"
                            name="q21"
                            checked={q21 === "C" ? isActive[20] = q21 : ""}
                            onChange={this.onChange} 
                        /><label>Faria doações para muitas entidades</label><br></br>
                    <input  type="radio"
                            value="O"
                            name="q21"
                            checked={q21 === "O" ? isActive[20] = q21 : ""}
                            onChange={this.onChange}
                        
                        /><label>Criaria uma poupança avantajada</label><br></br>
                    <input  type="radio"
                            value="A"
                            name="q21"
                            checked={q21 === "A" ? isActive[20] = q21 : ""}
                            onChange={this.onChange}
                        
                        /><label>Exibiria bastante com algumas pessoas</label><br></br>
                
                </div>    
                
                <div>
                    <h2>Eu acredito que...</h2>
                    
                    <input  type="radio"
                            value="I"
                            name="q22"
                            checked={q22 === "I" ? isActive[21] = q22 : ""}
                            onChange={this.onChange} 
                        /><label>Bastam um navio e uma estrela para navegar</label><br></br>
                    <input  type="radio"
                            value="C"
                            name="q22"
                            checked={q22 === "C" ? isActive[21] = q22 : ""}
                            onChange={this.onChange} 
                        /><label>A jornada é mais importante que o destino</label><br></br>
                    <input  type="radio"
                            value="O"
                            name="q22"
                            checked={q22 === "O" ? isActive[21] = q22 : ""}
                            onChange={this.onChange}
                        
                        /><label>Um centavo economizado é um centavo ganho</label><br></br>
                    <input  type="radio"
                            value="A"
                            name="q22"
                            checked={q22 === "A" ? isActive[21] = q22 : ""}
                            onChange={this.onChange}
                        
                        /><label>O destino é mais importante que a jornada</label><br></br>
                
                </div>    
                
                <div>
                    <h2>Eu acredito também que...</h2>
                    
                    <input  type="radio"
                            value="I"
                            name="q23"
                            checked={q23 === "I" ? isActive[22] = q23 : ""}
                            onChange={this.onChange} 
                        /><label>Um sorriso ou uma careta é o mesmo para quem é cego</label><br></br>
                    <input  type="radio"
                            value="C"
                            name="q23"
                            checked={q23 === "C" ? isActive[22] = q23 : ""}
                            onChange={this.onChange} 
                        /><label>O que vai, volta</label><br></br>
                    <input  type="radio"
                            value="O"
                            name="q23"
                            checked={q23 === "O" ? isActive[22] = q23 : ""}
                            onChange={this.onChange}
                        
                        /><label>De grão em grão a galinha enche o papo</label><br></br>
                    <input  type="radio"
                            value="A"
                            name="q23"
                            checked={q23 === "A" ? isActive[22] = q23 : ""}
                            onChange={this.onChange}
                        
                        /><label>Aquele que hesita está perdido</label><br></br>
                
                </div>    
                
                <div>
                    <h2>Eu acredito ainda que...</h2>
                    
                    <input  type="radio"
                            value="I"
                            name="q24"
                            checked={q24 === "I" ? isActive[23] = q24 : ""}
                            onChange={this.onChange} 
                        /><label>A autoridade deve ser desafiada</label><br></br>
                    <input  type="radio"
                            value="C"
                            name="q24"
                            checked={q24 === "C" ? isActive[23] = q24 : ""}
                            onChange={this.onChange} 
                        /><label>O coletivo é mais importante do que o individual</label><br></br>
                    <input  type="radio"
                            value="O"
                            name="q24"
                            checked={q24 === "O" ? isActive[23] = q24 : ""}
                            onChange={this.onChange}
                        
                        /><label>É melhor prudência do que arrependimento</label><br></br>
                    <input  type="radio"
                            value="A"
                            name="q24"
                            checked={q24 === "A" ? isActive[23] = q24 : ""}
                            onChange={this.onChange}
                        
                        /><label>Ganhar é fundamental</label><br></br>
                
                </div>    
                
                <div>
                    <h2>Eu penso que...</h2>
                    
                    <input  type="radio"
                            value="I"
                            name="q25"
                            checked={q25 === "I" ? isActive[24] = q25 : ""}
                            onChange={this.onChange} 
                        /><label>Não é fácil ficar encurralado</label><br></br>
                    <input  type="radio"
                            value="C"
                            name="q25"
                            checked={q25 === "C" ? isActive[24] = q25 : ""}
                            onChange={this.onChange} 
                        /><label>Duas cabeças pensam melhor que do que uma</label><br></br>
                    <input  type="radio"
                            value="O"
                            name="q25"
                            checked={q25 === "O" ? isActive[24] = q25 : ""}
                            onChange={this.onChange}
                        
                        /><label>É preferível olhar, antes de pular</label><br></br>
                    <input  type="radio"
                            value="A"
                            name="q25"
                            checked={q25 === "A" ? isActive[24] = q25 : ""}
                            onChange={this.onChange}
                        
                        /><label>Se você não tem condições de competir, não compita</label><br></br>
                    <br>
                    </br>
                    </div> 
                    <div className="button-div">
                    <input  className="name" type="text" placeholder="Nome Completo" 
                            name="personName"
                            value={this.state.value} 
                            onChange={this.onChange}/>
                    <br></br>
                    <input className="enviar" type="submit" 
                                value="Enviar" 
                                onChange={resultadoPerfil()}
                    />
                    
                    </div>            
                    <input type='hidden'  name="aguia" value={aguia}/>
                    <input type='hidden'  name="lobo" value={lobo}/>
                    <input type='hidden'  name="tubarao" value={tubarao}/>
                    <input type='hidden'  name="gato" value={gato}/>
                    <input type='hidden' value={personName}/>
                    
                    
                    
                
                </div>    
            </form>
            </div>

        )
    }    
}

export default Questions;

export default function CalculadoraImc(props){

    const { kg,h } = props;
    const imc = kg / Math.pow(h,2);
    const n = imc.toFixed(1)
    let situacao = '';
    switch(true){
        case n < 18.5:
            situacao = 'Abaixo do peso';
            break;
        case n > 18.6 && n < 24.9:
            situacao = 'Peso normal';
            break;
        case n > 25 && n < 29.9:
            situacao = 'Levemente acima do peso'
            break;
        case n > 30 && n < 34.9:
            situacao = 'Obesidade 1';
            break;
        case n > 35 && n < 39.9:
            situacao = 'Obesidade 2 (Severa)';
            break;
        case n > 40:
            situacao = 'Obesidade 3 (Mórbida)'
            break;
    }

    return(
        <div>
            <h2>Situacao: {situacao}</h2>
        </div>
    )
}